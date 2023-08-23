import "./Post.scss"
function Post({ title, text }) {
  return (
    <div className="postContainer">
      <p>{title}</p>
      <p>{text}</p>
    </div>
  )
}

export default Post
