import React, { FC } from 'react'
import DataTable from 'react-data-table-component'
import { Search } from '../../../../Component'
import './Customers.scss'

const columns = [
  {
    name: 'Name',
    selector: (row:any) => row.name,
  },
  {
    name: 'Contact no.',
    selector: (row:any) => row.contactNo,
  },
  {
    name: 'Total Spendings',
    selector: (row:any) => row.totalSpendings,
  },
  {
    name: 'No. of trips',
    selector: (row:any) => row.tripsNo,
  },
  {
    name: 'Date Joined',
    selector: (row:any) => row.dateJoined,
  },
  {
    name: 'Address',
    selector: (row:any) => row.address,
  },
]

const data = [
  {
    name: 'Isaac Orija',
    contactNo: '0234',
    totalSpendings: '2000',
    tripsNo: '23',
    dateJoined: 'Aug 20, 2021. 10:00am',
    address: '',
  },
  {
    name: 'Ajenefuja Micheal',
    contactNo: '0234',
    totalSpendings: '2000',
    tripsNo: '23',
    dateJoined: 'Aug 20, 2021. 10:00am',
    address: '',
  },
]

const customStyles = {
  headRow: {
    style: {
      height: '40px',
      minHeight: '40px',
    },
  },
  headCells: {
    style: {
      backgroundColor: '#F4F6F5',
    },
  },
}

const Customers:FC = () => {
  return (
      <div className="customers_wrapper p-4">
          <h2 className="heading_2x">Customers</h2>
          <div className="mt-4">
              <Search />
          </div>
          <div className="shadow-sm mt-4">
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

export default Customers;
