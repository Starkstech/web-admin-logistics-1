import React, { FC, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import CryptoJS from 'crypto-js'

import { Search } from '../../../../Component'
import './Customers.scss'
import { SERVER_URL } from '../../../../Constant/urlConstant'

const columns = [
  {
    name: 'Name',
    selector: (row:any) => row.firstname,
    sortable: true,
  },
  {
    name: 'Contact no.',
    selector: (row:any) => row.phone,
    sortable: true,
  },
  {
    name: 'Total Spendings',
    selector: (row:any) => row.total_spending,
    sortable: true,
  },
  {
    name: 'No. of trips',
    selector: (row:any) => row.number_of_orders,
    sortable: true,
  },
  {
    name: 'Date Joined',
    selector: (row:any) => row.dateJoined,
    sortable: true,
  },
  {
    name: 'Address',
    selector: (row:any) => row.address,
    sortable: true,
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
  // eslint-disable-next-line no-unused-vars
  const [customers, setCustomers] = useState<{}[]>([])

  useEffect(() => {
    fetchCustomers()
  }, [])

  const user = useSelector((state: any) => state.user)
  const dUser = CryptoJS.AES.decrypt(user.currentUser, '12345')
  const decryptedData = JSON.parse(dUser.toString(CryptoJS.enc.Utf8))

  const fetchCustomers = async () => {
    const config = { headers: { Authorization: `Bearer ${decryptedData.acccess_token}` } }
    try {
      const { data } = await axios.get(`${SERVER_URL}/user/customers`, config)
      console.log(data)
      setCustomers(data)
    } catch (error:any) {
      toast.error(error.message)
    }
  }

  return (
      <div className="customers_wrapper p-4">
          <h2 className="heading_2x">Customers</h2>
          <div className="mt-4">
              <Search handleSearch={() => null} />
          </div>
          <div className="shadow-sm mt-4">
              <DataTable
                  columns={columns}
                  data={customers}
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
