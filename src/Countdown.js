import React, { Component } from 'react';
import Clocknew from './Clocknew';
import CountdownForm from './CountdownForm';
import Controls from './Controls';
import './App.css';
class Countdown extends Component {
  constructor(props){
    super(props)
    this.state = {
        count: 0,
        countdownStatus: 'stopped'
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          clearInterval(this.timer);
          this.setState({
            count: 0,
            countdownStatus: 'stopped'
          });
          break;
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        default: break;
      }
    }
  }
  componentWillUnmount = () => {
    clearInterval(this.timer);
    this.timer = undefined;
  }
  startTimer = () => {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount //>= 0 ? newCount : 0
      });
      // for negative values
      // if (newCount === 0) {
      //   this.setState({
      //     countdownStatus: 'stopped'
      //   });
      // }
    }, 1000);
  }
  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }
  handleStatusChange = (newStatus) => {
    this.setState({
      countdownStatus: newStatus
    });
  }
  render () {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== "stopped") {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
          return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clocknew totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
};

export default Countdown;
