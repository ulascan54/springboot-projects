import { useState, useEffect } from "react"
import Post from "../Post/Post"
import "./Home.scss"
import axios from "axios"
import { Container } from "@mui/material"

function Home() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [postlist, setPostList] = useState([])
  useEffect(() => {
    axios("/posts")
      .then((response) => {
        setIsLoaded(true)
        setPostList(response.data)
      })
      .catch((error) => {
        setIsLoaded(true)
        setError(error)
      })
  }, [])

  if (error) {
    return <div>Error!!</div>
  }

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <Container
      className="container"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#cfe8fc",
        height: "100vh",
      }}
    >
      {postlist.map((post) => (
        <Post title={post.title} text={post.text} />
      ))}
    </Container>
  )
}

export default Home
