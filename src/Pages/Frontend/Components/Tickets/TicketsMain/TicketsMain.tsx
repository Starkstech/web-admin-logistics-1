import React, { FC, useEffect } from 'react'
import axios from "axios";
import { useSelector } from "react-redux";
import CryptoJS from "crypto-js";
import { SERVER_URL } from "../../../../../Constant/urlConstant";
import { TicketsChat, TicketsInput } from '../..'
import { useTicketContext } from '../../../Interfaces/Tickets/Tickets'
import './TicketsMain.scss'

type iTicketsMain = {
  setShowInfo: Function,
}

const TicketsMain:FC<iTicketsMain> = ({ setShowInfo }) => {
  const { activeTicket } = useTicketContext()
  const { currentUser } = useSelector((state:any) => state.user)
  const data = CryptoJS.AES.decrypt(currentUser, '12345');
  const decryptedData = JSON.parse(data.toString(CryptoJS.enc.Utf8));

  const config = {
    headers: { Authorization: `Bearer ${decryptedData.acccess_token}` }
  };

  const getMessages = async () => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/user/messages/${decryptedData.id}`, config)
      console.log(data, "This are the messages")
    } catch (error:any) {
      console.log(error.message, 'error')
    }
  }

  useEffect(() => {
    getMessages()
  }, [])

  return (
        <div className="tickets_main">
          <div className="tickets_main-title">
            <h3>{activeTicket.title}</h3>
            <button onClick={() => setShowInfo(true)} className="btn_sm">Ticket Info</button>
          </div>
            <div className="tickets_main-wrapper">
            <TicketsChat user="reciever" text="Hey, lol" />
            <TicketsChat user="reciever" text="Whatsup" />
            <TicketsChat user="sender" text="Yo being a while" />
            <TicketsChat user="reciever" text="That's because you didn't check me up" />
            <TicketsChat user="sender" text="It's not that way" />
            <TicketsChat user="sender" text="Being hella busy babe" />
            </div>
            <TicketsInput />
        </div>
  )
}

export default TicketsMain
