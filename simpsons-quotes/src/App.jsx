
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RandomQuote from './components/RandomQuote';
import MyForm from './components/MyForm'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RandomQuote />} />
        <Route path="/form" element={<MyForm />} /> {/* route pour le formulaire */}
      </Routes>
    </Router>
  );
}

export default App;
