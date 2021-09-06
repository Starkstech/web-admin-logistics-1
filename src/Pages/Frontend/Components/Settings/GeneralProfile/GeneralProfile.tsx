import React, { FC, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useSelector } from "react-redux";
import CryptoJS from "crypto-js";
import { SERVER_URL } from "../../../../../Constant/urlConstant";
import FormInput from "../../../../../Component/FormInput/FormInput";
import './GeneralProfile.scss'

const initialFields = {
  company_name: "",
  email: "",
  agentName: "",
  phoneNo: "",
  officeAddress: "",
  monAm: "",
  tueAm: "",
  wedAm: "",
  thurAm: "",
  friAm: "",
  satAm: "",
  sunAm: "",
  monPm: "",
  tuePm: "",
  wedPm: "",
  thurPm: "",
  friPm: "",
  satPm: "",
  sunPm: ""
}

type Props = {
  setActive: Function
}

const GeneralProfile:FC<Props> = ({ setActive }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [displayFile, setDisplayFile] = useState('')
  const [fields, updateFields] = useState(initialFields)

  const { currentUser } = useSelector((state:any) => state.user)
  const data = CryptoJS.AES.decrypt(currentUser, '12345');
  const decryptedData = JSON.parse(data.toString(CryptoJS.enc.Utf8));

  const config = {
    headers: { Authorization: `Bearer ${decryptedData.acccess_token}` }
  };

  const handleChange = (event:any) => {
    const { name, value } = event.target
    updateFields({
      ...fields,
      [name]: value
    })
  }

  const fileOnchange = (event:any) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true)
    const rawImg = URL.createObjectURL(event.target.files[0]);
    setDisplayFile(rawImg)
  }

  const cancelSelected = () => {
    console.log(123)
    setSelectedFile(null)
    setIsFilePicked(false)
    setDisplayFile('')
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    console.log(selectedFile)

    // if (!selectedFile) {
    //   console.log(fields)
    //   return
    // }

    const dataFields = {
      company_name: fields.company_name,
      incorporation_certificate: "",
      registered_by: decryptedData.id,
      company_logo: "",
      customer_support: {
        email: fields.email,
        agent: fields.agentName,
        phone: fields.phoneNo,
        office_address: fields.officeAddress
      },
      opening_hours: {
        monday: `${fields.monAm}`,
        tuesday: `${fields.tueAm}`,
        wednesday: `${fields.wedAm}`,
        thurday: `${fields.thurAm}`,
        friday: `${fields.friAm}`,
        saturday: `${fields.satAm}`,
        sunday: `${fields.sunAm}`
      },
      closing_hours: {
        monday: `${fields.monPm}`,
        tuesday: `${fields.tuePm}`,
        wednesday: `${fields.wedPm}`,
        thurday: `${fields.thurPm}`,
        friday: `${fields.friPm}`,
        saturday: `${fields.satPm}`,
        sunday: `${fields.sunPm}`
      },
      active: true
    }
    try {
      await axios.patch(`${SERVER_URL}/company/1420cb64-bbf0-4586-919d-40487c2a9605`, dataFields, config)
      toast.success('Successful!!!')
    } catch (error:any) {
      toast.error(error.message)
    }
  }

  // "1420cb64-bbf0-4586-919d-40487c2a9605"

  const getCompanyInfo = async () => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/company/1420cb64-bbf0-4586-919d-40487c2a9605`, config)
      const defaultData = {
        company_name: data.company_name,
        email: data.customer_support.email,
        agentName: data.customer_support.agent,
        phoneNo: data.customer_support.phone,
        officeAddress: data.customer_support.office_address,
        monAm: data.opening_hours.monday,
        tueAm: data.opening_hours.tuesday,
        wedAm: data.opening_hours.wednesday,
        thurAm: data.opening_hours.thurday,
        friAm: data.opening_hours.friday,
        satAm: data.opening_hours.saturday,
        sunAm: data.opening_hours.sunday,
        monPm: data.closing_hours.monday,
        tuePm: data.closing_hours.tuesday,
        wedPm: data.closing_hours.wednesday,
        thurPm: data.closing_hours.thurday,
        friPm: data.closing_hours.friday,
        satPm: data.closing_hours.saturday,
        sunPm: data.closing_hours.sunday
      }
      updateFields(defaultData)
    } catch (error:any) {
      toast.error('Error fetching default settings try reloading the page')
    }
  }

  useEffect(() => {
    setActive(0)
    getCompanyInfo()
  }, [])

  return (
        <div className="settings-profile">
            <div>
                <label className="form-label heading_3x">App Logo</label>
                <div className="d-flex flex-wrap justify-content-start align-items-center">
                    <div className="shadow-sm settings-profile_img">
                      {isFilePicked ? <img src={displayFile} alt="A file" /> : null}
                    </div>
                   <div className="mt-3">
                   <input className="settings-profile_file" accept="image/*" type="file" id="settings_img" onChange={fileOnchange} />
                    <label htmlFor="settings_img" role="button" className="btn_main mx-3">Upload</label>
                    <button onClick={cancelSelected} className="btn_outline">Cancel</button>
                   </div>
                </div>
                <hr />
                <form onSubmit={handleSubmit}>
                  <div>
                      <label className="heading_3x">Company Name</label>
                      <div className="settings-profile_group d-flex justify-content-between align-items-center">
                            <FormInput type="text" name="company_name" value={fields.company_name} placeholder="Company name" id="displayName" handleChange={handleChange} required/>
                      </div>
                  </div>
                  <div>
                      <label className="heading_3x">Customer Support Details</label>
                      <div className="settings-profile_group d-flex flex-wrap justify-content-between align-items-center">
                            <FormInput value={fields.email} type="email" name="email" placeholder="Email address" id="email" handleChange={handleChange} required/>
                            <FormInput value={fields.phoneNo} type="tel" name="phoneNo" id="phoneNo" placeholder="Phone number" handleChange={handleChange} required/>
                            <FormInput value={fields.officeAddress} type="text" name="officeAddress" id="officeAddress" placeholder="Office address" handleChange={handleChange} required/>
                            <FormInput value={fields.agentName} type="text" name="agentName" id="agentName" placeholder="Agent's name" handleChange={handleChange} required/>
                      </div>
                  </div>
                  <div>
                      <label className="heading_3x">Operating hours</label>
                      <span>Please Kindly specify operating hours</span>
                      <div className="mt-3 settings-profile_group d-flex flex-wrap justify-content-between align-items-center">
                          <div className="d-flex justify-content-start align-items-center settings-profile_operations">
                            <div className="settings-profile_day">Mon</div>
                            <FormInput type="text" name="monAm" id="monAm" value={fields.monAm} handleChange={handleChange} placeholder="hh:mm" required/>
                            <div className="time-bar"><span>--</span><span>&nbsp;--</span></div>
                            <FormInput type="text" name="monPm" id="monPm" value={fields.monPm} handleChange={handleChange} placeholder="hh:mm" required/>
                          </div>
                          <div className="d-flex justify-content-start align-items-center settings-profile_operations">
                            <div className="settings-profile_day">Tue</div>
                            <FormInput value={fields.tueAm} type="text" name="tueAm" id="tueAm" handleChange={handleChange} placeholder="hh:mm" required/>
                            <div className="time-bar"><span>--</span><span>&nbsp;--</span></div>
                            <FormInput type="text" name="tuePm" id="tuePm" value={fields.tuePm} handleChange={handleChange} placeholder="hh:mm" required/>
                          </div>
                          <div className="d-flex justify-content-start align-items-center settings-profile_operations">
                            <div className="settings-profile_day">Wed</div>
                            <FormInput type="text" name="wedAm" id="wedAm" value={fields.wedAm} handleChange={handleChange} placeholder="hh:mm" required/>
                            <div className="time-bar"><span>--</span><span>&nbsp;--</span></div>
                            <FormInput value={fields.wedPm} type="text" name="wedPm" id="wedPm" handleChange={handleChange} placeholder="hh:mm" required/>
                          </div>
                          <div className="d-flex justify-content-start align-items-center settings-profile_operations">
                            <div className="settings-profile_day">Thur</div>
                            <FormInput type="text" value={fields.thurAm} name="thurAm" id="thurAm" handleChange={handleChange} placeholder="hh:mm" required/>
                            <div className="time-bar"><span>--</span><span>&nbsp;--</span></div>
                            <FormInput type="text" value={fields.thurPm} name="thurPm" id="thurPm" handleChange={handleChange} placeholder="hh:mm" required/>
                          </div>
                          <div className="d-flex justify-content-start align-items-center settings-profile_operations">
                            <div className="settings-profile_day">Fri</div>
                            <FormInput type="text" value={fields.friAm} name="friAm" id="friAm" handleChange={handleChange} placeholder="hh:mm" required/>
                            <div className="time-bar"><span>--</span><span>&nbsp;--</span></div>
                            <FormInput type="text" value={fields.friPm} name="friPm" id="friPm" handleChange={handleChange} placeholder="hh:mm" required/>
                          </div>
                          <div className="d-flex justify-content-start align-items-center settings-profile_operations">
                            <div className="settings-profile_day">Sat</div>
                            <FormInput type="text" name="satAm" id="satAm" value={fields.satAm} handleChange={handleChange} placeholder="hh:mm" required/>
                            <div className="time-bar"><span>--</span><span>&nbsp;--</span></div>
                            <FormInput type="text" name="satPm" id="satPm" value={fields.satPm} handleChange={handleChange} placeholder="hh:mm" required/>
                          </div>
                          <div className="d-flex justify-content-start align-items-center settings-profile_operations">
                            <div className="settings-profile_day">Sun</div>
                            <FormInput type="text" name="sunAm" id="sunAm" value={fields.sunAm} handleChange={handleChange} placeholder="hh:mm" required/>
                            <div className="time-bar"><span>--</span><span>&nbsp;--</span></div>
                            <FormInput type="text" value={fields.sunPm} name="sunPm" id="sunPm" handleChange={handleChange} placeholder="hh:mm" required/>
                          </div>
                      </div>
                  </div>
                  <div className="mt-4 d-flex justify-content-end align-items-center">
                      <div onClick={cancelSelected} role="button" className="btn_outline mx-2">Cancel</div>
                      <button type="submit" className="btn_main">Save</button>
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

export default GeneralProfile;
