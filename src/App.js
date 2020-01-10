import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testing: 'hellow world'
        }
    }
  render () {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload. {this.state.testing}
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
            <table>
                <tr>
                    <th>course</th>
                    <th>location</th>
                </tr>
                <tr>
                    <td>calc 2</td>
                    <td>MC room 101</td>
                </tr>
                <tr>
                    <td>cs 114</td>
                    <td>DC room 202</td>
                </tr>
                <tr>
                    <td>physics 101</td>
                    <td>PHYs room 303</td>
                </tr>
            </table>
        </div>
    );
  }
}

export default App;
