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
  AddRider,
  Settings,
} from './Pages/Frontend/Interfaces'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from 'react-router'
import AuthRoute from './Hoc/AuthRoute'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <AuthRoute
                        path="/DashBoard"
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
                        render={() => {
                          return (
                                <Wrapper>
                                    <Settings />
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
                        render={() => {
                          return (
                                <Wrapper>
                                    <Staffs />
                                </Wrapper>
                          )
                        }}
                    />
                    <AuthRoute
                      path="/Add-rider"
                      exact
                      render={() => <Wrapper>
                        <AddRider />
                      </Wrapper>}
                    />
                </Switch>
            </Router>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
