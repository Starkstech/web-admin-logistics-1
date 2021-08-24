/* eslint-disable react/jsx-filename-extension */
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './SideBar.scss'
import logo from '../../Assets/Images/logo.png'

const SideBar: FC = () => {
  return (
        <div className="sidebar">
            <div className="sideBar-logo d-none d-md-block">
                <img src={logo} className="mx-auto d-block logo" />
            </div>
            <nav className="navbar navbar-expand-lg  d-flex  p-0">
                <button
                    className="navbar-toggler "
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon bg-pink"></span>
                </button>
                <div
                    className="collapse sidebar-link justify-content-center align-items-center  navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav  p-0 ">
                        <div
                            className="d-flex align-items-center"
                            style={{ paddingLeft: '10px' }}
                        >
                            <i className="fas fa-user"></i>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                        </div>
                        <div
                            className="d-flex align-items-center"
                            style={{ paddingLeft: '10px' }}
                        >
                            <i className="fas fa-user"></i>
                            <li><Link to="/orders">Orders</Link></li>
                        </div>
                        <div
                            className="d-flex align-items-center"
                            style={{ paddingLeft: '10px' }}
                        >
                            <i className="fas fa-user"></i>
                            <li><Link to="/track">Track Item</Link></li>
                        </div>
                        <div
                            className="d-flex align-items-center"
                            style={{ paddingLeft: '10px' }}
                        >
                            <i className="fas fa-user"></i>
                            <li>Customer</li>
                        </div>
                        <div
                            className="d-flex align-items-center"
                            style={{ paddingLeft: '10px' }}
                        >
                            <i className="fas fa-user"></i>
                            <li>Staffs</li>
                        </div>
                        <div
                            className="d-flex align-items-center"
                            style={{ paddingLeft: '10px' }}
                        >
                            <i className="fas fa-user"></i>
                            <li>Notifications</li>
                        </div>
                        <div
                            className="d-flex align-items-center"
                            style={{ paddingLeft: '10px' }}
                        >
                            <i className="fas fa-user"></i>
                            <li>Settings</li>
                        </div>
                        <div
                            className="d-flex align-items-center"
                            style={{ paddingLeft: '10px' }}
                        >
                            <i className="fas fa-user"></i>
                            <li>Nofications</li>
                        </div>
                        <div
                            className="d-flex align-items-center"
                            style={{ paddingLeft: '10px' }}
                        >
                            <i className="fas fa-user"></i>
                            <li>Logout</li>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
  )
}

export default SideBar
