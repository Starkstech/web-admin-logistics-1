import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router"
import toast, { Toaster } from 'react-hot-toast';
import { userAction } from '../../../../Actions'
import { SERVER_URL } from '../../../../Constant/urlConstant';
import axios from "axios"
import './Login.scss'
import { Redirect } from 'react-router-dom'
import CryptoJS from 'crypto-js'

const initialState = {
  phone: '',
  password: '',

}

const Login: FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [fields, updateFields] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const { isAuthenticated } = useSelector((state:any) => state.user)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    updateFields({
      ...fields,
      [name]: value,
    })
  }

  const onSubmit = async (e:any) => {
    e.preventDefault()

    if (fields.phone === '' || fields.password === '') {
      toast.error('Please fill required fields')
      // eslint-disable-next-line no-undef
    } else {
      try {
        setLoading(true)
        const { data } = await axios.post(`${SERVER_URL}/user/login`, fields)
        const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), '12345').toString();
        dispatch(userAction.setCurrentUser(ciphertext))
        updateFields(initialState)
        setLoading(false)
        history.push('/dashboard')
      } catch (error) {
        console.log(error.message)
        setLoading(false)
        toast.error(error.message)
      }
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
                        <button className="btn_main">{loading
                          ? (
                        <div className="spinner-border spinner-border-sm" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>)
                          : 'Login'}</button>
                    </div>
                </form>
            </div>
            <Toaster toastOptions={{
              style: {
                height: '70px',
                padding: '1em'
              },
            }} />
        </div>
    )
  }
}
export default Login
