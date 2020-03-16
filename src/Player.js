import React from 'react';

const Player = props => {
  const { firstName, lastName, username, playCount, rowIndex } = props;

  return (
    <tr>
      <th scope="row">{rowIndex}</th>
      <td>
        {firstName} {lastName}
      </td>
      <td>@{username}</td>
      <td>{playCount}</td>
    </tr>
  );
};

export default Player;
