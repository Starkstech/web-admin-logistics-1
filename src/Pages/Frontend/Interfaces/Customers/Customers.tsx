import React, { FC, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
// import { useSelector } from 'react-redux'
// import CryptoJS from 'crypto-js'

import { Search } from '../../../../Component'
import './Customers.scss'
import { SERVER_URL } from '../../../../Constant/urlConstant'

const columns = [
  {
    name: 'Name',
    selector: (row:any) => row.firstname,
  },
  {
    name: 'Contact no.',
    selector: (row:any) => row.phone,
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

const initialCustomers = [
  {
    firstname: 'Isaac Orija',
    phone: '0234',
    totalSpendings: '2000',
    tripsNo: '23',
    dateJoined: 'Aug 20, 2021. 10:00am',
    address: '',
  },
  {
    firstname: 'Ajenefuja Micheal',
    phnoe: '0234',
    totalSpendings: '2000',
    tripsNo: '23',
    dateJoined: 'Aug 20, 2021. 10:00am',
    address: '',
  },
]

const Customers:FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [customers, setCustomers] = useState<{}[]>([])

  useEffect(() => {
    fetchCustomers()
  }, [])

  // const user = useSelector((state: any) => state.user)
  // const dUser = CryptoJS.AES.decrypt(user.currentUser, '12345')
  // const decryptedData = JSON.parse(dUser.toString(CryptoJS.enc.Utf8))

  const fetchCustomers = async () => {
    // eslint-disable-next-line quote-props
    // const config = { headers: { "Authorization": `Bearer ${decryptedData.acccess_token}` } }
    try {
      const { data } = await axios.get(`${SERVER_URL}/user/customers`)
      // setCustomers(data)
      console.log(data)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
      <div className="customers_wrapper p-4">
          <h2 className="heading_2x">Customers</h2>
          <div className="mt-4">
              <Search />
          </div>
          <div className="shadow-sm mt-4">
              <DataTable
                  columns={columns}
                  data={initialCustomers}
                  customStyles={customStyles}
                  noHeader
                  responsive
              />
          </div>

          <Toaster
                toastOptions={{
                  style: {
                    height: '70px',
                    padding: '1em',
                  },
                }}
            />
      </div>
  )
}

export default Customers;
