import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

class Card extends React.Component {
  componentWillMount () {
    console.log('PROPS IN HEADER', this.props);

  }

  componentDidMount () {
    this.addEditor();
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

  addEditor (value) {
    console.log('add editor!!LK:HG VYGIU L GIHIU ');
    CodeMirror(document.getElementById('editor'), {
      value: value || "function myScript(){\n}\n",
      mode: "javascript",
      lineNumbers: true
    })
  }

  clearTextArea () {
    console.log('content area text', this.input.innerText);
    this.input.innerText = '';
    this.addEditor('');
  }
  cardHtml(content, buttonAction, buttonText) {
    return (
      <div className="card-container">
        <h3>{this.props.store.getState().showQuestion ? "Question:" : "Answer:"}</h3>
        <div className="card-text card-question">
          <div>{content}</div>
        </div>
        <h3>Your Answer:</h3>
        <div contentEditable="true"
             id="editor"
             className="card-text card-text-container"
             ref={(ref) => this.input = ref}>
        </div>
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