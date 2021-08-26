import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router"
import { userAction } from '../../../../Actions'
import axios from "axios"
import './Login.scss'
import { Redirect } from 'react-router-dom'

const initialState = {
  phone: '',
  password: '',
}

const Login: FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [fields, updateFields] = useState(initialState)
  const errors:any = []
  const { isAuthenticated } = useSelector((state:any) => state.user)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    updateFields({
      ...fields,
      [name]: value,
    })
  }

  const onSubmit = (e:any) => {
    e.preventDefault()
    const SERVER_URL = 'https://logistics-app-starks.herokuapp.com/api/user/login'

    if (fields.phone === '' || fields.password === '') {
      errors.push('Please fill required fields')
    } else {
      axios.post(SERVER_URL, fields)
        .then((response) => {
          dispatch(userAction.setCurrentUser(response.data.data))
          history.push('/dashboard')
        })
        .catch((error:any) => {
          console.log(error)
        })
    }
  }

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  } else {
    return (
        <div className="container-fluid login-container">
            <div className="card login-card">
                <form onSubmit={onSubmit}>
                    <div>
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label login-label pb-2"
                        >
                            Email address
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={fields.phone}
                            onChange={handleChange}
                            className="form-control login-input"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label pt-4 login-label pb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            value={fields.password}
                            onChange={handleChange}
                            name="password"
                            className="form-control login-input"
                            required
                        />
                    </div>
                    <span className="text-danger">{errors && errors[0]}</span>
                    <div className="d-flex justify-content-between align-items-center pt-4">
                        <div className="form-check">
                            <input
                                className="form-check-input login-form-check"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-check-label login-label pt-1"
                                htmlFor="flexCheckDefault"
                            >
                                Remember me
                            </label>
                        </div>
                        <button className="login-btn">Loginn</button>
                    </div>
                </form>
            </div>
        </div>
    )
  }
}
export default Login
