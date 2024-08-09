import React from "react";

const Header = () => {
  return (
    <header className="desktop-header">
      <div className="container-header">
        <img
          className="displayed"
          src="https://psv4.userapi.com/c237231/u367891069/docs/d5/aac3e99c15bf/5345345345345.png?extra=tXc2_RVSoR8LBX_1htZRdFkROdgdo-ZLY2kJ1khJlpbeFutOR1AIxzjUsqHJXhx0RyfW6eso-FbXtjpIOTCXuoUrvlvpZn8-ahrq5dnfreqCLAyMl-coydtX7QH1FWX9gk57zUVIm5gujpRZ4RWSZ5oY"
          alt="logo"
        />
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
