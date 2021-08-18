import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
        <div id="welcome-message">
          <h3><span id="hi">Hi,</span> <br />
          Kwik Logisitics
          </h3>
      </div>
        </div>
        <div className="col-md-8">
          <input id="searchField" type="search" name="" />
        </div>
      </div>
    </div>
  )
}

export default Header
