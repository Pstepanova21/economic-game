import React, { useEffect, useState } from "react";
import itcImage from "../../assets/image/main/itc.png";

// Основной компонент
const HomePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Функция для генерации случайных чисел
    const random = (min, max) => Math.random() * (max - min) + min;

    const range = 21; // максимальное значение (1..1000000 включительно)
    const count = 15; // кол-во требуемых чисел

    let m = {};
    let a = [];
    for (let i = 0; i < count; ++i) {
      let r = Math.floor(Math.random() * (range - i));
      a.push((r in m ? m[r] : r) + 1);
      let l = range - i - 1;
      m[r] = l in m ? m[l] : l;
    }

    const imgSources = Array.from(
      { length: 15 },
      (_, index) => `static/image/main/main${a[index]}.jpg`
    );

    setImages(imgSources);
  }, []);

  return (
    <div>
      <header className="desktop-header">
        <img className="displayed" src="static/image/main/logo.svg" alt="..." />
        <h1 className="main_text">Экономическая игра 2023</h1>
        <nav>
          <a href="/">Главная</a>
          <a href="/stocks">Акции</a>
          <a href="/maps">Карта</a>
          <a href="/manual">Инструкции</a>
          <a href="/login">
            <b>Вход</b>
          </a>
        </nav>
      </header>
      <div className="gridsection">
        <h2 className="blockname">ЭИ СКВОЗЬ ГОДА</h2>
        <main className="grid">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              style={{
                "--gc": Math.floor(Math.random() * 4) + 1,
                "--gr": Math.floor(Math.random() * 4) + 1,
              }}
              className="grid"
              alt={`Grid item ${index}`}
            />
          ))}
        </main>
        <h2 className="blockname">ПОБЕДИТЕЛИ ПРОШЛЫХ ЛЕТ:</h2>
        <h2 className="winner">2022 — Style tamers — 3 476 041 плех</h2>
        <h2 className="winner">2021 — ПлешKings — 3 775 665 плех</h2>
      </div>
      <footer className="footer">
        <div className="credits">
          <a
            href="https://vk.com/it_center_reu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={itcImage} alt="IT-Center" width="100%" />
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

export default HomePage;
