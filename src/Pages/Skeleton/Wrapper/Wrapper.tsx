import { SideBar, Header } from "../../../Layout"
import { FC } from "react"
import './Wrapper.scss'

const Wrapper:FC = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 p-0">
          <SideBar/>
        </div>
        <div className="col-10 p-0">
          <Header/>
          <main>
          {children}
          </main>
        </div>
      </div>
    </div>
  )
}
export default Wrapper
