import React, { FC, useContext, useState } from "react";
import { TicketsMain, TicketsSidebar, TicketsInfo, TicketsEmpty } from "../../Components";
import './Tickets.scss'

type ContextType = {
  setActiveTicket: Function
  activeTicket: {
    id: string,
    title: string,
    username: string,
    updatedAt: string
  }
}

const defaultTicketData = {
  id: '',
  title: '',
  username: '',
  updatedAt: ''
}

const TicketsContext = React.createContext<ContextType>({
  setActiveTicket: () => {},
  activeTicket: defaultTicketData
})

const Tickets:FC = () => {
  const [showInfo, setShowInfo] = useState(false)
  const [activeTicket, setActiveTicket] = useState(defaultTicketData)
  return (
    <TicketsContext.Provider value={{ setActiveTicket: setActiveTicket, activeTicket: activeTicket }} >
        <div className={`tickets ${showInfo && 'show_info'}`}>
            <TicketsSidebar setActiveTicket={setActiveTicket} />
            {
              activeTicket.id !== '' ? <TicketsMain setShowInfo={setShowInfo} /> : <TicketsEmpty />
            }
            {
              showInfo ? <TicketsInfo setShowInfo={setShowInfo} /> : null
            }
        </div>
    </TicketsContext.Provider>
  )
}
export const useTicketContext = () => useContext(TicketsContext)
export default Tickets;
