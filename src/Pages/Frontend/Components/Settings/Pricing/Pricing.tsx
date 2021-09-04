import React, { FC, useState } from 'react'
import axios from "axios";
import { useSelector } from "react-redux";
import CryptoJS from "crypto-js";
import { SERVER_URL } from "../../../../../Constant/urlConstant";
import './Pricing.scss'

const Pricing:FC = () => {
  const { currentUser } = useSelector((state:any) => state.user)
  const data = CryptoJS.AES.decrypt(currentUser, '12345');
  const decryptedData = JSON.parse(data.toString(CryptoJS.enc.Utf8));
  const [fields, updateFields] = useState<any>([])

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

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    // if (!fields.length) {
    //   console.log(fields)
    //   return
    // }
    try {
      console.log('trying...')
      const dataFields = {
        minimum_price: fields.regMinPrice,
        discount: 0,
        regular_unit_price: {
          price: fields.regPrice,
          note: fields.regNotes
        },
        express_unit_price: {
          price: fields.expPrice,
          note: fields.expNotes
        },
        extras: {}
      }
      const { data } = await axios.post(`${SERVER_URL}/company/pricing`, dataFields, config)
      console.log(data, 'Triedd')
    } catch (error:any) {
      console.log(error.message, 'cannot submit')
    }
  }

  return (
        <div className="pricing">
            <h2 className="heading_2x">Pricing</h2>
            <p>Kindly specify pricing system</p>
            <form onSubmit={handleSubmit} className="pricing_form mt-5 table-responsive p-4">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th>Pricing</th>
                  <th>Delivery Class</th>
                  <th>Notes(Shipping days or notice)</th>
                  <th>Minimum Cost Per Delivery</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="pricing_input"><span>#</span><input name="regPrice" type="text" onChange={handleChange} required /></div>
                  </td>
                  <td>Regular</td>
                  <td><textarea name="regNotes" className="pricing_textarea" onChange={handleChange} required /></td>
                  <td>
                   <div className="pricing_input"><span>#</span><input name="regMinPrice" type="text" onChange={handleChange} required /></div>
                  </td>
                </tr>
                <tr>
                  <td>
                   <div className="pricing_input"><span>#</span><input name="expPrice" type="text" onChange={handleChange}/></div>
                  </td>
                  <td>Express</td>
                  <td><textarea name="expNotes" className="pricing_textarea" onChange={handleChange}/></td>
                  <td>
                   <div className="pricing_input"><span>#</span><input name="expMinPrice" type="text" onChange={handleChange}/></div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
            <h2 className="pricing_note heading_3x my-3">Note:</h2>
              <p><strong>Delivery class name:</strong> Specify the delivery options available to your customers. Regular Class is compulsory</p>
              <p><strong>Minimum Cost Per Delivery:</strong> This is the minimum amount paid by customers for each order place</p>

            </div>
            <div className="mt-4 d-flex justify-content-end align-items-center">
                      <div role="button" className="btn_outline mx-2">Cancel</div>
                      <button className="btn_main">Save</button>
            </div>
            </form>
        </div>
  )
}

export default Pricing;
