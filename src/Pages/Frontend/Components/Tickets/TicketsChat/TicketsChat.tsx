import React, { FC } from 'react'
import './TicketsChat.scss'

type iChat = {
    user: any,
    text: String
}

const TicketsChat:FC<iChat> = ({ user, text }) => {
  return (
        <div className={`tickets_chat ${user === 'sender' ? 'sender' : 'reciever'}`}>
            { text }
        </div>
  )
}

export default TicketsChat
