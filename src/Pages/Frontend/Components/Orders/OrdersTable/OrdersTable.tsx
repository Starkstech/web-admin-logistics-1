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
      selector: (row:any) => row.tracking_id,
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
      selector: (row:any) => row.order_cost,
      sortable: true,
      center: true,
    },
    {
      name: 'Pick off',
      selector: (row:any) => row.pick_up_location,
      sortable: true,
      center: true,
      style: {
        overflow: 'visible !important',
        textOverflow: 'none',
      },
    },
    {
      name: 'Drop off',
      selector: (row:any) => row.delivery_location,
      sortable: true,
      center: true,
    },
    {
      name: 'Date',
      selector: (row:any) => row.date_assigned,
      sortable: true,
      center: true
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
      cell: (row:any) => (<div className="actions_container"><button className="actions_container_btn btn">...</button><ActionsBoard orderData={row} /></div>)
    },
  ]

  type BoardType = {
      orderData: any
  }

  const ActionsBoard:FC<BoardType> = ({ orderData }) => (
    <ul className="actions_container_board p-2 shadow-sm bg-white">
      <li>
      <button className="btn">View</button>
      </li>
      <li>
      <button className="btn" onClick={() => toggleModal(orderData)}>Accept</button>
      </li>
      <li>
      <button className="btn">Reject</button>
      </li>
    </ul>
  )

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
