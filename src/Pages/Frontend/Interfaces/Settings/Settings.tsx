import React, { FC, useState } from "react";
import { Link, Route, BrowserRouter as Router, Switch, useRouteMatch } from "react-router-dom";
import { Export, GeneralProfile, Pricing } from "../../Components";
import "./Settings.scss"

const Settings :FC = () => {
  const [active, setActive] = useState(0)
  const { path, url } = useRouteMatch();

  return (
  <Router>
    <div className="settings">
      <div>
        <h2 className="heading_2x">Settings</h2>
        <nav className="settings_nav d-flex justify-content-end align-items-center">
          <ul className="d-flex justify-content-end align-items-center">
            <li className={`${active === 0 ? 'active' : null} right`}>
                <Link to={url}>General Profile</Link>
            </li>
            <li className={`${active === 1 ? 'active' : null} right`}>
                <Link to={`${url}/pricing`}>Pricing</Link>
            </li>
            <li className={`${active === 2 ? 'active' : null}`} >
            <Link to={`${url}/export`}>Data Export</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="shadow-sm mt-5">
      <Switch>
        <Route exact path={path} render={() => <GeneralProfile setActive={setActive} />} />
        <Route path={`${path}/pricing`} render={() => <Pricing setActive={setActive} />} />
        <Route path={`${path}/export`} render={() => <Export setActive={setActive} />} />
      </Switch>
      </div>
    </div>
    </Router>
  )
}
export default Settings
