import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Professors from './pages/Professors';
import Reports from './pages/Reports';
import Login from './pages/Login';
import Upload from './pages/Upload';
import PrivateRoute from './components/PrivateRoute';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/professors" element={<Professors />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Upload />} />
        <Route
          path="/upload"
          element={
            <PrivateRoute allowedRoles={['professor']}>
              <Upload />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
