import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery';
import 'popper.js';
import { Provider } from 'react-redux';
import { store } from './lib/store';
import { AppContainer } from './views/containers';


// Log the initiale state
console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(addtoCart({name: 'citron'}, 2))
// store.dispatch(addtoCart({name: 'kiwi'}, 5))
unsubscribe()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppContainer />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
