import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);