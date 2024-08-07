import React, { useState } from "react";
import logoBank from "../../assets/image/logo_bank.png";
const GameStation = ({ name, rate }) => {
  const [dataInput, setDataInput] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendRequest = () => {
    fetch(`http://127.0.0.1:8000/getdata?user_id=${dataInput}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error);
          setResponseData(null);
        } else {
          setErrorMessage("");
          setResponseData(data);
        }
      })
      .catch((error) => {
        console.error("Ошибка при парсинге JSON:", error);
        setErrorMessage("Ошибка при запросе данных");
      });
  };

  const showConfirmation = () => setPopupVisible(true);

  const confirmAction = (isConfirmed) => {
    if (isConfirmed) {
      // Выполнить подтвержденное действие здесь
    }
    setPopupVisible(false);
  };

  return (
    <div className="gamestation_container">
      <header className="gamestation_header">
        <div className="head">
          <img src={logoBank} className="gamestation_logo" alt="logo" />
          <h1 className="gamestation_title">Игровые станции</h1>
        </div>
      </header>

      <h2 className="gamestation_subtitle">
        Станция "{name}" {rate}%
      </h2>

      <div className="form-group">
        <label htmlFor="dataInput">Введите номер команды:</label>
        <input
          type="text"
          id="dataInput"
          value={dataInput}
          onChange={(e) => setDataInput(e.target.value)}
          required
        />
      </div>
      <button className="request_button" type="button" onClick={sendRequest}>
        Отправить запрос
      </button>

      {errorMessage && (
        <div id="error_message">
          <p>{errorMessage}</p>
        </div>
      )}
      {responseData && (
        <>
          <div id="name">
            <p>Название команды: {responseData.name_team}</p>
          </div>
          <div id="balance">
            <p>Баланс: {responseData.balance_team} плех</p>
          </div>
        </>
      )}

      <div className="form-group">
        <label htmlFor="amount">Ставка:</label>
        <input type="text" id="amount" required />
      </div>
      <div className="form-group">
        <label htmlFor="action">Итог:</label>
        <select id="action">
          <option value="1">Победа</option>
          <option value="2">Проигрыш</option>
        </select>
      </div>

      <div className="gamestation_container_button">
        <button
          className="done_button"
          onClick={(e) => {
            e.preventDefault();
            showConfirmation();
          }}
        >
          Завершить
        </button>
      </div>

      {popupVisible && (
        <div id="popup" className="popup">
          <div className="popup-content">
            <p>Вы уверены, что хотите продолжить?</p>
            <button
              id="yes_button"
              type="button"
              onClick={() => confirmAction(true)}
            >
              Да
            </button>
            <button
              id="no_button"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                confirmAction(false);
              }}
            >
              Нет
            </button>
          </div>
        </div>
      )}

      <div className="year">Год {new Date().getFullYear()}</div>
    </div>
  );
};

export default GameStation;
