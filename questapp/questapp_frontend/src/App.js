import "./App.css"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import { Routes, Route, Link, NavLink } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
