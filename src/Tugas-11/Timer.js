import React, {Component} from 'react';

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      countdown: props.countdown
    }
  }

  componentDidMount(){
    if (this.props.countdown !== undefined){
      this.setState({countdown: this.props.countdown})
    }
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }


  tick() {
    this.setState({
      countdown: this.state.countdown - 1 
    });
  }


  componentDidUpdate() {
    if (this.state.countdown === 0) {
        this.render = () => null;
    }
  }

  render(){
    return(
      <div style={{display: 'flex', textAlign: 'center'}}>
        <h1 style={{margin: '2% auto'}}>sekarang jam: {
            new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })
        }
        </h1>
          <h1 style={{margin: '2% auto'}}>
              hitung mundur: {this.state.countdown}
          </h1>
      </div>
    )
  }
}

export default Timer