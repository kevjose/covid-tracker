import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.output.css';
import App from './App';
import 'typeface-open-sans';
import { DrawerProvider } from './contexts/drawer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <DrawerProvider>
      <App />
    </DrawerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
