import React, { FC } from "react";
import DataTable from "react-data-table-component";
import { Search } from "../../../../Component";
import './Orders.scss'

const columns = [
  {
    name: 'Order No.',
    selector: (row:any) => row.orderNo,
    sortable: true,
    center: true

  },
  {
    name: 'Phone number',
    selector: (row:any) => row.phoneNo,
    sortable: true,
  },

  {
    name: 'Amount',
    selector: (row:any) => row.amount,
    sortable: true,
    center: true
  },
  {
    name: 'Pick off',
    selector: (row:any) => row.pickoff,
    sortable: true,
    center: true,
    style: {
      overflow: 'visible !important',
      textOverflow: 'none'
    }
  },
  {
    name: 'Drop off',
    selector: (row:any) => row.dropoff,
    sortable: true,
    center: true
  },
  {
    name: 'Date',
    selector: (row:any) => row.date,
    sortable: true,
    center: true,
    style: {
      overflow: 'visible !important',
      textOverflow: 'visible'
    }
  },
  {
    name: 'Status',
    selector: (row:any) => row.status,
    sortable: true,
    center: true
  },
  {
    name: 'Actions',
    selector: (row:any) => row.action,
    allowOverflow: true,
    sortable: true,
    center: true,
    // eslint-disable-next-line react/display-name
    cell: () => (<div className="actions_container"><button className="actions_container_btn btn">...</button><ActionsBoard /></div>)
  },
];

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

const Orders:FC = () => {
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

export default Orders;
