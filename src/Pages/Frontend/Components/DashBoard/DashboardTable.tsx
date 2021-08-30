/* eslint-disable no-undef */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-filename-extension */
import React, { FC } from "react";
import DataTable from "react-data-table-component"

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
      status: 'In transit',
      action: '...',
    }
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
      center: true
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
      center: true
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
      sortable: true,
      center: true
    },
  ];

  const customStyles = {
    // rows: {
    //   style: {
    //     fontSize: '13px',
    //     color: "red",
    //     backgroundColor: "#333",
    //     minHeight: '48px',
    //     //   '&:not(:last-of-type)': {
    //     //     borderBottomStyle: 'solid',
    //     //     borderBottomWidth: '1px',
    //     // borderBottomColor: theme.divider.default,
    //   },
    // },

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
    // selectableRowsComponent={ Checkbox }
    selectableRowsComponentProps={{ inkDisabled: true }}
    // onSelectedRowsChange={handleChange}
    // expandableRows
    // expandableRowsComponent={<ExpandableComponent />}
    // pagination noHeader={true}
  />
  </>
  )
}
export default DashboardTable
