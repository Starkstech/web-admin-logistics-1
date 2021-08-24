import React, { FC } from 'react'
import DataTable from 'react-data-table-component'
import { Search } from '../../../../Component'
import './Track.scss'

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
]

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
  return (
        <div className="track_wrapper p-5">
            <h2 className="heading_2x">Track Item</h2>
            <div>
                <Search />
                <div className="d-flex justify-content-between align-items-start mt-5">
                    <div className="track-table shadow-sm">
                        <DataTable
                            columns={columns}
                            data={data}
                            customStyles={customStyles}
                            noHeader
                            responsive
                        />
                    </div>
                    <div className="track-info d-flex flex-column justify-content-center align-items-center shadow-sm p-4">
                        <div className="shadow-lg my-4 mx-3 px-4 py-2">
                            Your package is on the way
                        </div>

                        <div className="track_details d-flex justify-content-start align-items-center">
                            <div className="track_details-status w-50 p-3 d-flex justify-content-start align-items-center">
                                <i className="fas fa-box"></i>
                                <span>Ongoing trip</span>
                            </div>
                            <div className="track_details-time w-50 p-2 d-flex flex-column justify-content-center align-items-center">
                                <span>Estimated time</span>
                                <time>1hr 20min</time>
                            </div>
                        </div>

                        <div className="track_delivery shadow-sm">
                            <div className="track_delivery-top p-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>15 September 2021</span>
                                    <div className="track_delivery-mode d-flex justify-content-between align-items-center p-2">
                                        <i className="fas fa-motorcycle"></i>
                                        Bike
                                    </div>
                                </div>
                                <div className="track_delivery-address d-flex justify-content-between align-items-center my-3">
                                    <span>
                                        Pickup
                                        <br />
                                        Ikeja Lagos
                                    </span>
                                    <i className="fas fa-exchange-alt"></i>
                                    <span>
                                        Delivery
                                        <br />
                                        Ikeja Lagos
                                    </span>
                                </div>
                                <hr className="bg-white p-1" />
                                <div className="d-flex justify-content-between align-items-center my-3">
                                    <div>
                                        <small>sending</small>
                                        <br />
                                        <span>Electronics and gadgets</span>
                                    </div>
                                    <div className="bg-info p-3"></div>
                                </div>
                            </div>

                            <div className="track_delivery-rider bg-white p-3 d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-start align-items-center">
                                    <div className="">
                                        <i className="fas fa-user-circle"></i>
                                    </div>
                                    <div className="">
                                        Adio Rasaki <br />
                                        <small>Your rider</small>
                                    </div>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <span>In transit</span>
                                    <i className="fas fa-phone-square-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Track
