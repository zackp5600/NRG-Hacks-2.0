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
      <div className='top-container'>

          <Navbar />
        <div className='card'>
          <div className='container'>
            <h1>Civic Connect</h1>
            <p>Civic Connect is a community-driven platform that empowers individuals to propose, discuss, and vote on policies that matter to them. Whether you're passionate about local issues or global challenges, Civic Connect provides a space to share your ideas, collaborate with like-minded people, and influence real change.</p>
          </div>
        </div>

      </div>

  

    </>
  )
}

export default App
