 import { SideBar } from "../../../../Layout/index"
import { FC } from "react"
import './Wrapper.scss'

const Wrapper:FC = ({ children }) => { 
  return (
    <div className="Wrapper container-fluid">
        <div className="row">
            <div className="col-2 p-0">
                <SideBar/>
            </div>
          {children}
        </div>
    </div>
  )
}
export default Wrapper
