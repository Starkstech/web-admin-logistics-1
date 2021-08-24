/* eslint-disable react/jsx-filename-extension */
import React, { FC } from 'react'
import './SideBar.scss'

import logo from '../../Assets/Images/logo.png'

const SideBar:FC = () => {
  return (
    <>
        {/* <div className="side-bar">

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
    </div> */}
 <div className="side-bar">
 <div className="sideBar-logo d-none d-md-block">
    <img src={logo} className="mx-auto d-block logo" />
    </div>
<nav className="navbar navbar-expand-lg  d-flex  p-0">

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
  </button>

  <div className="collapse sidebar-link justify-content-center align-items-center  navbar-collapse" id="navbarNav">
    <ul className="navbar-nav  p-0 ">
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
        <div className="d-flex align-items-center" style={{ paddingLeft: "10px", paddingTop: "7rem" }}>
        <i className="fas fa-user"></i>
        <li>Notifications</li>
        </div>
        <div className="d-flex align-items-center" style={{ paddingLeft: "10px" }}>
        <i className="fas fa-user"></i>
        <li>Settings</li>
      </div> 
        <div className="d-flex align-items-center" style={{ paddingLeft: "10px" }}>
        <i className="fas fa-user"></i>
        <li>Logout</li>
        </div>
    </ul>

  </div>
</nav>
</div>

</>

  )
}

export default SideBar
