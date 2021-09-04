import React, { FC, useEffect, useState } from 'react'
import CryptoJS from "crypto-js";
import { Modal, Search } from '../../../../../Component'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import OrdersRider from '../OrdersRider/OrdersRider'
import { SERVER_URL } from '../../../../../Constant/urlConstant';
import { useSelector } from "react-redux";
import './OrdersModal.scss'

type OrderId = {
    selectedOrder: any,
    toggleModal: Function
}

const OrdersModal:FC<OrderId> = ({ selectedOrder, toggleModal }) => {
  const [riders, setRiders] = useState([])
  const [ridersDefault, setRidersDefault] = useState([])
  const [assignedRider, updateAssignedRider] = useState(null)
  const { currentUser } = useSelector((state:any) => state.user)
  const data = CryptoJS.AES.decrypt(currentUser, '12345');
  const decryptedData = JSON.parse(data.toString(CryptoJS.enc.Utf8));

  const config = {
    headers: { Authorization: `Bearer ${decryptedData.acccess_token}` }
  };

  const assignOrder = async () => {
    if (!assignedRider) {
      toast.error('Please assign the order to a rider')
      return
    }

    const postData = {
      orderId: selectedOrder.id,
      staffId: assignedRider,
      status: 'assigned'
    }

    try {
      await axios.post(`${SERVER_URL}/staff/busy-status`, {
        staffId: assignedRider,
        isBusy: false
      }, config)
      await axios.post(`${SERVER_URL}/order/assign-order`, postData, config)
      toast.success("Order sucessfully assigned")
      setTimeout(() => toggleModal(null), 2000)
    } catch (error:any) {
      toast.error('Error in assigning order')
    }
    // toggleModal(null)
  }

  const getRiders = async () => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/staff`, config)
      setRidersDefault(data)
      setRiders(data)
    } catch (error:any) {
      toast.error(error.message)
    }
  }

  const searchRiders = async (keyword:String) => {
    const filtered = ridersDefault.filter((ridee:any) => {
      return ridee.firstname.toLowerCase().includes(keyword.toLowerCase())
    })
    setRiders(filtered)
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
              <Search handleSearch={searchRiders} />
              <div>
              <span>Assigned to:</span>
              <div>
                {
                  riders.map((rider:any) => <OrdersRider key={rider.id} {...rider} updateAssigned={updateAssignedRider} />)
                }

              </div>
              </div>
                <div className="mt-3 d-flex justify-content-end">
                  <button onClick={assignOrder} className="btn_main">Done</button>
                </div>
            </div>
          </div>
          <Toaster toastOptions={{
            style: {
              height: '70px',
              padding: '1em'
            },
          }} />
        </Modal>
  )
}

export default OrdersModal
