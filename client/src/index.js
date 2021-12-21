import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {GlobalStyle} from "./GlobalStyle";
import './index.css'

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root')
);
