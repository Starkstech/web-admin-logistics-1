/* eslint-disable react/jsx-filename-extension */
import React, { FC } from "react";
import "./Settings.scss"

const Settings :FC = () => {
  return (
        <div className="container settings-container">
          <h2 className="settings-heading m-0">Settings</h2>
          <div className="col-md-11 col-12">
            <ul className="d-flex justify-content-end m-0">
              <li className="settings-list" style={{ paddingLeft: "0px" }}> General Profile</li>
              <li className="settings-list">Pricing</li>
              <li className="settings-list border-0">Data Export</li>
            </ul>
            <div className="card border-0 shadow-sm settings-card p-4 col-md-12" style = {{ marginTop: "2rem" }}>
              <div className="setting-appLogo">
              <text>App Logo</text>
              </div>
       <div className="d-flex settings-btn ">
         <button className="settings-btnSearch">Search</button>
         <button className="settings-btnRemove ">Remove</button>

       </div>
        </div>
          </div>

        </div>

  )
}
export default Settings
