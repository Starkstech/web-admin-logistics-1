import React, { FC, useState } from 'react'

const OrdersRider: FC = () => {
  const [status, setStatus] = useState(false)

  const updateStatus = () => {
    setStatus((status:any) => !status)
  }
  return (
        <div>
            <div className="rider_details mt-3 d-flex justify-content-start align-items-center">
                <div className="rider_avatar">
                    <i className="fas fa-user"></i>
                </div>
                <span>Toheeb Khalid</span>
                <button onClick={updateStatus} className="btn_sm">{!status ? 'Assign' : 'Unassign'}</button>
            </div>
        </div>
  )
}

export default OrdersRider
