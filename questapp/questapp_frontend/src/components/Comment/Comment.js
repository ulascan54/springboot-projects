import {
  Avatar,
  CardContent,
  InputAdornment,
  OutlinedInput,
} from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

function Comment({ data, userId, userName }) {
  return (
    <CardContent>
      <OutlinedInput
        disabled
        id="outlined-adorment-amount"
        multiline
        fullWidth
        value={data.text}
        startAdornment={
          <InputAdornment position="start">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}
              to={{ pathname: "/users/" + userId }}
            >
              <Avatar
                sx={{
                  background: "linear-gradient(45deg,#2196F3 30%,#21CBF3 90%)",
                }}
                aria-label="recipe"
              >
                {userName.charAt(0).toUpperCase()}
              </Avatar>
            </Link>
          </InputAdornment>
        }
      />
    </CardContent>
  )
}

export default Comment
