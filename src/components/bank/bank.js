import React, { useState, useEffect } from "react";
import logoBank from "../../assets/image/logo_bank.png";

const Bank = () => {
  const [dataInput, setDataInput] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const yesButton = document.getElementById("yes_button");
    const noButton = document.getElementById("no_button");

    if (yesButton) {
      yesButton.addEventListener("click", () => confirmAction(true));
    }

    if (noButton) {
      noButton.addEventListener("click", (event) => {
        event.preventDefault();
        confirmAction(false);
      });
    }

    return () => {
      if (yesButton) {
        yesButton.removeEventListener("click", () => confirmAction(true));
      }

      if (noButton) {
        noButton.removeEventListener("click", (event) => {
          event.preventDefault();
          confirmAction(false);
        });
      }
    };
  }, []);

  const sendRequest = () => {
    fetch(`http://127.0.0.1:8000/getdata?user_id=${dataInput}`)
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data);
      })
      .catch((error) => console.error("Ошибка при парсинге JSON:", error));
  };

  const showConfirmation = () => setPopupVisible(true);
  const confirmAction = (isConfirmed) => setPopupVisible(false);

  return (
    <div className="bank-container">
      <header className="bank-header">
        <div className="head">
          <img src={logoBank} className="bank-logo" alt="logo" />
          <h1 className="bank-title">Банк</h1>
        </div>
      </header>
      <h2 className="bank-subtitle">
        {responseData ? responseData.name_team : "Введите данные"}
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
        <button type="button" className="request-button" onClick={sendRequest}>
          Отправить запрос
        </button>
        {responseData && responseData.error && (
          <div id="error_message">
            <p>{responseData.error}</p>
          </div>
        )}
        {responseData && !responseData.error && (
          <>
            <div id="name">
              <p>Название команды: {responseData.name_team}</p>
            </div>
            <div id="balance">
              <p>Баланс: {responseData.balance_team} плех</p>
            </div>
            <div id="bank">
              <p>Задолженность по кредиту: {responseData.bank.credit} плех</p>
              <p>Сумма депозитного счета: {responseData.bank.deposit} плех</p>
            </div>
            <div id="dark_bank">
              <p>
                Задолженность по теневому кредиту:{" "}
                {responseData.dark_bank.dark_credit} плех
              </p>
              <p>
                Сумма депозитного счета теневого банка:{" "}
                {responseData.dark_bank.dark_deposit} плех
              </p>
            </div>
          </>
        )}
      </div>
      <div className="form-group-operations">
        <div className="form-group_bank_container">
          <div className="form-group_bank_column">
            <h1>КРЕДИТ 10%</h1>
            <div className="credit">
              <label htmlFor="sum_of_credit">Введите сумму:</label>
              <input type="text" id="sum_of_credit" name="sum_of_credit" />
            </div>
            <div className="credit">
              <label htmlFor="credit_select">Выберите операцию:</label>
              <select id="credit_select" name="credit_select">
                <option value="1">Взять</option>
                <option value="2">Погасить</option>
              </select>
            </div>
          </div>
          <div className="form-group_bank_column">
            <h1>ДЕПОЗИТ 10%</h1>
            <div className="deposit">
              <label htmlFor="sum_of_deposit">Введите сумму:</label>
              <input type="text" id="sum_of_deposit" name="sum_of_deposit" />
            </div>
            <div className="deposit">
              <label htmlFor="deposit_select">Выберите операцию:</label>
              <select id="deposit_select" name="deposit_select">
                <option value="1">Открыть</option>
                <option value="2">Закрыть</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button
        className="done_button"
        onClick={(event) => {
          event.preventDefault();
          showConfirmation();
        }}
      >
        Завершить
      </button>
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
              onClick={(event) => {
                event.preventDefault();
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

export default Bank;
