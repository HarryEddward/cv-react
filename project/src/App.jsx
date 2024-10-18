import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GenerateRoutes } from './GenerateRoutes';
import './index.css';

export default function App() {
  

  return (
    <Router>
      <GenerateRoutes/>
    </Router>
  );
}
