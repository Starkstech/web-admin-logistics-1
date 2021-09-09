import React, { FC } from 'react'
import './TicketsInfo.scss'

type iTicketsInfo = {
  setShowInfo: Function,
}
const TicketsInfo:FC<iTicketsInfo> = ({ setShowInfo }) => {
  return (
        <div className="tickets_info">
          <button onClick={() => setShowInfo(false)} className="close_info btn">
            <i className="far fa-window-close"></i>
          </button>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="tickets_info-avatar"></div>
              <h4>Jason Langloff</h4>
            </div>
            <details className="mt-4">
              <summary>Ticket Information</summary>
              <ul className="tickets_info-list">
                <li>
                  <strong>Status:</strong> <span>Open</span>
                </li>
                <li>
                  <strong>Created at:</strong> <span>June 12, 2022</span>
                </li>
                <li>
                  <strong>Updated:</strong> <span>Just now</span>
                </li>
                <li>
                  <strong>Status:</strong> <span>Open</span>
                </li>
              </ul>
            </details>
            <details className="mt-4">
              <summary>Customer Details</summary>
              <ul className="tickets_info-list">
                <li>
                  <strong>Email:</strong> <span>johnlangloff@gmail.com</span>
                </li>
                <li>
                  <strong>Tickets:</strong> <span>10</span>
                </li>
              </ul>
            </details>
            <details className="mt-4">
              <summary>Media</summary>
              <ul className="tickets_info-list">
                <li>
                  <strong>Email:</strong> <span>johnlangloff@gmail.com</span>
                </li>
              </ul>
            </details>
            <button className="btn_main mt-5">Close Ticket</button>
        </div>
  )
}

export default TicketsInfo
