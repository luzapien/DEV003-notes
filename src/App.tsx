// import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"

function App() {
  // const [currentForm, setCurrentForm] = useState('login')

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
