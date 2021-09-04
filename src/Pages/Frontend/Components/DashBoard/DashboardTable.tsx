import React, { FC } from "react";
import DataTable from "react-data-table-component"

const DashboardTable: FC = () => {
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
    }
  ]
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
      center: true
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
      center: true
    },
    {
      name: 'Status',
      selector: (row:any) => row.status,
      sortable: true,
      center: true
    }
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#f5f6fa',
        fontWeight: 700,
        whiteSpace: "normal!important",
      },
    },
    cells: {
      style: {
        // paddingLeft: "20px", // override the cell padding for data cells
        // paddingRight: "8px",
        color: "#000",
        flex: "wrap",
        fontWeight: "500",
      },
    },
  }

  return (
      <>
    <DataTable className="rdt_TableBody rdt_TableCol"
   title="Lastest Trips"
 columns={columns}
    data={data}
     selectableRows
     customStyles={customStyles}
     subHeader
     persistTableHead
  />
  </>
  )
}
export default DashboardTable
