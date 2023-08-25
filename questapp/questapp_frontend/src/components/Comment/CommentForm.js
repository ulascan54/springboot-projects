import {
  Avatar,
  Button,
  CardContent,
  InputAdornment,
  OutlinedInput,
} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

function CommentForm({ userId, userName, postId }) {
  const [text, setText] = useState("")
  const saveComment = () => {
    axios
      .post("/comments", {
        postId,
        userId,
        text,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleSubmit = () => {
    console.log(text)
    saveComment()
    setText("")
  }
  return (
    <CardContent>
      <OutlinedInput
        id="outlined-adorment-amount"
        multiline
        fullWidth
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
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
        endAdornment={
          <InputAdornment position="end">
            <Button
              onClick={handleSubmit}
              variant="contained"
              style={{
                background: "linear-gradient(45deg,#2196F3 30%,#21CBF3 90%",
                color: "white",
              }}
            >
              <SendIcon />
            </Button>
          </InputAdornment>
        }
      />
    </CardContent>
  )
}

export default CommentForm
