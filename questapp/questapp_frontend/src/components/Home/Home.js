import { useState, useEffect } from "react"
import Post from "../Post/Post"
import "./Home.scss"
import axios from "axios"
import { Container } from "@mui/material"
import PostForm from "../Post/PostForm"

function Home() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [postlist, setPostList] = useState([])

  const fetchAllPosts = () => {
    axios("/posts")
      .then((response) => {
        setIsLoaded(true)
        setPostList(response.data)
      })
      .catch((error) => {
        setIsLoaded(true)
        setError(error)
      })
  }

  useEffect(() => {
    fetchAllPosts()
  }, [postlist])

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
        width: "100 !important",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <PostForm data={postlist[1]} fetchAllPosts={fetchAllPosts} />

      {postlist.map((post, i) => (
        <Post data={post} key={i} />
      ))}
    </Container>
  )
}

export default Home
