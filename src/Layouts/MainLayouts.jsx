import { Outlet } from "react-router-dom"
import Navbar from "../componets/Navbar"
import Homepage from "../pages/Homepage"

const MainLayouts = () => {
  return (
    <>
      <Navbar/>
    
      <Outlet/>
    </>
  )
}

export default MainLayouts
