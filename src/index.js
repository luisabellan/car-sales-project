import React from 'react';
import ReactDOM from 'react-dom';
import { reducers } from "./reducers/reducers";
import { Provider } from 'react-redux';
import { createStore } from "redux";

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducers)
console.log(store.getState())
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
