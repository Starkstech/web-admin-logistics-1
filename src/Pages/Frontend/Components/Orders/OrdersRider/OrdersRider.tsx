import React, { FC, useState } from 'react'

interface Rider {
  firstname: string,
  lastname: string,
  id: string,
  updateAssigned: Function
}

const OrdersRider:FC<Rider> = ({ firstname, lastname, id, updateAssigned }) => {
  const [status, setStatus] = useState(false)

  const updateStatus = () => {
    if (!status) {
      updateAssigned(id)
    } else {
      updateAssigned(null)
    }
    setStatus((status:any) => !status)
  }
  return (
        <div>
            <div className="rider_details mt-3 d-flex justify-content-start align-items-center">
                <div className="rider_avatar">
                    <i className="fas fa-user"></i>
                </div>
                <span>{`${firstname} ${lastname}`}</span>
                <button onClick={updateStatus} className="btn_sm">{!status ? 'Assign' : 'Unassign'}</button>
            </div>
        </div>
  )
}

export default OrdersRider
