import { useEffect, useRef, useState } from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import FavoriteIcon from "@mui/icons-material/Favorite"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import { Link } from "react-router-dom"
import axios from "axios"
import { Container } from "@mui/material"
import Comment from "../Comment/Comment"
import CommentForm from "../Comment/CommentForm"
const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

function Post({ data }) {
  const [expanded, setExpanded] = useState(false)
  const [like, setLike] = useState(false)
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [commentList, setCommentList] = useState([])
  const isInitialMount = useRef(true)

  const handleExpandClick = () => {
    setExpanded(!expanded)
    fetchAllComments()
    console.log(commentList)
  }
  const handleLike = () => {
    setLike(!like)
  }
  const fetchAllComments = () => {
    axios("/comments?postId=" + data.id)
      .then((response) => {
        setIsLoaded(true)
        setCommentList(response.data)
      })
      .catch((error) => {
        setIsLoaded(true)
        setError(error)
      })
  }

  useEffect(() => {
    if (isInitialMount.current) isInitialMount.current = false
    else fetchAllComments()
  }, [commentList])

  return (
    <Card sx={{ width: 800, margin: "20px" }}>
      <CardHeader
        avatar={
          <Link
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to={{ pathname: "/users/" + data.userId }}
          >
            <Avatar
              sx={{
                background: "linear-gradient(45deg,#2196F3 30%,#21CBF3 90%)",
              }}
              aria-label="recipe"
            >
              {data.userName.charAt(0).toUpperCase()}
            </Avatar>
          </Link>
        }
        title={data.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={handleLike}
          sx={{ color: `${like === true ? "red" : ""}` }}
        >
          <FavoriteIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <QuestionAnswerIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Container fixed>
          {error
            ? "error"
            : isLoaded
            ? commentList.map((comment) => (
                <Comment data={comment} userName={"user"} userId={1} />
              ))
            : "Loading..."}
          <hr />
          <CommentForm userName={"user"} userId={1} postId={data.id} />
        </Container>
      </Collapse>
    </Card>
  )
}

export default Post
