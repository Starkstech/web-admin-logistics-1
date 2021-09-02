import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import toast, { Toaster } from 'react-hot-toast'

import axios from '../../../../Services/axios'
import { Search } from '../../../../Component'
import './Staffs.scss'

const columns = [
  {
    name: 'Name',
    selector: (row: any) => row.name,
  },
  {
    name: 'Contact no.',
    selector: (row: any) => row.contactNo,
  },
  {
    name: 'No. of trips',
    selector: (row: any) => row.tripsNo,
  },
  {
    name: 'Date created',
    selector: (row: any) => row.dateCreated,
  },
  {
    name: 'Address',
    selector: (row: any) => row.address,
  },
  {
    name: 'Actions',
    selector: 'action',
    allowOverflow: true,
    sortable: true,
    center: true,
    // eslint-disable-next-line react/display-name
    cell: () => (<div className="actions_container"><button className="actions_container_btn btn">...</button><ActionsBoard /></div>)
  }
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

const ActionsBoard = () => (
  <ul className="actions_container_board p-2 shadow-sm bg-white">
    <li>View</li>
    <li>Edit</li>
    <li>Delete</li>
  </ul>
)

const Staffs: FC = () => {
  const history = useHistory()
  const [staffs, setStaffs] = useState<{firstname: string, lastname: string, phone: string, address: {address: string}}[]>([])
  const [data, setData] = useState<{}[]>([])

  useEffect(() => {
    fetchStaffs()
  }, [])

  const fetchStaffs = async () => {
    try {
      const { data } = await axios.get("/staff")
      setStaffs(data)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (staffs.length) {
      staffs.map((staff: {firstname: string, lastname: string, phone: string, address: {address: string}}) => {
        console.log(staffs)
        const name = staff.firstname
        const phone = staff.phone
        // const createdAt = staff.
        // const address = staff.address.address
        return (
          setData([{ name, phone }])
        )
      })
    }
  }, [staffs])

  //   const deleteRiderHandler = async (id) => {
  //     setLoading(true)
  //     try {
  //       setLoading(false)
  //       toast.success("Successfull deleted")
  //       history.push('/staffs')
  //     } catch (error) {
  //       setLoading(false)
  //       toast.error(error.message)
  //     }
  //   }

  return (
        <div className="staffs_wrapper p-4">
            <h2 className="heading_2x">Staff</h2>
            {JSON.stringify(data)}
            <div className="d-flex justify-content-between align-items-center">
                <Search />
                <button
                    onClick={() => history.push('/Add-rider')}
                    className="btn_main"
                >
                    Add Rider
                </button>
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

export default Staffs
