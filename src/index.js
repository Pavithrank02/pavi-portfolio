import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Shimmer from './components/Shimmer';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div><Shimmer /></div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
