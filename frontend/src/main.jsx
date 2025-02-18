
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import SuggestPolicy from './SuggestPolicy.jsx'
import Vote from './Vote.jsx'
import VoteList from './VoteList.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/suggestPolicy" element={<SuggestPolicy />} />
        <Route path="/voteList" element={<VoteList />} />
        <Route path="/vote" element={<Vote />} />
      </Routes>
    </BrowserRouter>,
)
