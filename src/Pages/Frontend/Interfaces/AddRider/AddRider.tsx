import React, { FC, FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CryptoJS from 'crypto-js'

import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import './AddRider.scss'
import { SERVER_URL } from '../../../../Constant/urlConstant'
import Input from '../../../../Component/Input/Input'
import { Validators } from '../../../../Helpers/validator'

const AddRider: FC = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [gender, setGender] = useState('')
  const [mStatus, setMStatus] = useState('')

  const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    telephone: '',
    address: '',
    city: '',
    country: '',
    state: '',
    password: '',
    company: '',
    licence: '',
    g1Fullname: '',
    g1PhoneNumber: '',
    g1Address: '',
    g2Fullname: '',
    g2PhoneNumber: '',
    g2Address: '',
  }
  const [values, setValues] = useState(initialState)

  const handleChange = (id: any, val: any) => {
    setValues({ ...values, [id]: val })
  }

  const user = useSelector((state: any) => state.user)
  const dUser = CryptoJS.AES.decrypt(user.currentUser, '12345')
  const decryptedData = JSON.parse(dUser.toString(CryptoJS.enc.Utf8))

  const selectStatusHandler = (e: FormEvent<HTMLSelectElement>) => {
    setMStatus(e.currentTarget.value)
  }
  const selectGenderHandler = (e: FormEvent<HTMLSelectElement>) => {
    setGender(e.currentTarget.value)
  }

  const riderSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = {
      firstname: values.firstname,
      lastname: values.lastname,
      gender,
      phone: values.telephone,
      marital_status: mStatus,
      email: values.email,
      password: values.password,
      address: {
        address: values.address,
        city: values.city,
        country: values.country,
        state: values.state,
      },
      company: values.company,
      licence: values.licence,
      guarantor_details: {
        fullname: values.g1Fullname,
        phone_number: values.g1PhoneNumber,
        address: values.g1Address,
      },
      next_of_kin: {
        fullname: values.g1Fullname,
        phone_number: values.g1PhoneNumber,
        address: values.g1Address,
      },
    }
    if (
      !formData.firstname ||
            !formData.lastname ||
            !formData.gender ||
            !formData.phone ||
            !formData.marital_status ||
            !formData.email ||
            !formData.password ||
            !formData.address.address ||
            !formData.address.city ||
            !formData.address.country ||
            !formData.address.state ||
            !formData.company ||
            !formData.licence ||
            !formData.guarantor_details.fullname ||
            !formData.guarantor_details.phone_number ||
            !formData.guarantor_details.address ||
            !formData.next_of_kin.fullname ||
            !formData.next_of_kin.phone_number ||
            !formData.next_of_kin.address
    ) {
      return toast.error('All fields are required')
    }
    setLoading(true)
    try {
      e.preventDefault()
      // eslint-disable-next-line quote-props
      const config = {
        headers: {
          Authorization: `Bearer ${decryptedData.acccess_token}`,
        },
      }
      const response = await axios.post(
                `${SERVER_URL}/staff`,
                formData,
                config
      )
      toast.success(`${response.status === 201 && 'Success'}`)
      setLoading(false)
      history.push('/staffs')
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  return (
        <div className="p-4">
            <h5 className="my-5">Add new staff</h5>
            <div>
                <button className="btn_main">Upload</button>
                <button className="btn_outline mx-3">Remove</button>
            </div>

            <div className="my-5">
                <h2 className="heading_2x">Rider&apos;s Bio</h2>

                <form className="my-4" onSubmit={riderSubmitHandler}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row mb-3">
                                <div className="col-md-6 col-xs-7 input-container">
                                    <Input
                                        type="text"
                                        placeholder="first name"
                                        classes="input form-control mt-2 mt-sm-0"
                                        value={values.firstname}
                                        id="firstname"
                                        onChange={handleChange}
                                        validators={[
                                          {
                                            check: Validators.required,
                                            message:
                                                    'First name is required',
                                          },
                                        ]}
                                    />
                                </div>
                                <div className="col-md-6 col-xs-7 input-container">
                                    <Input
                                        type="text"
                                        placeholder="last name"
                                        classes="input form-control mt-2 mt-sm-0"
                                        value={values.lastname}
                                        id="lastname"
                                        onChange={handleChange}
                                        validators={[
                                          {
                                            check: Validators.required,
                                            message: 'Last name is required',
                                          },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-md-6 col-xs-7 input-container">
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        classes="input form-control mt-2 mt-sm-0"
                                        value={values.email}
                                        id="email"
                                        onChange={handleChange}
                                        validators={[
                                          {
                                            check: Validators.required,
                                            message:
                                                    'Not a valid email and email is required',
                                          },
                                        ]}
                                    />
                                </div>
                                <div className="col-md-6 col-xs-7 input-container">
                                    <Input
                                        type="text"
                                        placeholder="Telephone"
                                        classes="input form-control mt-2 mt-sm-0"
                                        value={values.telephone}
                                        id="telephone"
                                        onChange={handleChange}
                                        validators={[
                                          {
                                            check: Validators.required,
                                            message:
                                                    'Telephone is required',
                                          },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-md-6 col-xs-7 input-container">
                                    <select
                                        className="form-group form-select-sm mt-2 mt-sm-0 select"
                                        onChange={(e) => selectStatusHandler(e)}
                                    >
                                        <option value="">Marital Status</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                    </select>
                                </div>
                                <div className="col-md-6 col-xs-7 input-container">
                                    <select
                                        className="form-group form-select-sm mt-2 mt-sm-0 select"
                                        onChange={(e) => selectGenderHandler(e)}
                                    >
                                        <option value="">Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-md-6 col-xs-7 input-container">
                                    <Input
                                        type="text"
                                        placeholder="Address"
                                        classes="input form-control mt-2 mt-sm-0"
                                        value={values.address}
                                        id="address"
                                        onChange={handleChange}
                                        validators={[
                                          {
                                            check: Validators.required,
                                            message: 'Address is required',
                                          },
                                        ]}
                                    />
                                </div>
                                <div className="col-md-6 col-xs-7 input-container">
                                    <Input
                                        type="text"
                                        placeholder="City"
                                        classes="input form-control mt-2 mt-sm-0"
                                        value={values.city}
                                        id="city"
                                        onChange={handleChange}
                                        validators={[
                                          {
                                            check: Validators.required,
                                            message: 'City is required',
                                          },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-md-6 col-xs-7 input-container">
                                    <Input
                                        type="text"
                                        placeholder="Country"
                                        classes="input form-control mt-2 mt-sm-0"
                                        value={values.country}
                                        id="country"
                                        onChange={handleChange}
                                        validators={[
                                          {
                                            check: Validators.required,
                                            message: 'Country is required',
                                          },
                                        ]}
                                    />
                                </div>
                                <div className="col-md-6 col-xs-7 input-container">
                                    <Input
                                        type="text"
                                        placeholder="State"
                                        classes="input form-control mt-2 mt-sm-0"
                                        value={values.state}
                                        id="state"
                                        onChange={handleChange}
                                        validators={[
                                          {
                                            check: Validators.required,
                                            message: 'State is required',
                                          },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-md-6 col-xs-7 input-container">
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        classes="input form-control mt-2 mt-sm-0"
                                        value={values.password}
                                        id="password"
                                        onChange={handleChange}
                                        validators={[
                                          {
                                            check: Validators.required,
                                            message: 'Password is required',
                                          },
                                        ]}
                                    />
                                </div>
                            </div>

                            <div className="my-5">
                                <h2 className="heading_2x">
                                    Rider&apos;s Confidential info
                                </h2>
                                <div className="form-group row mb-3">
                                    <div className="col-md-6 col-xs-7 input-container">
                                        <Input
                                            type="text"
                                            placeholder="Company"
                                            classes="input form-control mt-2 mt-sm-0"
                                            value={values.company}
                                            id="company"
                                            onChange={handleChange}
                                            validators={[
                                              {
                                                check: Validators.required,
                                                message:
                                                        'Company is required',
                                              },
                                            ]}
                                        />
                                    </div>
                                    <div className="col-md-6 col-xs-7 input-container">
                                        <Input
                                            type="text"
                                            placeholder="Licence"
                                            classes="input form-control mt-2 mt-sm-0"
                                            value={values.licence}
                                            id="licence"
                                            onChange={handleChange}
                                            validators={[
                                              {
                                                check: Validators.required,
                                                message:
                                                        'Licence is required',
                                              },
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="my-5">
                                <h2 className="heading_2x">
                                    Guarantor&apos;s #1 info
                                </h2>
                                <div className="form-group row mb-3">
                                    <div className="col-md-6 col-xs-7 input-container">
                                        <Input
                                            type="text"
                                            placeholder="Fullname"
                                            classes="input form-control mt-2 mt-sm-0"
                                            value={values.g1Fullname}
                                            id="g1Fullname"
                                            onChange={handleChange}
                                            validators={[
                                              {
                                                check: Validators.required,
                                                message:
                                                        'Guatantor fullname is required',
                                              },
                                            ]}
                                        />
                                    </div>
                                    <div className="col-md-6 col-xs-7 input-container">
                                        <Input
                                            type="text"
                                            placeholder="Phone Number"
                                            classes="input form-control mt-2 mt-sm-0"
                                            value={values.g1PhoneNumber}
                                            id="g1PhoneNumber"
                                            onChange={handleChange}
                                            validators={[
                                              {
                                                check: Validators.required,
                                                message:
                                                        'Guatantor phone number is required',
                                              },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <div className="col-md-6 col-xs-7 input-container">
                                        <Input
                                            type="text"
                                            placeholder="Address"
                                            classes="input form-control mt-2 mt-sm-0"
                                            value={values.g1Address}
                                            id="g1Address"
                                            onChange={handleChange}
                                            validators={[
                                              {
                                                check: Validators.required,
                                                message:
                                                        'Guatantor address is required',
                                              },
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="my-5">
                                <h2 className="heading_2x">
                                    Guarantor&apos;s #2 info
                                </h2>
                                <div className="form-group row mb-3">
                                    <div className="col-md-6 col-xs-7 input-container">
                                        <Input
                                            type="text"
                                            placeholder="Fullname"
                                            classes="input form-control mt-2 mt-sm-0"
                                            value={values.g2Fullname}
                                            id="g2Fullname"
                                            onChange={handleChange}
                                            validators={[
                                              {
                                                check: Validators.required,
                                                message:
                                                        'Guatantor fullname is required',
                                              },
                                            ]}
                                        />
                                    </div>
                                    <div className="col-md-6 col-xs-7 input-container">
                                        <Input
                                            type="text"
                                            placeholder="Phone Number"
                                            classes="input form-control mt-2 mt-sm-0"
                                            value={values.g2PhoneNumber}
                                            id="g2PhoneNumber"
                                            onChange={handleChange}
                                            validators={[
                                              {
                                                check: Validators.required,
                                                message:
                                                        'Guatantor phonenumber is required',
                                              },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <div className="col-md-6 col-xs-7 input-container">
                                        <Input
                                            type="text"
                                            placeholder="Address"
                                            classes="input form-control mt-2 mt-sm-0"
                                            value={values.g2Address}
                                            id="g2Address"
                                            onChange={handleChange}
                                            validators={[
                                              {
                                                check: Validators.required,
                                                message:
                                                        'Guatantor address is required',
                                              },
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 d-flex justify-content-end align-items-center fixed-bottom px-5 pb-5">
                        <div
                            onClick={() => history.push('/staffs')}
                            role="button"
                            className="btn_outline mx-2"
                        >
                            Cancel
                        </div>
                        <button type="submit" className="btn_main">
                            {loading
                              ? (
                                <span
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                                )
                              : (
                                  'Save'
                                )}
                        </button>
                    </div>
                </form>
            </div>

            <Toaster
                toastOptions={{
                  style: {
                    height: '70px',
                    padding: '1em',
                  },
                }}
            />
        </div>
  )
}

export default AddRider
