/* eslint-disable react/display-name */
import React, { FC, useState, useEffect } from 'react'
import axios from "axios";
import CryptoJS from "crypto-js";
import { SERVER_URL } from "../../../../Constant/urlConstant";
import { useSelector } from "react-redux";
import DataTable from 'react-data-table-component'
import { Search } from '../../../../Component'
import { TrackOrder } from '../../Components'
import './Track.scss'

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

const Track: FC = () => {
  const { currentUser } = useSelector((state:any) => state.user)
  const [trackId, setTrackId] = useState()
  const [orderData, setOrderData] = useState([])
  const [orderDataDefault, setOrderDataDefault] = useState([])
  const [trackStatus, setTrackStatus] = useState(false)

  const getOrders = async () => {
    const data = CryptoJS.AES.decrypt(currentUser, '12345');
    const decryptedData = JSON.parse(data.toString(CryptoJS.enc.Utf8));

    const config = {
      headers: { Authorization: `Bearer ${decryptedData.acccess_token}` }
    };

    try {
      const { data } = await axios.get(`${SERVER_URL}/order`, config)
      setOrderDataDefault(data)
      setOrderData(data)
    } catch (error:any) {
      console.log(error.message)
    }
  }

  const searchOrders = async (keyword:String) => {
    const filtered = orderDataDefault.filter((ordee:any) => {
      return ordee.tracking_id.toString().includes(keyword)
    })
    setOrderData(filtered)
  }

  const columns = [
    {
      name: 'Order No.',
      selector: (row:any) => row.tracking_id,
      sortable: true,
      center: true
    },
    {
      name: 'Customer',
      selector: (row:any) => row.phoneNo,
      sortable: true,
    },

    {
      name: 'Estimated cost',
      selector: (row:any) => row.order_cost,
      sortable: true,
      center: true
    },
    {
      name: 'Action',
      cell: (row:any) => <button onClick={() => trackOrder(row.id)} className="btn_sm">Track</button>
    },
  ]

  const trackOrder = (id:any) => {
    setTrackId(id)
    setTrackStatus(true)
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
        <div className="track_wrapper p-4">
            <h2 className="heading_2x">Track Item</h2>
            <div>
                <Search handleSearch={searchOrders} />
                <div className="d-flex flex-wrap justify-content-between align-items-start mt-5">
                    <div className="track-table shadow-sm">
                        <DataTable
                            columns={columns}
                            data={orderData}
                            customStyles={customStyles}
                            noHeader
                            responsive
                        />
                    </div>
                    {
                      trackStatus ? <TrackOrder trackId={trackId} /> : null
                    }
                </div>
            </div>
        </div>
  )
}

export default Track
