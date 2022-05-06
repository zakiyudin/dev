import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Dashborad from './pages/Dashborad';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';


function App() {
  return (
   <>
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashborad />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
   </>
  );
}

export default App;
