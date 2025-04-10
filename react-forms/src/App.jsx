import { useState } from 'react'
import './App.css'
import Authenticate from "./Components/Authenticate.jsx"
import SignUpForm from "./Components/SignUpForm.jsx"

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <SignUpForm setToken={setToken} token={token}/>
      <Authenticate token={token} setToken={setToken}/>
    </>
  )
}

export default App
