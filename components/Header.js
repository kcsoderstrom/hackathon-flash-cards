import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

class Header extends React.Component {
  componentWillMount() {
      console.log('PROPS IN HEADER', this.props);
  }
  onIncrement() {
    this.props.store.dispatch({
      type: 'INCREMENT'
                              })
  }
  onDecrement() {}
  bigIncrease() {}
  render() {
    return (
      <div className="header">
        <h1>Flash Code</h1>
      </div>
    )
  }
};

export default Header;