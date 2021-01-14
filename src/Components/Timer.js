import React, {Component} from 'react';
import './styles.css';

class Timer extends Component {
	
	
		state = {
			timing: this.props.timer.autostart,
			time: this.props.timer.time			
		};
	
		componentDidMount = () => {
						this.timerID = setInterval(() => this.tick(), this.props.timer.timeTick); 
		 }

		tick = () => {
			const currentTime = this.state.time; 
			if(this.state.timing === true){
				if(currentTime !== 0){
					this.setState({time: currentTime - this.props.timer.timeTick})
				} else {
					this.setState({
						timing: false, 
						time: this.props.timer.time
					})
					
				}
			}	
		}


	  	 showButtonState= () => {
	  	 	/*console.log(this.state.timing)*/
	  	 	return this.state.timing === true ? "stop" : "start"
	  	 } 
	  	
	 

		createTimeString = (time) => {			
			const checkTime = (i) => {return i<10 ? '0'+i : 'i'};	  	
			const ms = checkTime(time%1000);
			const sec = checkTime(Math.floor(time/1000));
			const min = checkTime(Math.floor(time/60000));
			const str = min + ':' + sec + ':' + ms;			
			return str;
		}		

		handleClick = (e) =>{			
			console.log('click')
			this.state.timing ? this.setState({timing: false}) : this.setState({timing: true})
		}

		render(){
			return (
				<div className= 'timer'>
					<div className='timerBlock'>
						<p>{this.createTimeString(this.state.time)}</p>
					</div>
					<button className= 'startButton' onClick={this.handleClick}>{this.showButtonState()}</button>
				</div>
				)
		}
	

}

export default Timer;

