import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import {} from './Pages/Frontend/Components'
import Wrapper from './Pages/Skeleton/Wrapper/Wrapper'
import {
  Login,
  Orders,
  Staffs,
  Customers,
  Track,
  DashBoardContent,
  NotificationContent,
  SettingsContent,
} from './Pages/Frontend/Interfaces'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Router, Route } from 'react-router'
import AuthRoute from './Hoc/AuthRoute'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'
import store from './store'
const history = createHashHistory()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <BrowserRouter>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <AuthRoute
                        path="/DashBoard"
                        exact
                        render={() => {
                          return (
                                <Wrapper>
                                    <DashBoardContent />
                                </Wrapper>
                          )
                        }}
                    />
                    <AuthRoute
                        path="/Notifications"
                        exact
                        render={() => {
                          return (
                                <Wrapper>
                                    <NotificationContent />
                                </Wrapper>
                          )
                        }}
                    />
                    <AuthRoute
                        path="/Settings"
                        exact
                        render={() => {
                          return (
                                <Wrapper>
                                    <SettingsContent />
                                </Wrapper>
                          )
                        }}
                    />
                    <AuthRoute
                        path="/Orders"
                        render={() => {
                          return (
                                <Wrapper>
                                    <Orders />
                                </Wrapper>
                          )
                        }}
                    />
                    <AuthRoute
                        path="/Customers"
                        exact
                        render={() => {
                          return (
                                <Wrapper>
                                    <Customers />
                                </Wrapper>
                          )
                        }}
                    />
                    <AuthRoute
                        path="/Track"
                        exact
                        render={() => {
                          return (
                                <Wrapper>
                                    <Track />
                                </Wrapper>
                          )
                        }}
                    />
                    <AuthRoute
                        path="/Staffs"
                        exact
                        render={() => {
                          return (
                                <Wrapper>
                                    <Staffs />
                                </Wrapper>
                          )
                        }}
                    />
                </Switch>
            </Router>
        </BrowserRouter>
    </React.StrictMode>
    </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
