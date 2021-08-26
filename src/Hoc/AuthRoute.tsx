import React, { FC } from 'react'
import { useSelector } from "react-redux"
import { Route, Redirect } from 'react-router-dom'

const AuthRoute:FC<any> = (props) => {
  const { isAuthenticated } = useSelector((state:any) => state.user)
  if (isAuthenticated === true) {
    return <Route {...props} />
  } else {
    return <Redirect to="/" />;
  }
}

export default AuthRoute
