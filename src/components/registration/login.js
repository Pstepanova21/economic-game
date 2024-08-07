import React, { useState } from "react";
import itcIcon from "../../assets/image/icon/itc.png";
import itcLogo from "../../assets/image/main/itc.png";

const Authorization = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username !== "correctUsername" || password !== "correctPassword") {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div>
      <header>
        <img src={itcIcon} alt="ITC Icon" />
      </header>
      <div className="auth-container">
        <form onSubmit={handleSubmit} className="transparent">
          <div className="l_form-inner">
            <h2 className="blockname">Логин:</h2>
            <input
              type="text"
              className="textinput"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="p_form-inner">
            <h2 className="blockname">Пароль:</h2>
            <input
              type="password"
              className="textinput"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="gradient-border">
            <button className="auth-button" type="submit">
              Войти
            </button>
          </div>
          {error && (
            <p
              id="attention"
              style={{
                opacity: 1,
                color: "#000",
                fontFamily: "system-ui",
                fontSize: "22px",
                fontWeight: 300,
                textAlign: "center",
              }}
            >
              Введены неверные данные
            </p>
          )}
        </form>
      </div>

      <footer className="footer">
        <div className="credits">
          <a
            href="https://vk.com/it_center_reu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={itcLogo}
              alt="IT-Center"
              className="itclogo"
              style={{ width: "100%" }}
            />
          </a>
        </div>
        <h2 className="foot">
          ITC СНОВА СДЕЛАЛ КРАСИВО ITC СНОВА СДЕЛАЛ КРАСИВО ITC СНОВА СДЕЛАЛ
          КРАСИВО ITC СНОВА СДЕЛАЛ КРАСИВО ITC СНОВА СДЕЛАЛ КРАСИВО ITC СНОВА
          СДЕЛАЛ КРАСИВО ITC СНОВА СДЕЛАЛ КРАСИВО ITC СНОВА СДЕЛАЛ КРАСИВО ITC
          СНОВА СДЕЛАЛ КРАСИВО
        </h2>
      </footer>
    </div>
  );
};

export default Authorization;
