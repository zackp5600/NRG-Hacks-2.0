import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
        <Navbar />
      </div>

    </>
  )
}

export default App
