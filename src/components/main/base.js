import React from "react";
import logo from "../../assets/image/logo.png";

const Header = () => {
  return (
    <header className="desktop-header">
      <img className="displayed" src={logo} alt="Logo" />
      <h1 className="main_header">Экономическая игра 2023</h1>
      <nav>
        <a href="/">Главная</a>
        <a href="/stocks">Акции</a>
        <a href="/maps">Карта</a>
        <a href="/manual">Разработчики</a>
        <a href="/login">
          <b>Вход</b>
        </a>
      </nav>
    </header>
  );
};

export default Header;
