import React, { FC, useState } from "react";
import FormInput from "../../../../../Component/FormInput/FormInput";
import './GeneralProfile.scss'

const GeneralProfile:FC = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [displayFile, setDisplayFile] = useState('')

  const handleChange = (e:any) => {
    console.log(e.value)
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

  const handleSubmit = () => {
    console.log(selectedFile)
  }

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
                <form>
                  <div>
                      <label className="heading_3x">Company Name</label>
                      <div className="settings-profile_group d-flex justify-content-between align-items-center">
                            <FormInput type="text" name="displayName" placeholder="Display name" id="displayName" handleChange={handleChange} required/>
                      </div>
                  </div>
                  <div>
                      <label className="heading_3x">Customer Support Details</label>
                      <div className="settings-profile_group d-flex flex-wrap justify-content-between align-items-center">
                            <FormInput type="email" name="email" placeholder="Email address" id="email" handleChange={handleChange} required/>
                            <FormInput type="tel" name="phoneNo" id="phoneNo" placeholder="Phone number" handleChange={handleChange} required/>
                            <FormInput type="text" name="officeAddress" id="officeAddress" placeholder="Office address" handleChange={handleChange} required/>
                            <FormInput type="text" name="agentName" id="agentName" placeholder="Agent's name" handleChange={handleChange} required/>
                      </div>
                  </div>
                  <div>
                      <label className="heading_3x">Operating hours</label>
                      <span>Please Kindly specify operating hours</span>
                      <div className="mt-3 settings-profile_group d-flex flex-wrap justify-content-between align-items-center">
                          <div className="d-flex justify-content-start align-items-center settings-profile_operations">
                            <div className="settings-profile_day">Mon</div>
                            <FormInput type="text" name="monAm" id="monAm" handleChange={handleChange} placeholder="hh:mm" required/>
                            <div className="time-bar"><span>--</span><span>&nbsp;--</span></div>
                            <FormInput type="text" name="monPm" id="monPm" handleChange={handleChange} placeholder="hh:mm" required/>
                          </div>
                          <div className="d-flex justify-content-start align-items-center settings-profile_operations">
                            <div className="settings-profile_day">Tue</div>
                            <FormInput type="text" name="monAm" id="monAm" handleChange={handleChange} placeholder="hh:mm" required/>
                            <div className="time-bar"><span>--</span><span>&nbsp;--</span></div>
                            <FormInput type="text" name="monPm" id="monPm" handleChange={handleChange} placeholder="hh:mm" required/>
                          </div>
                          <div className="d-flex justify-content-start align-items-center settings-profile_operations">
                            <div className="settings-profile_day">Wed</div>
                            <FormInput type="text" name="monAm" id="monAm" handleChange={handleChange} placeholder="hh:mm" required/>
                            <div className="time-bar"><span>--</span><span>&nbsp;--</span></div>
                            <FormInput type="text" name="monPm" id="monPm" handleChange={handleChange} placeholder="hh:mm" required/>
                          </div>
                          <div className="d-flex justify-content-start align-items-center settings-profile_operations">
                            <div className="settings-profile_day">Thur</div>
                            <FormInput type="text" name="monAm" id="monAm" handleChange={handleChange} placeholder="hh:mm" required/>
                            <div className="time-bar"><span>--</span><span>&nbsp;--</span></div>
                            <FormInput type="text" name="monPm" id="monPm" handleChange={handleChange} placeholder="hh:mm" required/>
                          </div>
                          <div className="d-flex justify-content-start align-items-center settings-profile_operations">
                            <div className="settings-profile_day">Fri</div>
                            <FormInput type="text" name="monAm" id="monAm" handleChange={handleChange} placeholder="hh:mm" required/>
                            <div className="time-bar"><span>--</span><span>&nbsp;--</span></div>
                            <FormInput type="text" name="monPm" id="monPm" handleChange={handleChange} placeholder="hh:mm" required/>
                          </div>
                          <div className="d-flex justify-content-start align-items-center settings-profile_operations">
                            <div className="settings-profile_day">Sat</div>
                            <FormInput type="text" name="monAm" id="monAm" handleChange={handleChange} placeholder="hh:mm" required/>
                            <div className="time-bar"><span>--</span><span>&nbsp;--</span></div>
                            <FormInput type="text" name="monPm" id="monPm" handleChange={handleChange} placeholder="hh:mm" required/>
                          </div>
                          <div className="d-flex justify-content-start align-items-center settings-profile_operations">
                            <div className="settings-profile_day">Sun</div>
                            <FormInput type="text" name="monAm" id="monAm" handleChange={handleChange} placeholder="hh:mm" required/>
                            <div className="time-bar"><span>--</span><span>&nbsp;--</span></div>
                            <FormInput type="text" name="monPm" id="monPm" handleChange={handleChange} placeholder="hh:mm" required/>
                          </div>
                      </div>
                  </div>
                  <div className="mt-4 d-flex justify-content-end align-items-center">
                      <div onClick={cancelSelected} role="button" className="btn_outline mx-2">Cancel</div>
                      <button onClick={handleSubmit} className="btn_main">Save</button>
                  </div>
                </form>

            </div>
        </div>
  )
}

export default GeneralProfile;
