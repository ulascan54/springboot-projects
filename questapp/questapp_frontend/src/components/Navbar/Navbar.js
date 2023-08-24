import React from "react"
import { NavLink } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
function Navbar() {
  let userId = 4

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "left" }}
        >
          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to="/"
          >
            Home
          </NavLink>
        </Typography>
        <Typography variant="h6" component="div">
          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to={{ pathname: "/users/" + userId }}
          >
            Users
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
