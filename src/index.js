import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots } from './reducers';

const store = createStore(searchRobots)

ReactDOM.render(
              <App store={store} />, document.getElementById('root'));
serviceWorker.unregister();
