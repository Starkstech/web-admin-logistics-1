/* eslint-disable react/display-name */
import React, { FC } from 'react'
import DataTable from 'react-data-table-component'
import './OrdersTable.scss'

interface TableTypes {
    toggleModal: Function
    data: any
}

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

const OrdersTable: FC<TableTypes> = ({ toggleModal, data }) => {
  const columns = [
    {
      name: 'Order No.',
<<<<<<< HEAD
      selector: (row: any) => row.tracking_id,
=======
      selector: (row:any) => row.tracking_id,
>>>>>>> 3ad030ebae0be8fc133fdbb161e45ddcb6395a50
      sortable: true,
      center: true,
    },
    {
      name: 'Phone number',
      selector: (row: any) => row.phoneNo,
      sortable: true,
    },

    {
      name: 'Amount',
<<<<<<< HEAD
      selector: (row: any) => row.amount,
=======
      selector: (row:any) => row.order_cost,
>>>>>>> 3ad030ebae0be8fc133fdbb161e45ddcb6395a50
      sortable: true,
      center: true,
    },
    {
      name: 'Pick off',
<<<<<<< HEAD
      selector: (row: any) => row.pickoff,
=======
      selector: (row:any) => row.pick_up_location,
>>>>>>> 3ad030ebae0be8fc133fdbb161e45ddcb6395a50
      sortable: true,
      center: true,
      style: {
        overflow: 'visible !important',
        textOverflow: 'none',
      },
    },
    {
      name: 'Drop off',
<<<<<<< HEAD
      selector: (row: any) => row.dropoff,
=======
      selector: (row:any) => row.delivery_location,
>>>>>>> 3ad030ebae0be8fc133fdbb161e45ddcb6395a50
      sortable: true,
      center: true,
    },
    {
      name: 'Date',
<<<<<<< HEAD
      selector: (row: any) => row.date,
      sortable: true,
      center: true,
      style: {
        overflow: 'visible !important',
        textOverflow: 'visible',
      },
=======
      selector: (row:any) => row.createdAt,
      sortable: true,
      center: true
>>>>>>> 3ad030ebae0be8fc133fdbb161e45ddcb6395a50
    },
    {
      name: 'Status',
      selector: (row: any) => row.status,
      sortable: true,
      center: true,
      cell: (row: any) => (
                <div className={`order_status ${sortStatus(row.status)}`}>
                    {row.status}
                </div>
      ),
    },
    {
      name: 'Actions',
      selector: (row: any) => row.action,
      allowOverflow: true,
      sortable: true,
      center: true,
<<<<<<< HEAD
      cell: (row: any) => (
                <div className="actions_container">
                    <button className="actions_container_btn btn">...</button>
                    <ActionsBoard orderId={row.id} />
                </div>
      ),
=======
      cell: (row:any) => (<div className="actions_container"><button className="actions_container_btn btn">...</button><ActionsBoard orderData={row} /></div>)
>>>>>>> 3ad030ebae0be8fc133fdbb161e45ddcb6395a50
    },
  ]

<<<<<<< HEAD
    type BoardType = {
        orderId: any
    }

    const ActionsBoard: FC<BoardType> = ({ orderId }) => (
        <ul className="actions_container_board p-2 shadow-sm bg-white">
            <button className="btn">View</button>
            <button className="btn" onClick={() => toggleModal(orderId)}>
                Accept
            </button>
            <button className="btn">Reject</button>
        </ul>
    )
=======
  type BoardType = {
      orderData: any
  }

  const ActionsBoard:FC<BoardType> = ({ orderData }) => (
    <ul className="actions_container_board p-2 shadow-sm bg-white">
      <button className="btn">View</button>
      <button className="btn" onClick={() => toggleModal(orderData)}>Accept</button>
      <button className="btn">Reject</button>
    </ul>
  )
>>>>>>> 3ad030ebae0be8fc133fdbb161e45ddcb6395a50

    const sortStatus = (status: any) => {
      switch (status) {
        case 'In transit':
          return 'in-transit'
        default:
          return ''
      }
    }

    return (
        <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            noHeader
            responsive
        />
    )
}

export default OrdersTable
