/* eslint-disable react/jsx-filename-extension */
import React, { FC } from 'react'
import './SideBar.scss'

import logo from '../../Assets/Images/logo.png'

const SideBar:FC = () => {
  return (
    <>
        <div className="side-bar">

    <div className="sideBar-logo">
    <img src={logo} className="mx-auto d-block logo" />
    </div>
      <ul className="sidebar-link ">
        <div className="d-flex align-items-center" style={{ paddingLeft: "10px" }}>
        <i className="fas fa-user"></i>
        <li>Dashboard</li>
        </div>
        <div className="d-flex align-items-center" style={{ paddingLeft: "10px" }}>
        <i className="fas fa-user"></i>
        <li>Dashboard</li>
        </div>
        <div className="d-flex align-items-center" style={{ paddingLeft: "10px" }}>
        <i className="fas fa-user"></i>
        <li>Orders</li>
        </div>
        <div className="d-flex align-items-center" style={{ paddingLeft: "10px" }}>
        <i className="fas fa-user"></i>
        <li>Track Item</li>
        </div>
        <div className="d-flex align-items-center" style={{ paddingLeft: "10px" }}>
        <i className="fas fa-user"></i>
        <li>Customer</li>
        </div>
        <div className="d-flex align-items-center" style={{ paddingLeft: "10px" }}>
        <i className="fas fa-user"></i>
        <li>Staffs</li>
        </div>

        </ul>
        <ul className="sidebar-link-setting">
        <div className="d-flex align-items-center" style={{ paddingLeft: "10px" }}>
        <i className="fas fa-user"></i>
        <li>Notifications</li>
        </div>
        <div className="d-flex align-items-center" style={{ paddingLeft: "10px" }}>
        <i className="fas fa-user"></i>
        <li>Settings</li>
        </div>
        <div className="d-flex align-items-center" style={{ paddingLeft: "10px" }}>
        <i className="fas fa-user"></i>
        <li>Nofications</li>
        </div>
        <div className="d-flex align-items-center" style={{ paddingLeft: "10px" }}>
        <i className="fas fa-user"></i>
        <li>Logout</li>
        </div>
      </ul>
    </div>
    </>
  )
}

export default SideBar
