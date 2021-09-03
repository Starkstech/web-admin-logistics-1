/* eslint-disable react/display-name */
import React, { FC, useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { SERVER_URL } from "../../../../Constant/urlConstant";
import { useSelector } from "react-redux";
import { Search } from "../../../../Component";
import { OrdersModal, OrdersTable } from "../../Components";
import axios from "axios";
import './Orders.scss'

const Orders:FC = () => {
  const { currentUser } = useSelector((state:any) => state.user)
  const [showModal, setShowModal] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [orderData, setOrderData] = useState([])
  const [orderDataDefault, setOrderDataDefault] = useState([])

  const getOrders = async () => {
    const data = CryptoJS.AES.decrypt(currentUser, '12345');
    const decryptedData = JSON.parse(data.toString(CryptoJS.enc.Utf8));

    const config = {
      headers: { Authorization: `Bearer ${decryptedData.acccess_token}` }
    };

    try {
      const { data } = await axios.get(`${SERVER_URL}/order`, config)
      setOrderDataDefault(data)
      setOrderData(data)
    } catch (error:any) {
      console.log(error.message)
    }
  }

  const searchOrders = async (keyword:any) => {
    const filtered = orderDataDefault.filter((ridee:any) => {
      return ridee.tracking_id.toString().includes(keyword)
    })
    setOrderData(filtered)
  }

  useEffect(() => {
    getOrders()
  }, [])

  const toggleModal = (data:any) => {
    setShowModal((status) => !status)
    setSelectedOrder(data)
  }

  return (
    <div className="orders_wrapper p-4">
    <h2 className="heading_2x">Orders</h2>
    <div className="mt-4">
        <Search handleSearch={searchOrders} />
    </div>
    <div className="shadow-sm mt-4 orders_table">
        <OrdersTable toggleModal={toggleModal} data={orderData} />
    </div>
    {showModal ? <OrdersModal selectedOrder={selectedOrder} toggleModal={toggleModal} /> : null}
</div>
  )
}

export default Orders;
