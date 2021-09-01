import React, { FC } from 'react'
import { Modal, Search } from '../../../../../Component'
import OrdersRider from '../OrdersRider/OrdersRider'
import './OrdersModal.scss'

type OrderId = {
    orderId: any,
    toggleModal: Function
}

const OrdersModal:FC<OrderId> = ({ orderId, toggleModal }) => {
  return (
        <Modal>
          <div className="order_modal bg-white shadow-sm">
            <h3 className="heading_3x order_modal-header py-2 px-5 shadow-sm">Assign Order <span>#{orderId}</span> to rider</h3>
            <div className="order_modal-body p-5">
              <p><strong>Pickoff address:</strong> 1b Akinyemi Avenue</p>
              <p><strong>Delivery address:</strong> 1b Akinyemi Avenue</p>

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
                  <button onClick={() => toggleModal(null)} className="btn_main">Done</button>
                </div>
            </div>
          </div>
        </Modal>
  )
}

export default OrdersModal
