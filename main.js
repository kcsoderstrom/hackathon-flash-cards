import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';

const header = (state = {cardIdx: 0}, action) => {
  console.log('state', state);
  switch (action.type) {
    case 'INCREMENT_CARD':
      state = Object.assign({}, state, {
        cardIdx: state.cardIdx + 1,
        showQuestion: true
      });
      return state;
    case 'SHOW_ANSWER':
      state = Object.assign({}, state, {
        showQuestion: false
      });
      return state;
    case 'ADD_DATA':
      console.log('data data', state, action);
      return;
    default:
      return state = {
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
