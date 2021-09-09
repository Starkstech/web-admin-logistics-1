import React, { FC } from 'react'
import { useTicketContext } from '../../../Interfaces/Tickets/Tickets'
import './TicketsView.scss'

type iTicketsView = {
    id: String,
    name: String,
    subject: String,
    updated_at: String,
    message: String
}

const TicketsView: FC<iTicketsView> = ({ id, name, subject, updated_at, message }) => {
  const { setActiveTicket, activeTicket } = useTicketContext()
  const updateTicket = () => {
    setActiveTicket({
      id, name, subject, updated_at, message
    })
  }

  return (
        <div onClick={updateTicket}
            className={`tickets_view d-flex justify-content-start align-items-center shadow-sm ${activeTicket.id === id ? 'active' : null}`}
        >
            <div className="tickets_view-avatar"></div>
            <div className="w-100">
                <div className="tickets_view-name d-flex justify-content-between align-items-center">
                    <span>{name}</span>
                    <small>{updated_at}</small>
                </div>
                <div className="tickets_view-msg">{subject}</div>
            </div>
        </div>
  )
}

export default TicketsView
