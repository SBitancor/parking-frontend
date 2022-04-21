import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MasterLayout/>} />
      </Routes>
    </Router>
  );
}

export default App;
