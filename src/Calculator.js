import React, { Component } from 'react';
import Display from './components/Display';
// import Opertions from './Operations';
import {calculateByOperator} from './Logic';
import Keypad from './components/Keypad';

import './css/Calculator.css';

class Calculator extends Component {
  state = {
    displayValue: '0',
    result: 0,
    operator: '',
    expression: ''
  }

  updateDisplayValue = this.updateDisplayValue.bind(this);
  updateOperator = this.updateOperator.bind(this);
  showResult = this.showResult.bind(this);
  clear = this.clear.bind(this);

  clear() {
    this.setState({
      displayValue: '0',
      result: 0,
      operator: '',
      expression: '',
    })
  }

  updateDisplayValue(evt) {
    evt.preventDefault();
    let value = evt.target.value;
    let displayValue = String(value);

    if (this.state.displayValue === '0') {
      if (value === '.') displayValue = this.state.displayValue + String(value);

      return this.setState({displayValue: displayValue, expression: this.state.expression + value});
    }

    this.setState((prevState) => {
      this.setState({
        displayValue: this.state.displayValue + value,
        expression: prevState.expression + value
      });
    });
  }

  updateOperator(evt) {
    evt.preventDefault();
    let operator = evt.target.value;
    let result = this.state.displayValue;

    if (this.state.operator !== '') {
      result = calculateByOperator(this.state.operator, this.state.result, this.state.displayValue);
    } 

    this.setState({
      operator: operator,
      displayValue: '0',
      result: result,
      expression: this.state.expression + ' ' + operator + ' '
    })
  }


  showResult() {
    if (this.state.operator !== '') {
      let result = calculateByOperator(this.state.operator, this.state.result, this.state.displayValue);

      return this.setState({displayValue: result, operator: ''});
    }

    return this.setState({displayValue: this.state.result});
  }

  render() {
    return (
      <div className="calculator">
        <Display result={this.state.displayValue} expression={this.state.expression} />
        <Keypad symbol="7" action={this.updateDisplayValue} />
        <Keypad symbol="8" action={this.updateDisplayValue} />
        <Keypad symbol="9" action={this.updateDisplayValue} />
        <Keypad symbol="+" action={this.updateOperator} extraClasses="operator"/>
        <Keypad symbol="4" action={this.updateDisplayValue} />
        <Keypad symbol="5" action={this.updateDisplayValue} />
        <Keypad symbol="6" action={this.updateDisplayValue} />
        <Keypad symbol="-" action={this.updateOperator} extraClasses="operator"/>
        <Keypad symbol="1" action={this.updateDisplayValue} />
        <Keypad symbol="2" action={this.updateDisplayValue} />
        <Keypad symbol="3" action={this.updateDisplayValue} />
        <Keypad symbol="=" action={this.showResult} extraClasses="operator" />
        <Keypad symbol="AC" action={this.clear} extraClasses="operator" />
        <Keypad symbol="0" action={this.updateDisplayValue} />
        <Keypad symbol="." action={this.updateDisplayValue} />
      </div>
    );
  }
}

export default Calculator;
