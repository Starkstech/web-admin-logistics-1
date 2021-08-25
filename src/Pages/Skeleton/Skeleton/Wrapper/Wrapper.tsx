/* eslint-disable react/jsx-filename-extension */
import { SideBar, Header } from "../../../../Layout/index"
import { FC } from "react"
import './Wrapper.scss'

const Wrapper:FC = ({ children }) => {
  return (
    <div className="Wrapper container-fluid p-0">
      <div className="row">
        <div className="col-md-2  p-0">
          <SideBar/>
        </div>
        <div className="col-sm-12 col-md-10 p-0">
            <div className="">
          <Header />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
export default Wrapper
