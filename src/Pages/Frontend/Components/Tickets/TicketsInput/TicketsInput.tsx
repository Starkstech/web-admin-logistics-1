import React, { FC } from 'react'
import './TicketsInput.scss'

const TicketsInput:FC = () => {
  return (
        <div className="tickets_input d-flex justify-content-start align-items-center shadow-sm">
            <input type="text" aria-label="Type Something" name="ticket-chat" id="ticket-chat" placeholder="Type Something" />
            <button className="tickets_input-attach">
            <i className="fas fa-paperclip"></i>
            </button>
            <button className="tickets_input-btn" type="submit" aria-label="send">
            <i className="fas fa-paper-plane"></i>
            </button>
        </div>
  )
}

export default TicketsInput
