import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '~/Global/Global.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyles>
                <Provider store={store}>
                    <App />
                </Provider>
            </GlobalStyles>
        </BrowserRouter>
    </React.StrictMode>,
);
