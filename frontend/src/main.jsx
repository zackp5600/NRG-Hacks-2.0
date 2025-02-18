import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SuggestPolicy from './SuggestPolicy.jsx'
import Vote from './Vote.jsx'
import VoteList from './VoteList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
