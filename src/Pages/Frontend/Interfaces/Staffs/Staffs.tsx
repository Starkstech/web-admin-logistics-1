import React, { FC } from 'react'
import DataTable from 'react-data-table-component'
import { Search } from '../../../../Component'
import './Staffs.scss'

const columns = [
  {
    name: 'Name',
    selector: 'name',
  },
  {
    name: 'Contact no.',
    selector: 'contactNo',
  },
  {
    name: 'Total earnings',
    selector: 'totalEarnings',
  },
  {
    name: 'No. of trips',
    selector: 'tripsNo',
  },
  {
    name: 'Date created',
    selector: 'dateCreated',
  },
  {
    name: 'Address',
    selector: 'address',
  },
]

const data = [
  {
    name: 'Isaac Orija',
    contactNo: '0234',
    totalEarnings: '2000',
    tripsNo: '23',
    dateCreated: 'Aug 20, 2021. 10:00am',
    address: '',
  },
  {
    name: 'Ajenefuja Micheal',
    contactNo: '0234',
    totalEarnings: '2000',
    tripsNo: '23',
    dateCreated: 'Aug 20, 2021. 10:00am',
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

const Staffs: FC = () => {
  return (
        <div className="staffs_wrapper p-5">
            <h2 className="heading_2x">Staffs</h2>
            <div className="d-flex justify-content-between align-items-center">
                <Search />
                <button className="btn_main">Add Rider</button>
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

export default Staffs
