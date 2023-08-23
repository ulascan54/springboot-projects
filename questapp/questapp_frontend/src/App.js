import Navbar from "./components/Navbar/Navbar"
import User from "./components/User/User"
import Home from "./components/Home/Home"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </div>
  )
}

export default App
