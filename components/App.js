import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Header from './Header';
import Card from './Card';
import CardList from './CardList';
import data from '../data';

console.log('data', data);

class App extends React.Component {
  componentWillMount() {
    console.log('app componenet will mount!!!!!!!!', this.props);
    //this.props.store.dispatch({
    //  type: 'ADD_DATA',
    //  data: {data: data}
    //                          });
    //this.props['data'] = data;
  }

  getCard () {
    return data.cards[this.props.store.getState().cardIdx];
  }
  render(){
    return (
      <div>
        <Header store={this.props.store}/>
        <CardList store={this.props.store} count={data.cards.length}/>
        <Card currentCard={this.getCard()} store={this.props.store} />
      </div>

    )
  }
}
//
//const counter = (state = {val: 0, thing: 'a'}, action) => {
//  console.log('state', state);
//  switch (action.type) {
//    case 'INCREMENT':
//      state = Object.assign({}, state, {
//        val: state.val + 1
//      });
//      return state;
//    case 'DECREMENT':
//      state = Object.assign({}, state, {
//        val: state.val - 1
//      });
//      return state;
//    case 'JUMP':
//      state = Object.assign({}, state, {
//        val: state.val + 5
//      });
//      return state;
//    default:
//      return state = {val: 0, thing: 'a'};
//  }
//}
//
//const Counter = ({
//  value,
//  onIncrement,
//  onDecrement,
//  bigIncrease
//  }) => (
//  <div>
//    <h1>{value}</h1>
//    <button onClick={onIncrement}>+</button>
//    <button onClick={onDecrement}>-</button>
//    <button onClick={bigIncrease}>-</button>
//  </div>
//);
//
////const { createStore } = Redux;
//const store = createStore(counter);
//
//let dispatch = (opts) => {
//  store.dispatch(opts);
//}
//
//const render = () => {
//  console.log('store', store.getState().val);
//  ReactDOM.render(
//    <Counter
//      value={store.getState().val}
//      onIncrement={() =>
//      store.dispatch({
//          type: 'INCREMENT'
//        })
//      }
//      onDecrement={() =>
//      store.dispatch({
//          type: 'DECREMENT'
//        })
//      }
//      bigIncrease={() =>
//      store.dispatch({
//             type: 'JUMP'
//         })
//      }
//    />,
//    document.getElementById('root')
//  );
//};
//
//store.subscribe(render);
////render();

export default App
