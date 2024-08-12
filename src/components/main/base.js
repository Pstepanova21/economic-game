import React from "react";
import logo from "../../assets/image/logo.png";
const Header = () => {
  return (
    <header className="desktop-header">
      <div className="container-header">
        <img className="displayed" src={logo} alt="logo" />
        <h1 className="main_header">
          Экономическая игра <span className="year_20">20</span>
          <span className="year_24">24</span>
        </h1>
      </div>
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
