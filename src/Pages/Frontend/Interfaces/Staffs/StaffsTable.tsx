import React, { FC } from 'react'
import DataTable from 'react-data-table-component'

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

interface propTypes {
  deleteStaff: Function,
  data: any
}

const StaffsTable:FC<propTypes> = props => {
  const { deleteStaff, data } = props

  const columns = [
    {
      name: 'Name',
      selector: (row: any) => row.firstname,
    },
    {
      name: 'Contact no.',
      selector: (row: any) => row.phone,
    },
    {
      name: 'Total earnings.',
      selector: (row: any) => row.totalEarnings,
    },
    {
      name: 'No. of trips',
      selector: (row: any) => row.tripsNo,
    },
    {
      name: 'Date created',
      selector: (row: any) => row.created_at,
    },
    {
      name: 'Address',
      selector: (row: any) => row.address.address,
    },
    {
      name: 'Actions',
      selector: 'action',
      allowOverflow: true,
      sortable: true,
      center: true,
      // eslint-disable-next-line react/display-name
      cell: (row: any) => (
                  <div className="actions_container">
                      <button className="actions_container_btn btn">...</button>
                      <ActionsBoard staffId={row.id} />
                  </div>
      ),
    },
  ]

  type ABoardType = { staffId: any }

  const ActionsBoard: FC<ABoardType> = ({ staffId }) => (
    <ul className="actions_container_board p-2 shadow-sm bg-white">
      <li>
        <button className="btn">View</button></li>
        <li><button className="btn">
            Edit
        </button></li>
        <li>
        <button onClick={() => deleteStaff(staffId)} className="btn">Delete</button>
        </li>
    </ul>
  )

  return (
        < DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            noHeader
            responsive
         />
  )
}

export default StaffsTable
