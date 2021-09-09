import React, { FC } from 'react'
import { useTicketContext } from '../../../Interfaces/Tickets/Tickets'
import './TicketsView.scss'

type iTicketsView = {
    id: String,
    username: String,
    title: String,
    active?: boolean,
    updatedAt: String
}

const TicketsView: FC<iTicketsView> = ({ id, title, username, updatedAt }) => {
  const { setActiveTicket, activeTicket } = useTicketContext()
  const updateTicket = () => {
    setActiveTicket({
      id, title, username, updatedAt
    })
  }

  return (
        <div onClick={updateTicket}
            className={`tickets_view d-flex justify-content-start align-items-center shadow-sm ${activeTicket.id === id ? 'active' : null}`}
        >
            <div className="tickets_view-avatar"></div>
            <div className="w-100">
                <div className="tickets_view-name d-flex justify-content-between align-items-center">
                    <span>{username}</span>
                    <small>{updatedAt}</small>
                </div>
                <div className="tickets_view-msg">{title}</div>
            </div>
        </div>
  )
}

export default TicketsView
