import { NavLink } from "react-router-dom"

import "../styles/Header.css"

export default function Header({ isMain }) {
  const isActiveLink = ({ isActive }) => {
    if (isActive) return { color: "#782c3b" }
  }

  return (
    <header className={isMain}>
      <nav>
        <NavLink style={isActiveLink} to="/">
          Home
        </NavLink>
        <NavLink style={isActiveLink} to="/facts/dog">
          Facts
        </NavLink>
        <NavLink style={isActiveLink} to="/notes">
          Notes
        </NavLink>
      </nav>
    </header>
  )
}
