import React, { FC } from 'react'
import './TicketsEmpty.scss'

const TicketsEmpty:FC = () => {
  return (
        <div className="tickets_empty d-flex flex-column justify-content-center align-items-center">
            <div className="tickets_empty-icon">
            <i className="fas fa-comments"></i>
            </div>
            <div className="tickets_empty-msg">
            <p>Please select a ticket to attend to</p>
            </div>
        </div>
  )
}

export default TicketsEmpty
