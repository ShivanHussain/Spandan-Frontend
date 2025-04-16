<<<<<<< HEAD
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import Store from './index';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Router>
      <Provider store={Store}>
          <App />
          <ToastContainer/>
        </Provider>
      </Router>
    </StrictMode>
  );
} else {
  console.error("Root container not found");
}
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
>>>>>>> a57215a51a8df0ac978bd190486e680c05c693cd
