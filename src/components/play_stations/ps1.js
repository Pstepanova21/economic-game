import React, { useState } from "react";
import PropTypes from "prop-types";

const Station1 = ({ number, balance }) => {
  const [teamNumber, setTeamNumber] = useState("");

  const handleTeamNumberChange = (event) => {
    setTeamNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Вывести данные\nНомер команды: ${teamNumber}\nБаланс: ${balance}`);
  };

  return (
    <div>
      <h1>Станция</h1>
      <input
        type="text"
        placeholder="Номер команды"
        value={teamNumber}
        onChange={handleTeamNumberChange}
      />
      <br />
      <button className="btn btn-success" type="button" onClick={handleSubmit}>
        Вывести данные
      </button>
      <br />
      <p>Номер команды: {number}</p>
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

Station1.propTypes = {
  number: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Station1;
