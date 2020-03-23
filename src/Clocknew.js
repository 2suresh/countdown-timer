import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Clocknew extends Component {
  formatSeconds = (sec = 0) => {
    let seconds = sec
    sec = Math.abs(sec)
    let t = [0, 0, 0];
    let r = sec % 3600;
    t[0] = Math.floor(sec / 3600)
    t[1] = Math.floor(r / 60)
    r = r % 60
    t[2] = r
    return (seconds < 0 ? "-" : "") + (t[0] < 10 ? "0" : "") + t[0]+":"+(t[1]<10?"0"+t[1]:t[1])+":"+(t[2]<10?"0"+t[2]:t[2])
  }
  render () {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
};

Clocknew.propTypes = {
    totalSeconds: PropTypes.number
}
Clocknew.getDefaultProps = {
    totalSeconds: 0
}
