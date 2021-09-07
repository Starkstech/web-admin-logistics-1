import { SideBar, Header } from "../../../Layout"
import { FC } from "react"
import './Wrapper.scss'
import Dialog from "../../../Hoc/Dialog"

const Wrapper:FC = ({ children }) => {
  return (
    <div className="wrapper">
      <Dialog>
        <SideBar/>
        <div>
        <Header/>
        <main className="main">
          {children}
          </main>
        </div>
      </Dialog>
      </div>
  )
}
export default Wrapper
