/* eslint-disable react/jsx-filename-extension */
import React, { FC } from "react";
import "./Notification.scss"
const Notification :FC = () => {
  return (
      <>
      <div className="container-fluid Notification">
          <h2 className="Notification-heading">Notifications</h2>
          <div>
              <div className="card border-0 shadow-sm notification-card p-4 col-md-11" style = {{ marginTop: "5rem" }}>
                      <div className="pb-4">
                      <text className="Notification-date">Today</text>
                      </div>
                      <ul>
                          <div className="row pb-3">
                              <div className="col-md-7 col-9">
                          <li> <span className="circle-dot"></span>Samuel Adelakun signed up as a new customer</li>
                          </div>
                          <div className="col-md-2 col-3 ">
                              <text className="notification-time">2 mins ago</text>
                          </div>
                          </div>
                          <div className="row pb-3">
                              <div className="col-md-7 col-9">
                          <li><span className="circle-dot"></span>Item with order no. 01234 has been picked up by a rider</li>
                          </div>
                          <div className="col-md-2 col-3 ">
                              <text className="notification-time">2 mins ago</text>
                          </div>
                          </div>
                          <div className="row pb-3">
                              <div className="col-md-7 col-9">
                          <li><span className="circle-dot"></span>Item with order no. 01234 has been delivered</li>
                          </div>
                          <div className="col-md-2 col-3">
                              <text className="notification-time">2 mins ago</text>
                          </div>
                          </div>
                      </ul>

                      <div className="py-4 ">
                      <text className="Notification-date">Yesterday</text>
                      </div>
                      <ul>
                          <div className="row pb-3">
                              <div className="col-md-7 col-9">
                          <li><span className="circle-dot"></span>Samuel Adelakun signed up as a new customer</li>
                          </div>
                          <div className="col-md-2 col-3 ">
                              <text className="notification-time">2 mins ago</text>
                          </div>
                          </div>
                          <div className="row pb-3">
                              <div className="col-md-7 col-9">
                          <li><span className="circle-dot"></span>Item with order no. 01234 has been picked up by a rider</li>
                          </div>
                          <div className="col-md-2 col-3 ">
                              <text className="notification-time">2 mins ago</text>
                          </div>
                          </div>
                          <div className="row pb-3">
                              <div className="col-md-7 col-9">
                          <li><span className="circle-dot"></span>Item with order no. 01234 has been delivered</li>
                          </div>
                          <div className="col-md-2 col-3">
                              <text className="notification-time">2 mins ago</text>
                          </div>
                          </div>
                      </ul>
              </div>
          </div>
      </div>
      </>
  )
}
export default Notification
