/* eslint-disable no-undef */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-filename-extension */
import React, { FC } from "react";
import DataTable from "react-data-table-component"
import './DashboardTable.scss'

const DashboardTable: FC = () => {
//   const FilterComponent = ({ filterText }) => (
//         <>
//           <TextField id="search" type="text" placeholder="Filter By Name" aria-label="Search Input" value={filterText} onChange={onFilter} />
//         </>
//   );

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
      id: 1,
      orderNo: '0001',
      phoneNo: '+2348169199932',
      amount: '₦20000',
      pickoff: '+1b Akinyemi Ave.',
      dropoff: '+1b Akinyemi Ave.',
      date: '11:08am 20 Oct 2021',
      status: 'In transit'
    },
  ]
  const columns = [
    {
      name: 'Order No.',
      selector: 'orderNo',
      sortable: true,
      center: true

    },
    {
      name: 'Phone number',
      selector: 'phoneNo',
      sortable: true,

    //   cell: (row: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; summary: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; }) =>
    //    <>
    //   <div>
    //       <div style={{ fontWeight: 700 }}>{row.title}</div>
    //       {row.summary}
    //       </div>
    //   </>,
    },

    {
      name: 'Amount',
      selector: 'amount',
      sortable: true,
      center: true
    },
    {
      name: 'Pick off',
      selector: 'pickoff',
      sortable: true,
      center: true,
      style: {
        overflow: 'visible !important',
        textOverflow: 'none'
      }
    },
    {
      name: 'Drop off',
      selector: 'dropoff',
      sortable: true,
      center: true
    },
    {
      name: 'Date',
      selector: 'date',
      sortable: true,
      center: true,
      style: {
        overflow: 'visible !important',
        textOverflow: 'visible'
      }
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      center: true
    },
    {
      name: 'Actions',
      selector: 'action',
      allowOverflow: true,
      sortable: true,
      center: true,
      cell: () => (<div className="actions_container"><button className="actions_container_btn btn">...</button><ActionsBoard /></div>)
    },
  ];

  const ActionsBoard = () => (
    <ul className="actions_container_board p-3 shadow-sm bg-white">
      <li>View</li>
      <li>Edit</li>
      <li>Delete</li>
    </ul>
  )

  const customStyles = {
    rows: {
      style: {
        position: 'relative',
        overflow: 'visible !important',
        height: 'auto'
      },
    },

    headCells: {
      style: {
        // textAlign: 'center',
        backgroundColor: '#f5f6fa',
        fontWeight: 700,
        whiteSpace: "normal!important",
        // boxShadow: 0px 3px 6px #00000029,
      },
    },
    cells: {
      style: {
        // paddingLeft: "20px", // override the cell padding for data cells
        // paddingRight: "8px",
        color: "#000",
        flex: "wrap",
        fontWeight: "500"
      },
    },
  }

  return (
      <div className="table--wrapper mb-5">
    <DataTable
   title="Lastest Trips"
 columns={columns}
    data={data}
     customStyles={customStyles}
     persistTableHead
     responsive
  />
  </div>
  )
}
export default DashboardTable
