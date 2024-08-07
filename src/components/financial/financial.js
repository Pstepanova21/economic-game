import React, { useState } from "react";
import logoBank from "../../assets/image/logo_bank.png";

const FinancialInspector = () => {
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
    <div className="fin_inspectr_container">
      <header className="fin_inspectr_header">
        <div className="head">
          <img src={logoBank} className="fin_inspectr_logo" alt="logo" />
          <h2 className="fin_inspectr_title">Финансовый Инспектор</h2>
        </div>
      </header>

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
        <label htmlFor="sum">Введите сумму:</label>
        <input type="text" id="sum" required />
      </div>
      <div className="form-group">
        <label htmlFor="operation">Выберите операцию:</label>
        <select id="operation">
          <option value="1">Штраф</option>
          <option value="2">Поощрение</option>
        </select>
      </div>

      <div className="fin_inspectr_container_button">
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

export default FinancialInspector;
