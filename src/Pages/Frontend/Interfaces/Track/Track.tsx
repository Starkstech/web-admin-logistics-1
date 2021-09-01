/* eslint-disable react/display-name */
import React, { FC, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Search } from '../../../../Component'
import { TrackOrder } from '../../Components'
import './Track.scss'

const data = [
  {
    customer: 'Isaac Orija',
    orderNo: '0234',
    estimatedCost: '2000',
  },
  {
    customer: 'Ade Orija',
    orderNo: '0235',
    estimatedCost: '3000',
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

const Track: FC = () => {
  const [trackId, setTrackId] = useState()
  const [trackStatus, setTrackStatus] = useState(false)

  const columns = [
    {
      name: 'Order no.',
      selector: 'orderNo',
    },
    {
      name: 'Customer',
      selector: 'customer',
    },
    {
      name: 'Estimated cost',
      selector: 'estimatedCost',
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

  return (
        <div className="track_wrapper p-4">
            <h2 className="heading_2x">Track Item</h2>
            <div>
                <Search />
                <div className="d-flex flex-wrap justify-content-between align-items-start mt-5">
                    <div className="track-table shadow-sm">
                        <DataTable
                            columns={columns}
                            data={data}
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
