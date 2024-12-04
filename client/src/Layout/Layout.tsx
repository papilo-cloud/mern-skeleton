import { Outlet } from "react-router-dom"
import Topbar from "../components/Topbar/Topbar.tsx"

export const Layout = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  )
}
