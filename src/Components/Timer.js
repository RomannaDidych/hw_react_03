import React, {Component} from 'react';
import './styles.css';

class Timer extends Component {
	
	
		state = {
			timing: this.props.timer.autostart,
			time: this.props.timer.time,
			bar: 100			
		};
	
		componentDidMount = () => {
						this.timerID = setInterval(() => this.tick(), this.props.timer.timeTick); 
		 }

		tick = () => {
			const currentTime = this.state.time;
			const currentBar = this.state.bar;
			const barTick = 100/(this.props.timer.time/this.props.timer.timeTick); 
			if(this.state.timing === true){
				if(currentTime > 0){
					this.setState({time: currentTime - this.props.timer.timeTick});
					this.setState({bar: currentBar - barTick})
				} else {
					this.setState({
						timing: false, 
						time: this.props.timer.time,
						bar: 100
					})
					
				}
			}	
		}


	  	 showButtonState= () => {
	  	 	/*console.log(this.state.timing)*/
	  	 	return this.state.timing === true ? "stop" : "start"
	  	 } 
	  	
	 

		createTimeString = (time) => {			
			const checkTime = (i) => {return i<10 ? '0'+i : i};	  	
			const ms = checkTime(time%1000);
			const sec = checkTime(Math.floor(time/1000));
			const min = checkTime(Math.floor(time/60000));
			const str = min + ':' + sec + ':' + ms;
			console.log(str);			
			return str;
		}		

		handleClick = (e) =>{			
			
			this.state.timing ? this.setState({timing: false}) : this.setState({timing: true})
		}

		render(){
			const style = {width: this.state.bar+"%"}
			return (
				<div className= 'timer'>
					<div className='timerBlock'>
						<p>{this.createTimeString(this.state.time)}</p>
					</div>
					<button className= 'startButton' onClick={this.handleClick}>{this.showButtonState()}</button>
					<div className='progressBar' style={style}></div>
				</div>
				)
		}
	

}

export default Timer;

//<div className="bar" style={style}></div>