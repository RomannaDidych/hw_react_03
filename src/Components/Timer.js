import React, { Component } from "react";
import "./styles.css";

class Timer extends Component {
  state = {
    timing: this.props.timer.autostart,
    time: this.props.timer.time,
    bar: 100,
  };

  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), this.props.timer.timeTick);
  };

  tick = () => {
    const barStep = 100 / (this.props.timer.time / this.props.timer.timeTick);
    const currentTime = this.state.time;
    const currentBar = this.state.bar;
    if (this.state.timing === true) {
      if (currentTime > 0) {
        this.setState({ time: currentTime - this.props.timer.timeTick });
        currentBar - barStep > 0
          ? this.setState({ bar: currentBar - barStep })
          : this.setState({ bar: 0 });
      } else {
        this.setState({
          timing: false,
          time: this.props.timer.time,
          bar: 100,
        });
      }
    }
  };

  showButtonTitle = () => {
    return this.state.timing === true ? "stop" : "start";
  };

  createTimeString = (time) => {
    let str = "";
    if (time > 0) {
      const checkTime = (i) => {
        return i < 10 ? "0" + i : i;
      };
      const ms = checkTime(time % 1000);
      const sec = checkTime(Math.floor(time / 1000));
      const min = checkTime(Math.floor(time / 60000));
      str = min + ":" + sec + ":" + ms;
    } else {
      str = "00:00:00";
    }
    console.log(str);    
    return str;
  };

  handleClick = (e) => {
    this.state.timing
      ? this.setState({ timing: false })
      : this.setState({ timing: true });
  };

  render() {
    const style = { width: this.state.bar + "%" };
    return (
      <div className="timer">
        <div className="timerBlock">
          <p>{this.createTimeString(this.state.time)}</p>
        </div>
        <button className="startButton" onClick={this.handleClick}>
          {this.showButtonTitle()}
        </button>
        <div className="progressBar" style={style}></div>
      </div>
    );
  }
}

export default Timer;