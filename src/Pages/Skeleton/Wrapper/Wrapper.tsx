import { SideBar, Header } from "../../../Layout"
import { FC } from "react"
import './Wrapper.scss'

const Wrapper:FC = ({ children }) => {
  return (
    <div className="wrapper">
      <div>
        <SideBar/>
        <div>
        <Header/>
        <main className="main">
          {children}
          </main>
        </div>
      </div>
      </div>
  )
}
export default Wrapper
