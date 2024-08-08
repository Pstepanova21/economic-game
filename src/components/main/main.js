import React, { useEffect, useState } from "react";
import itcImage from "../../assets/image/main/itc.png";

// Основной компонент
const HomePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Функция для генерации уникальных случайных чисел
    const generateUniqueRandomNumbers = (count, max) => {
      const numbers = new Set();
      while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * max) + 1);
      }
      return Array.from(numbers);
    };

    const range = 21; // максимальное значение (1..21 включительно)
    const count = 15; // кол-во требуемых чисел

    const uniqueNumbers = generateUniqueRandomNumbers(count, range);

    const imgSources = uniqueNumbers.map(
      (number) => `../../assets/image/main/main${number}.jpg`
    );

    setImages(imgSources);
  }, []);

  return (
    <div>
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
