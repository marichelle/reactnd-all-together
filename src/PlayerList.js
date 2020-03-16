import React from 'react';
import Player from './Player';

const PlayerList = props => {
  const { players } = props;

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
              <a href="">Show Games Played</a>
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
              playCount={player.playCount}
              rowIndex={idx + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;
