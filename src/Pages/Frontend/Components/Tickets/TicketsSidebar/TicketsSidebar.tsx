import React, { FC, useEffect } from 'react'
import CryptoJS from "crypto-js";
import { SERVER_URL } from "../../../../../Constant/urlConstant";
import { useSelector } from "react-redux";
import axios from "axios";
import './TicketsSidebar.scss'
import { TicketsView } from '../../';

type iTicketsSidebar = {
    setActiveTicket: Function
}

const tickets = [
  {
    id: '1',
    subject: 'Difficulty in logging in',
    message: 'I have difficulty loggin into my account',
    name: 'Alex Coleman',
    updated_at: '2mins ago'
  },
  {
    id: '2',
    subject: 'Difficulty in logging in',
    message: 'I have difficulty loggin into my account',
    name: 'Jaye Jeje',
    updated_at: '2mins ago'
  },
  {
    id: '3',
    subject: 'Unassigned Order',
    message: 'Posted my order about 3hrs ago and it has not being assigned',
    name: 'Jaden Kyle',
    updated_at: '2mins ago'
  }
]

const TicketsSidebar:FC<iTicketsSidebar> = () => {
  const { currentUser } = useSelector((state:any) => state.user)

  const getTickets = async () => {
    const data = CryptoJS.AES.decrypt(currentUser, '12345');
    const decryptedData = JSON.parse(data.toString(CryptoJS.enc.Utf8));

    const config = {
      headers: { Authorization: `Bearer ${decryptedData.acccess_token}` }
    };

    try {
      const { data } = await axios.get(`${SERVER_URL}/user/message`, config)
      console.log(data)
    } catch (error:any) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getTickets()
  }, [])

  return (
        <div className="tickets_sidebar">
            <div className="px-3">
            <h2>3 open tickets</h2>
            </div>
            <ul className="tickets_sidebar_list">
                {
                    tickets.map((x:{id: string, subject: string, name: string, updated_at: string, message: string}) => (
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
