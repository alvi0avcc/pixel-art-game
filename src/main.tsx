import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';

const getBasename = () => {
  if (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  ) {
    return '/';
  }
  return '/pixel-art-game';
};

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={getBasename()}>
    <App />
  </BrowserRouter>,
);
