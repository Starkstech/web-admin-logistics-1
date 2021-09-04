import React, { FC, useRef, FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CryptoJS from 'crypto-js'

import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import './AddRider.scss'
import { SERVER_URL } from '../../../../Constant/urlConstant'

const AddRider: FC = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [gender, setGender] = useState('')
  const [mStatus, setMStatus] = useState('')

  const firstnameInputRef = useRef<HTMLInputElement>(null)
  const lastnameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const phoneInputRef = useRef<HTMLInputElement>(null)
  const addressInputRef = useRef<HTMLInputElement>(null)
  const cityInputRef = useRef<HTMLInputElement>(null)
  const countryInputRef = useRef<HTMLInputElement>(null)
  const stateInputRef = useRef<HTMLInputElement>(null)
  const riderCompanyInputRef = useRef<HTMLInputElement>(null)
  const riderLicenceInputRef = useRef<HTMLInputElement>(null)
  const g1NameInputRef = useRef<HTMLInputElement>(null)
  const g1PhoneInputRef = useRef<HTMLInputElement>(null)
  const g1AddressInputRef = useRef<HTMLInputElement>(null)
  const g2NameInputRef = useRef<HTMLInputElement>(null)
  const g2PhoneInputRef = useRef<HTMLInputElement>(null)
  const g2AddressInputRef = useRef<HTMLInputElement>(null)
  const riderPasswordInputRef = useRef<HTMLInputElement>(null)

  const user = useSelector((state: any) => state.user)
  const dUser = CryptoJS.AES.decrypt(user.currentUser, '12345')
  const decryptedData = JSON.parse(dUser.toString(CryptoJS.enc.Utf8))
  console.log(decryptedData)

  const selectStatusHandler = (e: FormEvent<HTMLSelectElement>) => {
    setMStatus(e.currentTarget.value)
  }
  const selectGenderHandler = (e: FormEvent<HTMLSelectElement>) => {
    setGender(e.currentTarget.value)
  }

  const riderSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true)
    const formData = {
      firstname: firstnameInputRef.current!.value,
      lastname: lastnameInputRef.current!.value,
      gender,
      phone: phoneInputRef.current!.value,
      marital_status: mStatus,
      email: emailInputRef.current!.value,
      password: riderPasswordInputRef.current!.value,
      address: {
        address: addressInputRef.current!.value,
        city: cityInputRef.current!.value,
        country: countryInputRef.current!.value,
        state: stateInputRef.current!.value,
      },
      company: riderCompanyInputRef.current!.value,
      licence: riderLicenceInputRef.current!.value,
      guarantor_details: {
        fullname: g1NameInputRef.current!.value,
        phone_number: g1PhoneInputRef.current!.value,
        address: g1AddressInputRef.current!.value,
      },
      next_of_kin: {
        fullname: g2NameInputRef.current!.value,
        phone_number: g2PhoneInputRef.current!.value,
        address: g2AddressInputRef.current!.value,
      },
    }
    try {
      e.preventDefault()
      // eslint-disable-next-line quote-props
      const config = { headers: { "Authorization": `Bearer ${decryptedData.acccess_token}` } }
      const response = await axios.post(`${SERVER_URL}/staff`, formData, config)
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
            <h5>Add new staff</h5>
            <div>
                <button className="btn_main">Upload</button>
                <button className="btn_outline mx-3">Remove</button>
            </div>

            <div className="my-4">
                <p className="heading_2x">Rider&apos;s Bio</p>

                <form className="my-4" onSubmit={riderSubmitHandler}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row mb-3">
                                <div className="col-md-6 col-xs-7 input-container">
                                    <input
                                        ref={firstnameInputRef}
                                        type="text"
                                        className="input form-control mt-2 mt-sm-0"
                                        placeholder="firstname"
                                    />
                                </div>
                                <div className="col-md-6 col-xs-7 input-container">
                                    <input
                                        ref={lastnameInputRef}
                                        type="text"
                                        className="input form-control mt-2 mt-sm-0"
                                        placeholder="lastname"
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-md-6 col-xs-7 input-container">
                                    <input
                                        ref={emailInputRef}
                                        type="email"
                                        className="input form-control mt-2 mt-sm-0"
                                        placeholder="Email (optional)"
                                    />
                                </div>
                                <div className="col-md-6 col-xs-7 input-container">
                                    <input
                                        ref={phoneInputRef}
                                        type="text"
                                        className="input form-control mt-2 mt-sm-0"
                                        placeholder="Telephone"
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-md-6 col-xs-7 input-container">
                                    <select
                                        className="form-group form-select-sm mt-2 mt-sm-0"
                                        onChange={(e) => selectStatusHandler(e)}
                                    >
                                        <option value="">Marital Status</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                    </select>
                                </div>
                                <div className="col-md-6 col-xs-7 input-container">
                                    <select
                                        className="form-group form-select-sm mt-2 mt-sm-0"
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
                                <input
                                    type="text"
                                    className="input form-control mt-2 mt-sm-0"
                                    ref={addressInputRef}
                                    placeholder="Address"
                                />
                            </div>
                            <div className="col-md-6 col-xs-7 input-container">
                                <input
                                    type="text"
                                    className="input form-control mt-2 mt-sm-0"
                                    ref={cityInputRef}
                                    placeholder="City"
                                />
                            </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-md-6 col-xs-7 input-container">

                                <input
                                    type="text"
                                    className="input form-control mt-2 mt-sm-0"
                                    ref={countryInputRef}
                                    placeholder="Country"
                                />
                                </div>
                                <div className="col-md-6 col-xs-7 input-container">

                                <input
                                    type="text"
                                    className="input form-control mt-2 mt-sm-0"
                                    ref={stateInputRef}
                                    placeholder="State"
                                />
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                            <div className="col-md-6 col-xs-7 input-container">
                                <input
                                        type="password"
                                        className="input form-control mt-2 mt-sm-0"
                                        ref={riderPasswordInputRef}
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <div className="my-5">
                                <p className="heading_2x">
                                    Rider&apos;s Confidential info
                                </p>
                                <div className="form-group row mb-3">
                                <div className="col-md-6 col-xs-7 input-container">
                                <input
                                        type="text"
                                        className="input form-control mt-2 mt-sm-0"
                                        ref={riderCompanyInputRef}
                                        placeholder="Company"
                                    />
                                </div>
                                <div className="col-md-6 col-xs-7 input-container">
                                <input
                                        type="text"
                                        className="input form-control mt-2 mt-sm-0"
                                        ref={riderLicenceInputRef}
                                        placeholder="Rider's Licence"
                                    />
                                </div>
                                </div>
                            </div>
                            <div className="my-5">
                                <p className="heading_2x">
                                    Guarantor&apos;s #1 info
                                </p>
                                <div className="form-group row mb-3">
                                <div className="col-md-6 col-xs-7 input-container">
                                <input
                                        type="text"
                                        className="input form-control mt-2 mt-sm-0"
                                        ref={g1NameInputRef}
                                        placeholder="Fullname"
                                    />
                                </div>
                                <div className="col-md-6 col-xs-7 input-container">
                                    <input
                                        type="text"
                                        className="input form-control mt-2 mt-sm-0"
                                        id="phone-number"
                                        placeholder="Phone Number"
                                        ref={g1PhoneInputRef}
                                    />
                                </div>
                                </div>
                                <div className="form-group row mb-3">
                                <div className="col-md-6 col-xs-7 input-container">
                                    <input
                                        type="text"
                                        className="input form-control mt-2 mt-sm-0"
                                        ref={g1AddressInputRef}
                                        placeholder="Address"
                                    />
                                </div>
                                </div>
                            </div>
                            <div className="my-5">
                                <p className="heading_2x">
                                    Guarantor&apos;s #2 info
                                </p>
                                <div className="form-group row mb-3">
                                    <div className="col-md-6 col-xs-7 input-container">
                                    <input
                                        type="text"
                                        className="input form-control mt-2 mt-sm-0"
                                        ref={g2NameInputRef}
                                        placeholder="Fullname"
                                    />
                                    </div>
                                    <div className="col-md-6 col-xs-7 input-container">
                                    <input
                                        type="text"
                                        className="input form-control mt-2 mt-sm-0"
                                        ref={g2PhoneInputRef}
                                        placeholder="Phone Number"
                                    />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                <div className="col-md-6 col-xs-7 input-container">
                                    <input
                                        type="text"
                                        className="input form-control mt-2 mt-sm-0"
                                        ref={g2AddressInputRef}
                                        placeholder="Address"
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="btn_main" type="submit">
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
