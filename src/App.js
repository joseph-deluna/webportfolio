import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Assuming you have a global CSS file
import './styles/main.css';
import './styles/modal.css';
import './styles/mobile.css';

const Jose = React.lazy(() => import('./links/Jose'));
const TheDreamerStudio = React.lazy(() => import('./links/TheDreamerStudio'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Jose />} />
          <Route path="/thedreamerstudio" element={<TheDreamerStudio />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
