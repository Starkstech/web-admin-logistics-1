import React, { FC } from 'react'
import './TicketsView.scss'

type iTicketsView = {
    active?: boolean
}

const TicketsView:FC<iTicketsView> = ({ active }) => {
  return (
        <div className={`tickets_view d-flex justify-content-start align-items-center shadow-sm ${active && 'active'}`}>
            <div className="tickets_view-avatar"></div>
            <div className="d-flex flex-column justify-content-start align-items-center">
                <div className="tickets_view-name d-flex justify-content-end align-items-center">
                <span>John Lennon</span>
                    <small>2mins ago</small>
                </div>
                <div className="tickets_view-msg">Error message on login</div>
            </div>
        </div>
  )
}

export default TicketsView
