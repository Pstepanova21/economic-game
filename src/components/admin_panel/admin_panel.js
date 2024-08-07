import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ team }) => {
  return (
    <div>
      <head>
        <title>Admin Panel</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/static/image/icon/itc.ico"
        />
      </head>
      <h1>Admin Panel</h1>
      <table className="main">
        <thead>
          <tr>
            <th>Team ID</th>
            <th>Team Name</th>
            <th>Team Balance</th>
            <th>Team Credit</th>
            <th>Team Deposit</th>
          </tr>
        </thead>
        <tbody>
          {team.map((teamInfo) => (
            <tr key={teamInfo.team_id}>
              <td>{teamInfo.team_id}</td>
              <td className="team-name">
                <Link
                  className="team-name"
                  to={`/bank?team_id=${teamInfo.team_id}`}
                >
                  {teamInfo.team_name}
                </Link>
              </td>
              <td>{teamInfo.team_balance}</td>
              <td>{teamInfo.team_credit}</td>
              <td>{teamInfo.team_deposit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
