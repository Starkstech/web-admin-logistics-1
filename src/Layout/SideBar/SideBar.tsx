import React from 'react'
import './SideBar.scss'

import logo from '../../Assets/Images/logo.png'

const SideBar = () => {
  return (
    <div id="side-bar">
      <img src={logo} className="mx-auto d-block" id="logo" />
      <ul id="sidebar-link">

        <li>Dashboard</li>
        <li>Reports</li>
        <li>Track Item</li>
        <li>Messages</li>
        <li>Customers</li>
        <li>Staffs</li>
        <li>Nofications</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default SideBar
