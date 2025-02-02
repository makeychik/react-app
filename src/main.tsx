import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    "Root element not found. Please ensure an element with id 'root' exists in your HTML."
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
