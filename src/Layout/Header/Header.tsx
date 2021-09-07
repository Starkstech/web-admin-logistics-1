/* eslint-disable react/jsx-filename-extension */
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header:FC = () => {
  return (
    <header className="header shadow-sm d-flex justify-content-between align-items-center">
        <div className="header_banner d-flex justify-content-start align-items-center">
            <label htmlFor="toggle-sidebar"><i className="fas fa-bars"></i></label>
            <div className="d-flex flex-column justify-content-center align-items-start">
            <small>Hello</small>
            <span>Kwik Logistics</span>
            </div>
        </div>
        {/* <div className="header_search d-flex justify-content-start align-items-center">
            <span><i className="fas fa-search"></i></span>
            <input type="search" name="search" placeholder="Search Here" aria-label="Search here" />
        </div> */}
        <div className="d-flex">
        <div className="header_bell active mx-4">
         <Link to="/tickets"><i className="far fa-comment-dots"></i></Link>
        </div>
        <div className="header_bell active">
          <Link to="/notifications"><i className="far fa-bell"></i></Link>
        </div>
        </div>
    </header>
  )
}

export default Header
