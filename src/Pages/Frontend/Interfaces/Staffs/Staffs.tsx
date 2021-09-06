import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CryptoJS from 'crypto-js'
import toast, { Toaster } from 'react-hot-toast'

import axios from '../../../../Services/axios'
import { Search } from '../../../../Component'
import StaffsTable from './StaffsTable'
import './Staffs.scss'
import { SERVER_URL } from '../../../../Constant/urlConstant'

const Staffs: FC = () => {
  const history = useHistory()
  const [staffs, setStaffs] = useState<any>([])

  useEffect(() => {
    fetchStaffs()
  }, [staffs])

  const user = useSelector((state: any) => state.user)
  const dUser = CryptoJS.AES.decrypt(user.currentUser, '12345')
  const decryptedData = JSON.parse(dUser.toString(CryptoJS.enc.Utf8))

  const fetchStaffs = async () => {
    // eslint-disable-next-line quote-props
    const config = { headers: { "Authorization": `Bearer ${decryptedData.acccess_token}` } }
    try {
      const { data } = await axios.get(`${SERVER_URL}/staff`, config)
      setStaffs(data)
    } catch (error:any) {
      toast.error(error.message)
    }
  }

  const deleteStaff = async (id: string) => {
    const staff = staffs.find((staff: any) => staff.id === id)
    // eslint-disable-next-line quote-props
    const config = { headers: { "Authorization": `Bearer ${decryptedData.acccess_token}` } }
    try {
      const { data } = await axios.delete(`${SERVER_URL}/staff/${staff.sid}`, config)
      fetchStaffs()
      toast.success(data)
    } catch (error:any) {
      toast.error(error.message)
    }
  }

  return (
        <div className="staffs_wrapper p-4">
            <h2 className="heading_2x">Staff</h2>
            <div className="d-flex justify-content-between align-items-center">
                <Search handleSearch={() => null} />
                <button onClick={() => history.push('/Add-rider')} className="btn_main">Add Rider</button>
            </div>

            <div className="shadow-sm mt-4">
              <StaffsTable deleteStaff={deleteStaff} data={staffs} />
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
