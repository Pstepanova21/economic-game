import React, { useState } from "react";
import PropTypes from "prop-types";

const Station = ({ balance }) => {
  const [teamNumber, setTeamNumber] = useState("");
  const [teamData, setTeamData] = useState("");

  const handleTeamNumberChange = (event) => {
    setTeamNumber(event.target.value);
  };

  const displayData = () => {
    setTeamData(`Номер команды: ${teamNumber}<br>Баланс: ${balance}`);
  };

  return (
    <div>
      <h1>Станция</h1>
      <form id="dataForm">
        <input
          type="text"
          placeholder="Номер команды"
          id="teamNumber"
          value={teamNumber}
          onChange={handleTeamNumberChange}
        />
        <br />
        <button className="btn btn-success" type="button" onClick={displayData}>
          Вывести данные
        </button>
      </form>
      <br />
      <p dangerouslySetInnerHTML={{ __html: teamData }}></p>
      <p>Баланс: {balance}</p>
      <br />
      <form>
        <input type="number" placeholder="Ставка" />
        <br />
        <button type="button">Победа</button>
        <br />
        <button type="button">Поражение</button>
        <br />
      </form>
    </div>
  );
};

Station.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default Station;
