import React, { useState, useEffect } from "react";
import logo from "../../assets/image/icon/itc.png"; // Измените путь к вашему изображению

const AdminPanel = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Получите данные команд из вашего API
    fetch("/api/teams/") // Измените URL на ваш API endpoint
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) =>
        console.error("Ошибка при получении данных команд:", error)
      );
  }, []);

  return (
    <div>
      <img src={logo} alt="Logo" />
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
          {teams.map((team) => (
            <tr key={team.team_id}>
              <td>{team.team_id}</td>
              <td className="team-name">
                <a className="team-name" href={`/bank?team_id=${team.team_id}`}>
                  {team.team_name}
                </a>
              </td>
              <td>{team.team_balance}</td>
              <td>{team.team_credit}</td>
              <td>{team.team_deposit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
