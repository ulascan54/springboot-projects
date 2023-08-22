import React from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
  let userId = 4

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to={{ pathname: "/users/" + userId }}>Users</NavLink>
    </nav>
  )
}

export default Navbar
