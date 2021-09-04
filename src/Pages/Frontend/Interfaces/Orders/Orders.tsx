/* eslint-disable react/display-name */
import React, { FC, useState, useEffect } from "react";
import { Search } from "../../../../Component";
import axios from "../../../../Services/axios";
import { OrdersModal, OrdersTable } from "../../Components";
import './Orders.scss'

const Orders:FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [orderId, setOrderId] = useState(null)

  const [orderDetails, setOrderDetails] = useState([])
  const [data, setData] = useState<{}[]>([])

  // Fetching order details from the backend
  useEffect(() => {
    fetchOrdersDetails()
  }, [])

  type OrderDetail = {
    tracking_id: string,
    contact_details: {phone_number: string},
    order_cost: number,
    pick_up_location: string,
    delivery_location: string,
    pick_up_date: string
  }

  // Updating the data state needed for the react-data-table-component
  useEffect(() => {
    if (orderDetails.length >= 0) {
      orderDetails.map((orderDetail: OrderDetail) => {
        console.log(orderDetails)
        const { tracking_id, order_cost, pick_up_location, delivery_location, pick_up_date } = orderDetail
        const phoneNo = orderDetail.contact_details.phone_number
        return (
          setData([{ tracking_id, phoneNo, order_cost, pickoff: pick_up_location, dropoff: delivery_location, date: pick_up_date }])
        )
      })
    }
  }, [orderDetails])

  const fetchOrdersDetails = async () => {
    try {
      const { data } = await axios.get("/order")
      setOrderDetails(data);
    } catch (error) {
      console.log(`Error coming from the order page ${error}`)
    }
  }

  const toggleModal = (id:any) => {
    console.log(id)
    setOrderId(id)
    setShowModal((status) => !status)
  }

  return (
    <div className="orders_wrapper p-4">
    <h2 className="heading_2x">Orders</h2>
    <div className="mt-4">
        <Search />
    </div>
    <div className="shadow-sm mt-4 orders_table">
        <OrdersTable toggleModal={toggleModal} data={data} />
    </div>
    {showModal ? <OrdersModal orderId={orderId} toggleModal={toggleModal} /> : null}
</div>
  )
}

export default Orders
