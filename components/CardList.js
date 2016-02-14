import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

class Card extends React.Component {
  componentWillMount () {
    console.log('PROPS IN HEADER', this.props);
  }

  componentDidMount () {

  }

  goToCard (e) {
    console.log(e.currentTarget.innerText);
    this.props.store.dispatch({
                                type: 'SET_CARD_IDX',
                                data: {idx: e.currentTarget.innerText}
                              })
  }

  clearTextArea () {
    console.log('content area text', this.input.innerText);
    this.input.innerText = '';
  }

  cardList () {
    let list = [];
    let isDone;
    let isCurrent;

    for (var i = 0; i < this.props.count; i++) {
      isDone = i < this.props.currentCard ? " done" : "";
      isCurrent = i === this.props.currentCard ? " current" : "";
     list.push(<div key={i} className={"card-list-item" + isDone + isCurrent}
                    onClick={(e) => this.goToCard(e)}>{i + 1}</div>)
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