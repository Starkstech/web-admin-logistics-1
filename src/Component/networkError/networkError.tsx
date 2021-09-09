import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const NetworkError:FC = () => {
  return (
        <div className="network-error">
            <div className="network-error_img">
            <i className="fas fa-exclamation-circle"></i>
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
