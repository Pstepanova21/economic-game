import React from "react";
import { Link } from "react-router-dom";

const HistoryStocks = ({ team_name, team_id, stock_operation }) => {
  return (
    <div>
      <head>
        <title>Stock Operation History</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/static/image/icon/itc.ico"
        />
      </head>
      <h1>Stock Operation History for {team_name}</h1>
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
            <Link to={`/stock?team_id=${team_id}`} className="active">
              Stocks Operations
            </Link>
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
            <th>Stock Operation Name</th>
            <th>Year</th>
            <th>Stock Amount</th>
            <th>Stock ID</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {stock_operation.map((operation) => (
            <tr key={operation.id}>
              <td>{operation.stock_operation_name}</td>
              <td>{operation.year}</td>
              <td>{operation.stock_amount}</td>
              <td>{operation.stock_id}</td>
              <td>{operation.user_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryStocks;
