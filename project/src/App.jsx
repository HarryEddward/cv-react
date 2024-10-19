import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GenerateRoutes } from './GenerateRoutes';
import './index.css';
import AnimatedCursor from 'react-animated-cursor';

export default function App() {
  

  return (
    <Router>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color={[0, 0, 0]} // Aquí el color negro en formato RGB
        outerAlpha={0.1}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <GenerateRoutes/>
    </Router>
  );
}
