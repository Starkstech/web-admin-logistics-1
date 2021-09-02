import React, { FC } from "react";
import { Link, Route, BrowserRouter as Router, Switch, useRouteMatch } from "react-router-dom";
import { Export, GeneralProfile, Pricing } from "../../Components";
import "./Settings.scss"

const Settings :FC = () => {
  const { path, url } = useRouteMatch();
  return (
  <Router>
    <div className="settings">
      <div>
        <h2 className="heading_2x">Settings</h2>
        <nav className="settings_nav d-flex justify-content-end align-items-center">
          <ul className="d-flex justify-content-end align-items-center">
            <li className="right active">
                <Link to={url}>General Profile</Link>
            </li>
            <li className="right">
                <Link to={`${url}/pricing`}>Pricing</Link>
            </li>
            <li>
            <Link to={`${url}/export`}>Data Export</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="shadow-sm mt-5">
      <Switch>
        <Route exact path={path} component={GeneralProfile} />
        <Route path={`${path}/pricing`} component={Pricing} />
        <Route path={`${path}/export`} component={Export} />
      </Switch>
      </div>
    </div>
    </Router>
  )
}
export default Settings
