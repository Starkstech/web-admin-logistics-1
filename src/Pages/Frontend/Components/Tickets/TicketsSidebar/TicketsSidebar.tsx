import React, { FC } from 'react'
import './TicketsSidebar.scss'
import { TicketsView } from '../../';

const TicketsSidebar:FC = () => {
  return (
        <div className="tickets_sidebar">
            <div className="px-3">
            <h2>3 open tickets</h2>
            </div>
            <ul className="tickets_sidebar_list">
                <li>
                    <TicketsView />
                </li>
                <li>
                    <TicketsView active />
                </li>
                <li>
                    <TicketsView />
                </li>
            </ul>
        </div>
  )
}

export default TicketsSidebar;
