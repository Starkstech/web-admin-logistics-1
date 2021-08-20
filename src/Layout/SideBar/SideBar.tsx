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
        <li>Dashboard</li>
        <li>Orders</li>
        <li>Track Item</li>
        <li>Customer</li>
        <li>Staffs</li>

        </ul>
        <ul className="sidebar-link-setting">
        <li>Notifications</li>
        <li>Settings</li>
        <li>Nofications</li>
        <li>Logout</li>
      </ul>
    </div>
    </>
  )
}

export default SideBar
