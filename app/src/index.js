import React from 'react';
import ReactDOM from 'react-dom/client';
import createStore from './reducks/store/store';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import reportWebVitals from './reportWebVitals';
import * as History from 'history';
import { BrowserRouter } from 'react-router-dom';

const history = History.createBrowserHistory();
export const store = createStore(history);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
    <BrowserRouter >

            <App />

        </BrowserRouter>
    </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
