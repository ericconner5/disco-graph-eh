import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import searchDiscogsReducer from './reducers/searchDiscogsReducer';
// import * as serviceWorker from './serviceWorker';

const store = createStore(searchDiscogsReducer);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component/>
    </Provider>,
    document.getElementById('root'));

}

render(App);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
