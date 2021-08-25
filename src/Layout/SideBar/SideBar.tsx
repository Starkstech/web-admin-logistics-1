/* eslint-disable react/jsx-filename-extension */
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './SideBar.scss'
import logo from '../../Assets/Images/logo.png'

const SideBar: FC = () => {
  return (
      <>
      <input type="checkbox" id="toggle-sidebar" />
        <div className="sidebar">
            <div className="sidebar_brand">
                <div>
                   <img src={logo} alt="Logo" />
                </div>
            </div>
            <nav className="sidebar_nav">
            <ul className="mb-5">
                        <li className="sidebar_link">
                            <Link className="active" to="/dashboard"><span><i className="fas fa-columns"></i></span><span>Dashboard</span></Link>
                        </li>
                        <li className="sidebar_link">
                            <Link to="/orders"><span><i className="fas fa-boxes"></i></span><span>Orders</span></Link>
                        </li>
                        <li className="sidebar_link">
                            <Link to="/track"><span><i className="fas fa-compass"></i></span><span>Track Item</span></Link>
                        </li>
                        <li className="sidebar_link">
                            <Link to="/customers"><span><i className="fas fa-users"></i></span><span>Customers</span></Link>
                        </li>
                        <li className="sidebar_link">
                            <Link to="/staffs"><span><i className="fas fa-user-friends"></i></span><span>Staffs</span></Link>
                        </li>
                    </ul>

                    <ul className="mt-5">
                        <li className="sidebar_link">
                            <Link to="/notifications"><span><i className="fas fa-bell"></i></span><span>Notifications</span></Link>
                        </li>
                        <li className="sidebar_link">
                            <Link to="/settings"><span><i className="fas fa-cog"></i></span><span>Settings</span></Link>
                        </li>
                        <li className="sidebar_link">
                            <Link to="/logout"><span><i className="fas fa-power-off"></i></span><span>Logout</span></Link>
                        </li>
                    </ul>
            </nav>
        </div>
        </>
  )
}

export default SideBar
