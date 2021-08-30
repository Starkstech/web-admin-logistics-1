/* eslint-disable no-unused-vars */
import React, { FC, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

import axios from 'axios'
import { Search } from '../../../../Component'
import './Orders.scss'

const columns = [
  {
    name: 'Order No.',
    selector: 'orderNo',
    sortable: true,
    center: true,
  },
  {
    name: 'Phone number',
    selector: 'phoneNo',
    sortable: true,
  },

  {
    name: 'Amount',
    selector: 'amount',
    sortable: true,
    center: true,
  },
  {
    name: 'Pick off',
    selector: 'pickoff',
    sortable: true,
    center: true,
    style: {
      overflow: 'visible !important',
      textOverflow: 'none',
    },
  },
  {
    name: 'Drop off',
    selector: 'dropoff',
    sortable: true,
    center: true,
  },
  {
    name: 'Date',
    selector: 'date',
    sortable: true,
    center: true,
    style: {
      overflow: 'visible !important',
      textOverflow: 'visible',
    },
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    center: true,
  },
  {
    name: 'Actions',
    selector: 'action',
    allowOverflow: true,
    sortable: true,
    center: true,
    // eslint-disable-next-line react/display-name
    cell: () => (
            <div className="actions_container">
                <button className="actions_container_btn btn">...</button>
                <ActionsBoard />
            </div>
    ),
  },
]

const ActionsBoard = () => (
  <ul className="actions_container_board p-2 shadow-sm bg-white">
    <li>View</li>
    <li>Edit</li>
    <li>Delete</li>
  </ul>
)
const customStyles = {
  headRow: {
    style: {
      height: '45px',
      minHeight: '40px',
    },
  },
  headCells: {
    style: {
      backgroundColor: '#F4F6F5',
    },
  },
}

const Orders: FC = () => {
  const [orderDetails, setOrderDetails] = useState([])

  useEffect(() => {
    fetchOrdersDetails()
  }, [])

  const fetchOrdersDetails = async () => {
    try {
      const { data } = await axios.get("https://logistics-app-starks.herokuapp.com/api/order")
      setOrderDetails(data);
    } catch (error) {
      console.log(`Error coming from the order page ${error}`)
    }
  }

  const data: {}[] = [{}];

  type OrderDetail = {
    id: string,
    orderDetail: string,
    contact_details: {name: string, phone_number: string},
    amount: string,
    pickoff: string,
    dropoff: string,
    date: string,
    status: string,
  }

  if (orderDetails?.length) {
    console.log(orderDetails)
    orderDetails.map((orderDetail: OrderDetail) => ({
      id: orderDetail.id,
      orderNo: orderDetail.id,
      phoneNo: orderDetail.contact_details.phone_number,
      // amount: orderDetail.,
      pickoff: orderDetail,
      dropoff: orderDetail,
      date: orderDetail,
      status: orderDetail.status
    }))
  }

  // const data = [
  //   {
  //     id: 1,
  //     orderNo: '0001',
  //     phoneNo: '+2348169199932',
  //     amount: '₦20000',
  //     pickoff: '+1b Akinyemi Ave.',
  //     dropoff: '+1b Akinyemi Ave.',
  //     date: '11:08am 20 Oct 2021',
  //     status: 'In transit',
  //   }
  // ]

  return (
        <div className="orders_wrapper p-4">
            <h2 className="heading_2x">Orders</h2>
            <div className="mt-4">
                <Search />
            </div>
            <div className="shadow-sm mt-4 orders_table">
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                    noHeader
                    responsive
                />
            </div>
        </div>
  )
}

export default Orders
