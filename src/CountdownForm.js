import React, { Component } from 'react';

export default class CountdownForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value || '0';
    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }
  render() {
      return (
        <div>
          <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
            <input type="text" ref="seconds" class="foo" placeholder="Enter time in seconds"/>
            <button className="button expanded">Start</button>
          </form>
        </div>
      );
  }
};
