/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-filename-extension */
import React, { FC } from "react"
import DashboardChart from "./DashboardChart"
import DashboardTable from "./DashboardTable"
import "./DashBoard.scss"

const DashBoard:FC = () => {
  return (
      <React.Fragment>
    <div className="container-fluid">
        <div className="dashboard-content">
        <div className="dashBoard-overView">
        <text>Overview</text>
        </div>
            <div className="d-flex pt-3">
                <div className="d-flex flex-column dashboard-totalMonth  py-4 px-4">
                <small className="pb-3 review-trip">Total trips</small>
                <small className="review-amount">30</small>
                <small className="pt-4 review-month">This month</small>
                </div>
                <div className="d-flex flex-column dashboard-totalEarning  py-4 px-4">
                <small className="pb-3 review-earning">Total Earnings</small>
                <small className="review-amount"><sup> ₦</sup>20000</small>
                <small className="pt-4 review-month">This month</small>
                </div>
                <div className="d-flex flex-column dashboard-totalEarning  py-4 px-4">
                <small className="pb-3 review-earning">Customers</small>
                <small className="review-amount">40</small>
                <small className="pt-4 review-month">This month</small>
                </div>
                <div className="d-flex flex-column dashboard-totalEarning  py-4 px-4">
                <small className="pb-3 review-earning">Staff</small>
                <small className="review-amount">40</small>
                <small className="pt-4 review-month">This month</small>
                </div>
            </div>
         {/* <div className="pt-5 pb-4 d-flex justify-content-between">

        </div> */}
        <div className="d-flex py-5 ">
            <div>
             <text className="UsersBar">Users</text>
           <DashboardChart/>
              </div>
        <div>
            <text className="customerName">New Customers</text>
        <div className="card dashboard-contact pb-3 pt-2 px-3">
            <div className="d-flex align-items-center dashboardInfor">
                <div className="contact-user">
            <i className="fas fa-user"></i>
            </div>
            <div className="d-flex flex-column">
           <text className="contactName">Isaac Orija</text>
           <text className="contactNum">+2348169199932</text>
           </div>
           </div>
           <div className="d-flex align-items-center dashboardInfor">
                <div className="contact-user">
            <i className="fas fa-user"></i>
            </div>
            <div className="d-flex flex-column">
           <text className="contactName">Isaac Orija</text>
           <text className="contactNum">+2348169199932</text>
           </div>
           </div>
           <div className="d-flex align-items-center dashboardInfor">
                <div className="contact-user">
            <i className="fas fa-user"></i>
            </div>
            <div className="d-flex flex-column">
           <text className="contactName">Isaac Orija</text>
           <text className="contactNum">+2348169199932</text>
           </div>
           </div>
           <div>
               <button className="viewContact">View customers</button>
           </div>
        </div>
        </div>
        </div>
        {/* <div className="pt-5 pb-4 UsersBar">
            <text>Lastest Trips</text>
        </div> */}
        <DashboardTable/>
        </div>
    </div>
</React.Fragment>
  )
}
export default DashBoard
