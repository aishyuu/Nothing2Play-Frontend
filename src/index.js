import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './Home';
import Leaderboards from './routes/Leaderboards';
import "./index.css"
import Instructions from './routes/Instructions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="leaderboards" element={<Leaderboards />} />
      <Route path="instructions" element={<Instructions />} />
    </Routes>
  </BrowserRouter>
)
