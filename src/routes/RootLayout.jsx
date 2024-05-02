import { Outlet } from "react-router-dom"
import MainHeader from "../components/common/MainHeader"

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  )
}
