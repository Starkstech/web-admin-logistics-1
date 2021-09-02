import React, { FC } from 'react'
import './Pricing.scss'

const Pricing:FC = () => {
  return (
        <div className="pricing">
            <h2 className="heading_2x">Pricing</h2>
            <p>Kindly specify pricing system</p>
            <form className="pricing_form mt-5 table-responsive p-4">
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
                    <div className="pricing_input"><span>#</span><input type="text" /></div>
                  </td>
                  <td>Regular</td>
                  <td><textarea className="pricing_textarea" /></td>
                  <td>
                   <div className="pricing_input"><span>#</span><input type="text" /></div>
                  </td>
                </tr>
                <tr>
                  <td>
                   <div className="pricing_input"><span>#</span><input type="text" /></div>
                  </td>
                  <td>Regular</td>
                  <td><textarea className="pricing_textarea" /></td>
                  <td>
                   <div className="pricing_input"><span>#</span><input type="text" /></div>
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
