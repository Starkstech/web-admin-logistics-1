import React, { FC, useEffect } from 'react'
import CryptoJS from "crypto-js";
import { Modal, Search } from '../../../../../Component'
import axios from 'axios'
import OrdersRider from '../OrdersRider/OrdersRider'
import { SERVER_URL } from '../../../../../Constant/urlConstant';
import { useSelector } from "react-redux";
import './OrdersModal.scss'

type OrderId = {
    selectedOrder: any,
    toggleModal: Function
}

const OrdersModal:FC<OrderId> = ({ selectedOrder, toggleModal }) => {
  const { currentUser } = useSelector((state:any) => state.user)
  const data = CryptoJS.AES.decrypt(currentUser, '12345');
  const decryptedData = JSON.parse(data.toString(CryptoJS.enc.Utf8));

  const config = {
    headers: { Authorization: `Bearer ${decryptedData.acccess_token}` }
  };

  const assignOrder = async () => {
    console.log('assigning...')
    const postData = {
      orderId: selectedOrder.id,
      staffId: 3,
      status: 'assigned'
    }

    try {
      const busyStatus = await axios.post(`${SERVER_URL}/staff/busy-status`, {
        staffId: 3,
        isBusy: false
      }, config)
      console.log(busyStatus, "THis is the busy Status")
      const { data } = await axios.post(`${SERVER_URL}/order/assign-order`, postData, config)
      console.log(data, "It has been assigned")
    } catch (error) {
      console.log(error.message, 'cannot assign')
    }
    // toggleModal(null)
  }

  const getRiders = async () => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/staff`, config)
      console.log(data, "THis are all the staffs")
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getRiders()
  }, [])

  return (
        <Modal>
          <div className="order_modal bg-white shadow-sm">
            <h3 className="heading_3x order_modal-header py-2 px-5 shadow-sm">Assign Order <span>#{selectedOrder.id}</span> to rider</h3>
            <div className="order_modal-body p-5">
              <p><strong>Pickoff address:</strong> {selectedOrder.pick_up_location}</p>
              <p><strong>Delivery address:</strong> {selectedOrder.delivery_location}</p>

              <label>Pick a rider:</label>
              <Search />
              <div>
              <span>Assigned to:</span>
              <div>
                  <OrdersRider />
                  <OrdersRider />
              </div>
              </div>
                <div className="mt-3 d-flex justify-content-end">
                  <button onClick={assignOrder} className="btn_main">Done</button>
                </div>
            </div>
          </div>
        </Modal>
  )
}

export default OrdersModal
