import React from 'react';
import ReactDOM from 'react-dom';
import { drizzleReactHooks } from '@drizzle/react-plugin'

import drizzle from "../../dapp/src/drizzle";

import './css/index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <drizzleReactHooks.DrizzleProvider drizzle={drizzle}>
            <App/>
        </drizzleReactHooks.DrizzleProvider>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { drizzleReactHooks } from '@drizzle/react-plugin'

import { DrizzleContext } from "@drizzle/react-plugin";

import drizzle from "./drizzle";

import './css/index.css';

import App from './components/App';

ReactDOM.render(
    <React.StrictMode>
        <DrizzleContext.Provider drizzle={drizzle}>
            <App/>
        </DrizzleContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);*/