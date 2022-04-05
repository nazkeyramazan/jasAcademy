import React from 'react';
import Button from '@mui/material/Button';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {counter: 0}
    }
    increaseCounter(){
        this.setState({counter: this.state.counter+1});
    }
    decreaseCounter(){
        this.setState({counter: this.state.counter-1});
    }
    render() {
      return (
          <>
            <div>{this.state.counter}</div>
            <Button onClick={() => this.increaseCounter()}> Increase </Button>
            <Button onClick={() => this.decreaseCounter()}> Decrease </Button>
        </>

      );
    }
}

export default Counter;