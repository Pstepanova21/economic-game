import React from "react";
import { Link } from "react-router-dom";

const HistoryInspector = ({ team_name, team_id, inspector_operation }) => {
  return (
    <div>
      <head>
        <title>Inspector Operation History</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/static/image/icon/itc.ico"
        />
      </head>
      <h1>Inspector Operation History for {team_name}</h1>
      <nav>
        <ul>
          <li>
            <Link to={`/admin?team_id=${team_id}`}>Main menu</Link>
          </li>
          <li>
            <Link to={`/bank?team_id=${team_id}`}>Bank Operations</Link>
          </li>
          <li>
            <Link to={`/game?team_id=${team_id}`}>Game Operations</Link>
          </li>
          <li>
            <Link to={`/stock?team_id=${team_id}`}>Stocks Operations</Link>
          </li>
          <li>
            <Link to={`/inspector?team_id=${team_id}`} className="active">
              Inspector Operations
            </Link>
          </li>
        </ul>
      </nav>
      <table>
        <thead>
          <tr>
            <th>Operation Name</th>
            <th>Year</th>
            <th>Sum</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {inspector_operation.map((operation) => (
            <tr key={operation.id}>
              <td>{operation.operation_name}</td>
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

export default HistoryInspector;
