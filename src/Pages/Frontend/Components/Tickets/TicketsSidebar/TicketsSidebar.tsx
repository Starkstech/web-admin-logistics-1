import React, { FC } from 'react'
import './TicketsSidebar.scss'
import { TicketsView } from '../../';

type iTicketsSidebar = {
    setActiveTicket: Function
}

const tickets = [
  {
    id: '1',
    title: 'Difficulty in logging in',
    username: 'Alex Coleman',
    updatedAt: '2mins ago'
  },
  {
    id: '2',
    title: 'Unable to make payment',
    username: 'Jaye Thomas',
    updatedAt: '2mins ago'
  },
  {
    id: '3',
    title: 'Unassigned order',
    username: 'Jaden Kayle',
    updatedAt: '2mins ago'
  }
]

const TicketsSidebar:FC<iTicketsSidebar> = () => {
  return (
        <div className="tickets_sidebar">
            <div className="px-3">
            <h2>3 open tickets</h2>
            </div>
            <ul className="tickets_sidebar_list">
                {
                    tickets.map((x:{id: string, title: string, username: string, updatedAt: string}) => (
                        <li key={x.id}>
                            <TicketsView {...x} />
                        </li>
                    ))
                }
            </ul>
        </div>
  )
}

export default TicketsSidebar;
