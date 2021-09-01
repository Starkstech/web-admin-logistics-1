/* eslint-disable react/display-name */
import React, { FC, useState } from "react";
import { Search } from "../../../../Component";
import { OrdersModal, OrdersTable } from "../../Components";
import './Orders.scss'

const data = [
  {
    id: 1,
    orderNo: '0001',
    phoneNo: '+2348169199932',
    amount: '₦20000',
    pickoff: '+1b Akinyemi Ave.',
    dropoff: '+1b Akinyemi Ave.',
    date: '11:08am 20 Oct 2021',
    status: 'In transit'
  },
  {
    id: 2,
    orderNo: '0001',
    phoneNo: '+2348169199932',
    amount: '₦20000',
    pickoff: '+1b Akinyemi Ave.',
    dropoff: '+1b Akinyemi Ave.',
    date: '11:08am 20 Oct 2021',
    status: 'In transit'
  },
]

const Orders:FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [orderId, setOrderId] = useState(null)

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

export default Orders;
