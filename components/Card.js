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
  cardHtml(content, buttonAction, buttonText) {
    return (
      <div className="card-container">
        <div className="card-text card-question">
          {content}
        </div>
        <div contentEditable="true"
             className="card-text card-text-container"
             ref={(ref) => this.input = ref}></div>
        <button onClick={this[buttonAction].bind(this)} className="card-submit">
          {buttonText}
        </button>
      </div>
    )
  }

  render () {
    console.log('card props', this.props);
    return (
      this.props.store.getState().showQuestion ?
        this.cardHtml(this.props.currentCard.question, 'showAnswer', 'ANSWER')
      : this.cardHtml(this.props.currentCard.answer, 'onIncrement', 'NEXT')
    )
  }
}
;

export default Card;