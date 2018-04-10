import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        
        <h1>Counter</h1>
        
        <div>
          <button onClick={this.increase}>Increase</button>
          <button onClick={this.decrease}>Decrease</button>
          <button onClick={this.toggleClick}>
            { this.state.show ? 'Hide number' : 'Show number' }
          </button>
          { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
        </div>
      </div>
    );
  }
}

export default App;
