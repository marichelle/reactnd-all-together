import React, { Component } from 'react';
import Player from './Player';

class PlayerList extends Component {
  state = {
    showPlayCount: true
  };

  handleClick = e => {
    e.preventDefault();

    this.setState(prevState => ({
      showPlayCount: !prevState.showPlayCount
    }));
  };

  render() {
    const { players } = this.props;
    const { showPlayCount } = this.state;

    return (
      <div>
        <h2>Player List</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Handle</th>
              <th scope="col">
                <a href="/" onClick={this.handleClick}>
                  {showPlayCount ? 'Hide' : 'Show'} Games Played
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, idx) => (
              <Player
                key={idx}
                firstName={player.firstName}
                lastName={player.lastName}
                username={player.username}
                playCount={showPlayCount ? player.playCount : '*'}
                rowIndex={idx + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PlayerList;
