import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import axios from "axios"

function Post() {
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
    <div>
      <ul>
        {postlist.map((post) => (
          <li>
            {post.title} {post.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Post
