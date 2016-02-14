import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

class Card extends React.Component {
  componentWillMount () {
    console.log('PROPS IN HEADER', this.props);
  }

  componentDidMount () {

  }

  onIncrement () {
    this.clearTextArea();
    this.props.store.dispatch({
                                type: 'INCREMENT_CARD'
                              })
  }

  showAnswer () {
    this.props.store.dispatch({
                                type: 'SHOW_ANSWER'
                              })
  }

  clearTextArea () {
    console.log('content area text', this.input.innerText);
    this.input.innerText = '';
  }

  cardList () {
    let list = [];
    for (var i = 0; i < this.props.count; i++) {
     list.push(<div className="card-list-item">{i + 1}</div>)
    }

    return list;
  }

  render () {
    console.log('cardlist props', this.props);
    return (
      <div className="card-list-container">
        <div>
          {
            this.cardList()
          }
        </div>
      </div>
    )
  }
}
;

export default Card;