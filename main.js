import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';

let setStorage = function (key, val) {
  window.localStorage.setItem(key, val);
};

let getStorage = function (key) {
  return window.localStorage.getItem(key);
};

let setState = function (state) {
  setStorage('state', JSON.stringify(state));
}

let getState = function () {
  return JSON.parse(getStorage('state')) || '';
}

const header = (state = {cardIdx: 0}, action) => {

  switch (action.type) {

    case 'INCREMENT_CARD':
      state = Object.assign({}, state, {
        cardIdx: state.cardIdx + 1,
        showQuestion: true
      });

      setState(state);
      return state;

    case 'SHOW_ANSWER':
      state = Object.assign({}, state, {
        showQuestion: false
      });

      setState(state);
      return state;

    case 'ADD_DATA':
      console.log('data data', state, action);
      return;

    case 'SET_CARD_IDX':
      state = Object.assign({}, state, {
        cardIdx: +action.data.idx - 1,
        showQuestion: true
      });

      setState(state);
      return state;

    default:
      console.log('in swith set', getState());
      return state = getState() || {
        cardIdx: 0,
        showQuestion: true
      };
  }
};

const store = createStore(header);


const render = () => {
  ReactDOM.render(<App store={store}/>, document.getElementById('app')
  );
};

store.subscribe(render);

render();

//ReactDOM.render(<App />, document.getElementById('app'))
