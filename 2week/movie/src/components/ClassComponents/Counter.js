import React from 'react';
import Button from '@mui/material/Button';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {counter: 20}
    }
    interval = null;
    startCountDown(){
        clearInterval(this.interval);
       this.interval = setInterval(()=>{
        console.log(this.state.counter)

            if(this.state.counter>0){
                this.setState({counter: this.state.counter-1});
            }else{
                clearInterval(this.interval)
            }
        },1000)
    }
    increaseCounter(){
        clearInterval(this.interval);
        this.setState({counter: this.state.counter+1});
    }
    decreaseCounter(){
        clearInterval(this.interval);
        this.setState({counter: this.state.counter-1});
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render() {
      return (
        <>
            <div>{this.state.counter}</div>
            <Button onClick={() => this.increaseCounter()}> Increase </Button>
            <Button onClick={() => this.decreaseCounter()}> Decrease </Button>
            <Button onClick={() => this.startCountDown()}> Auto Decrease </Button>
        </>

      );
    }
}

export default Counter;