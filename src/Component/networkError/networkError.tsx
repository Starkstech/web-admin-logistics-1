import React, { FC } from 'react'
import errorImg from 'Assets/Images/connection-error.png'
import './networkError.scss'
import { Link } from 'react-router-dom'

const NetworkError:FC = () => {
  return (
        <div className="network-error">
            <div className="network-error_img">
                <img src={errorImg} alt="Internet connection error"/>
            </div>
            <div className="network-error_msg">
                <h1>Oops, we can&apos;t seem to connect to our server</h1>
            <p>Please check your internet connection</p>
            <Link to="/">Refresh</Link>
            </div>
        </div>
  )
}

export default NetworkError
