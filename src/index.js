import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import { AppStore as appStore } from './stores/AppStore';
import { MonitorStore as monitorStore } from './stores/MonitorStore';
import { GraphStore as graphStore } from './stores/GraphStore';
import './assets/fonts/CalibriLight.ttf'
import './assets/fonts/CalibriRegular.ttf'
import './assets/fonts/CalibriBold.ttf'

const AppStore = new appStore()
const MonitorStore = new monitorStore()
const GraphStore = new graphStore()


const stores = {
  AppStore,
  MonitorStore,
  GraphStore
}

ReactDOM.render(
  <Provider {...stores} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
