import React from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </nav>
  )
}

export default Navbar
