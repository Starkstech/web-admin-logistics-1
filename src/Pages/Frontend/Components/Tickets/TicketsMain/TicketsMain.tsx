import React, { FC } from 'react'
import { TicketsChat, TicketsInput } from '../..'
import './TicketsMain.scss'

const TicketsMain:FC = () => {
  return (
        <div className="tickets_main">
          <div className="tickets_main-title">
            <h3>Error message on Login</h3>
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
