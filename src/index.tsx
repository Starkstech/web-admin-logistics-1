import 'bootstrap/dist/css/bootstrap.min.css'
// eslint-disable-no-unused-vars indent
// import $ from 'jquery'
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import reportWebVitals from './reportWebVitals';
import { } from "./Pages/Frontend/Components";
import Wrapper from './Pages/Skeleton/Wrapper/Wrapper'
import { Login, Orders, Staffs, Customers, Track, DashBoardContent, NotificationContent, SettingsContent } from "./Pages/Frontend/Interfaces"
import { BrowserRouter, Switch } from 'react-router-dom'
import { Router, Route } from "react-router";
import { createHashHistory } from "history";
import * as Sentry from "@sentry/react/dist";
import { Integrations } from "@sentry/tracing/dist";
// import { Provider } from "react-redux";
// import { Store } from "./Store/";
const history = createHashHistory();

Sentry.init({
  dsn: "https://d05b95d53f324f1c902688a7c3683025@o529927.ingest.sentry.io/5648922",
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
ReactDOM.render(
  // <Provider store={Store}>
    // eslint-disable-next-line react/jsx-filename-extension
    <React.StrictMode>
      <BrowserRouter>
        <Router history={history}>
          <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/DashBoard" exact render={() => {
            return (
              <Wrapper>
                <DashBoardContent/>
              </Wrapper>
            )
          }}
            />
              <Route path="/Notifications" exact render={() => {
                return (
              <Wrapper>
                <NotificationContent/>
              </Wrapper>
                )
              }}
            />
             <Route path="/Settings" exact render={() => {
               return (
              <Wrapper>
                <SettingsContent/>
              </Wrapper>
               )
             }}
            />
            <Route path="/Orders" render={() => {
              return (
                <Wrapper>
                  <Orders />
                </Wrapper>
              )
            }} />
            <Route path="/Customers" exact render={() => {
              return (
                <Wrapper>
                  <Customers />
                </Wrapper>
              )
            }} />
            <Route path="/Track" exact render={() => {
              return (
                <Wrapper>
                  <Track />
                </Wrapper>
              )
            }} />
            <Route path="/Staffs" exact render={() => {
              return (
                <Wrapper>
                  <Staffs />
                </Wrapper>
              )
            }} />
          </Switch>
        </Router>
      </BrowserRouter>
    </React.StrictMode>
    // </Provider>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
