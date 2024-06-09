// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MyComponent from './MyComponent.jsx';
import Footer from './footer.jsx';
import Contact from './contact.jsx';

const rootElement = document.getElementById('root');
const footerElement = document.getElementById('footer');
const contactElement = document.getElementById('contact');

const root = createRoot(rootElement);
const footerRoot = createRoot(footerElement);
const contactRoot = createRoot(contactElement);

root.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>
);

footerRoot.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

contactRoot.render(  // Correctly using contactRoot to render Contact component
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);
