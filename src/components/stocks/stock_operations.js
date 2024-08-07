import React, { useState } from "react";
import logoBank from "../../assets/image/logo_bank.png";

// Функция для получения информации о акциях
const getStocksInfo = async (id_stocks) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/getstocksinfo?stock_id=${id_stocks}`
    );
    if (!response.ok)
      throw new Error(`Ошибка запроса. Статус: ${response.status}`);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
};

// Функция для отправки запроса на сервер
const sendRequest = async (inputData) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/getdata?user_id=${inputData}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: inputData }),
      }
    );
    if (!response.ok)
      throw new Error(`Ошибка запроса. Статус: ${response.status}`);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
};

const StockOperations = () => {
  const [teamId, setTeamId] = useState("");
  const [amount, setAmount] = useState("");
  const [stocks, setStocks] = useState([]);
  const [balance, setBalance] = useState("");
  const [name, setName] = useState("");
  const [teamTitle, setTeamTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sumStocks, setSumStocks] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const handleTeamIdChange = (event) => setTeamId(event.target.value);

  const handleAmountChange = async (event) => {
    setAmount(event.target.value);
    const selectedValue = document.getElementById("stocks_select").value;
    try {
      const stocksRate = await getStocksInfo(selectedValue);
      const sum = amount ? parseInt(amount) * stocksRate.rate : 0;
      setSumStocks(`Сумма акции: ${sum}`);
    } catch (error) {
      console.error("Произошла ошибка:", error);
    }
  };

  const handleRequest = async () => {
    const response = await sendRequest(teamId);
    if (response.error) {
      setName("");
      setBalance("");
      setStocks([]);
      setErrorMessage(response.error);
    } else {
      setErrorMessage("");
      setName(`Название команды: ${response.name_team}`);
      setBalance(`Баланс: ${response.balance_team} плех`);
      setTeamTitle("В распоряжении команды:");
      setStocks(response.stocks || []);
    }
  };

  const handleConfirmAction = (isConfirmed) => {
    setPopupVisible(false);
    if (isConfirmed) {
      // Здесь можно добавить логику после подтверждения действия
    }
  };

  return (
    <div>
      <header className="fin_ranok_header">
        <div className="head">
          <img src={logoBank} className="fin_ranok_logo" alt="Логотип" />
          <h1 className="fin_ranok_title">Финансовый рынок</h1>
        </div>
      </header>
      <div className="fin_ranok_container">
        <form className="transparent" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="dataInput">Введите номер команды:</label>
            <input
              type="text"
              id="dataInput"
              name="dataInput"
              value={teamId}
              onChange={handleTeamIdChange}
              required
            />
          </div>
          <button
            id="request_button"
            className="request_button"
            type="button"
            onClick={handleRequest}
          >
            Отправить запрос
          </button>
          <div className="team_info">
            {errorMessage && (
              <div id="error_message">
                <p>{errorMessage}</p>
              </div>
            )}
            <div id="balance">{balance}</div>
            <div id="name">{name}</div>
            <div className="team_title" id="team_title">
              {teamTitle}
            </div>
            <div id="stocks">
              {stocks.map((stock, index) => (
                <p key={index}>
                  {stock.stock_name}: {stock.amount} шт. {stock.sum} пл.
                </p>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="stocks_select">Выберите акцию:</label>
            <select id="stocks_select" name="stocks_select">
              {/* Здесь можно динамически создавать элементы <option> */}
              {/* Пример:
                stocks.map(stock => (
                  <option key={stock.stock_id} value={stock.stock_id}>
                    {stock.stocks_name} | {stock.stocks_rate} плех
                  </option>
                ))
              */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="operation">Выберите операцию:</label>
            <select id="operation" name="operation">
              <option value="1">Продажа</option>
              <option value="2">Покупка</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Введите количество:</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={amount}
              onChange={handleAmountChange}
              required
            />
          </div>
          <div className="team_info" id="sum_stocks">
            {sumStocks}
          </div>
          <div className="fin_ranok_container_button">
            <button
              className="done_button"
              onClick={() => setPopupVisible(true)}
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
                  onClick={() => handleConfirmAction(true)}
                >
                  Да
                </button>
                <button
                  id="no_button"
                  type="button"
                  onClick={() => handleConfirmAction(false)}
                >
                  Нет
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default StockOperations;
