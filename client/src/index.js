import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {GlobalStyle} from "./GlobalStyle";
import './index.css'
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/lib/components/Provider";
import store from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
