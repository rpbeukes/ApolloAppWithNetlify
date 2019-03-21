import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LambdaDemo extends Component {
  
  public state: { loading: boolean, msg?: string | null };

  constructor(props: any) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = (api: string) => (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch('/.netlify/functions/' + api)
      .then(response => response.json())
      .then(jsonData => this.setState({ loading: false, msg: jsonData.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        <button onClick={this.handleClick('hello')}>
          {loading ? 'Loading...' : 'Call Lambda'}
        </button>
        <button onClick={this.handleClick('async-chuck-norris')}>
          {loading ? 'Loading...' : 'Call Async Lambda'}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    );
  }
}

export default App;