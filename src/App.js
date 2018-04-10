import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron,Button } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0,
      show: true
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }
  increase(event) {
    this.setState({ clicks: this.state.clicks + 1}); 
  }
  decrease(event) {
    this.setState({ clicks: this.state.clicks - 1});
  }
  toggleClick(event) {
    this.setState({ show: !this.state.show});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <Jumbotron fluid >
          <div class="container">
            <h1>Counter</h1>
          </div>
          <div class="container">
          <Button color="primary" onClick={this.increase}>Increase</Button>
          <Button color="danger" onClick={this.decrease}>Decrease</Button>
          <Button class="active" onClick={this.toggleClick}>
            { this.state.show ? 'Hide number' : 'Show number' }
          </Button>
          { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
