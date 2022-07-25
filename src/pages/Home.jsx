import { NavLink } from "react-router-dom"

import Clock from "../components/Clock"
import MainLayout from "../components/layouts/MainLayout"

export default function Home() {
  return (
    <MainLayout>
      <Clock />
      <NavLink to="/facts/Dog">Dog fact</NavLink>
      <NavLink to="/facts/Cat">Cat fact</NavLink>
      <NavLink to="/facts/Kangaroo">Kangaroo fact</NavLink>
    </MainLayout>
  )
}
