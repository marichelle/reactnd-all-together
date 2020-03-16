import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends Component {
  state = {
    players: [
      {
        firstName: 'John',
        lastName: 'Lennon',
        username: 'johnl',
        playCount: 9
      },
      {
        firstName: 'Paul',
        lastName: 'McCartney',
        username: 'paulm',
        playCount: 7
      },
      {
        firstName: 'George',
        lastName: 'Harrison',
        username: 'georgeh',
        playCount: 8
      },
      {
        firstName: 'Ringo',
        lastName: 'Starr',
        username: 'ringos',
        playCount: 2
      }
    ]
  };

  handleAddPlayer = player => {
    this.setState(prevState => ({
      players: [...prevState.players, player]
    }));
  };

  render() {
    const { players } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <AddPlayer onAddPlayer={this.handleAddPlayer} players={players} />
            </div>
            <div className="col-sm">
              <PlayerList players={players} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
