import React from "react";
import { Link } from "react-router-dom";

const HistoryGame = ({ team_name, team_id, game_operation }) => {
  return (
    <div>
      <head>
        <title>Game Operations History</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/static/image/icon/itc.ico"
        />
      </head>
      <h1>Game Operations History for {team_name}</h1>
      <nav>
        <ul>
          <li>
            <Link to={`/admin?team_id=${team_id}`}>Main menu</Link>
          </li>
          <li>
            <Link to={`/bank?team_id=${team_id}`}>Bank Operations</Link>
          </li>
          <li>
            <Link to={`/game?team_id=${team_id}`} className="active">
              Game Operations
            </Link>
          </li>
          <li>
            <Link to={`/stock?team_id=${team_id}`}>Stocks Operations</Link>
          </li>
          <li>
            <Link to={`/inspector?team_id=${team_id}`}>
              Inspector Operations
            </Link>
          </li>
        </ul>
      </nav>
      <table>
        <thead>
          <tr>
            <th>Game Station Name</th>
            <th>Year</th>
            <th>Sum</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {game_operation.map((operation) => (
            <tr key={operation.id}>
              <td>{operation.game_station_name}</td>
              <td>{operation.year}</td>
              <td>{operation.sum}</td>
              <td>{operation.user_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryGame;
