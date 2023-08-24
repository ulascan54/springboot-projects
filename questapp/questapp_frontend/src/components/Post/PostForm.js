import { useState, forwardRef } from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import { Button, InputAdornment, OutlinedInput } from "@mui/material"
import axios from "axios"
import SnackBar from "../SnackBar/SnackBar"

function PostForm({ data, fetchAllPosts }) {
  const [text, setText] = useState("")
  const [title, setTitle] = useState("")
  const [isSend, setIsSend] = useState(false)
  const savePost = () => {
    axios
      .post("/posts", {
        title: title,
        text: text,
        userId: 1,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleSubmit = () => {
    savePost()
    setIsSend(true)
    fetchAllPosts()
    setTitle("")
    setText("")
  }
  return (
    <Card sx={{ width: 800, margin: "20px" }}>
      <CardHeader
        avatar={
          <Link
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to={{ pathname: "/users/4" }}
          >
            <Avatar
              sx={{
                background: "linear-gradient(45deg,#2196F3 30%,#21CBF3 90%)",
              }}
              aria-label="recipe"
            >
              {"asadef".charAt(0).toUpperCase()}
            </Avatar>
          </Link>
        }
        title={
          <OutlinedInput
            id="outlined-adorment-amount"
            multiline
            placeholder="Title"
            fullWidth
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
              setIsSend(false)
            }}
            inputProps={{ maxLength: 25 }}
          />
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <OutlinedInput
            id="outlined-adorment-amount"
            multiline
            placeholder="Text"
            fullWidth
            value={text}
            onChange={(e) => {
              setText(e.target.value)
              setIsSend(false)
            }}
            inputProps={{ maxLength: 250 }}
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
                  Post
                </Button>
              </InputAdornment>
            }
          />
        </Typography>
      </CardContent>
      <SnackBar isOpen={isSend} text={"Yükleme başarı ile tamamlandı"} />
    </Card>
  )
}

export default PostForm
