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
            <h1>CivicConnect</h1>
            <div className='line'></div>
            <br></br>
            <h2>
            Where citizens get their voices heard
            </h2>
            <br></br>
            <p>Civic Connect is a dynamic, community-driven platform designed to connect individuals with the power to influence public policy. It allows citizens to propose, discuss, and vote on policies that are important to them, creating a space where every voice has the potential to spark real-world change.

With Civic Connect, citizens are no longer passive recipients of policies but active participants in shaping their communities, governments, and societies. Whether you're passionate about environmental issues, social justice, healthcare, education, or economic reform, Civic Connect helps you bring your ideas to life and gain support from others who share your values.</p>

          </div>
        </div>

      </div>

  

    </>
  )
}

export default App
