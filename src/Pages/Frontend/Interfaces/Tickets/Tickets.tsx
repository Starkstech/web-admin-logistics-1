import React, { FC } from "react";
import { TicketsMain, TicketsSidebar, TicketsInfo } from "../../Components";
import './Tickets.scss'

const Tickets:FC = () => {
  return (
        <div className="tickets">
            <TicketsSidebar />
            <TicketsMain />
            <TicketsInfo />
        </div>
  )
}

export default Tickets;
