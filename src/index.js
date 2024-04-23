import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import './index.css';
// import App from './App';
import Loading from './components/loading.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "./components/firebase.js";
const App=lazy(()=>import('./App.js'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Analytics/>
    <SpeedInsights/>
    <Suspense fallback={<Loading/>}>
    <BrowserRouter><App /></BrowserRouter>
    </Suspense>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
