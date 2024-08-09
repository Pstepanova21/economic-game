import React, { useEffect, useState } from "react";
import main1 from "../../assets/image/main/main1.jpg";
import main2 from "../../assets/image/main/main2.jpg";
import main3 from "../../assets/image/main/main3.jpg";
import main4 from "../../assets/image/main/main4.jpg";
import main5 from "../../assets/image/main/main5.jpg";
import main6 from "../../assets/image/main/main6.jpg";
import main7 from "../../assets/image/main/main7.jpg";
import main8 from "../../assets/image/main/main8.jpg";
import main9 from "../../assets/image/main/main9.jpg";
import main10 from "../../assets/image/main/main10.jpg";
import main11 from "../../assets/image/main/main11.jpg";
import main12 from "../../assets/image/main/main12.jpg";
import main13 from "../../assets/image/main/main13.jpg";
import main14 from "../../assets/image/main/main14.jpg";
import main15 from "../../assets/image/main/main15.jpg";
import main16 from "../../assets/image/main/main16.jpg";
import main17 from "../../assets/image/main/main17.jpg";
import main18 from "../../assets/image/main/main18.jpg";
import main19 from "../../assets/image/main/main19.jpg";
import main20 from "../../assets/image/main/main20.jpg";
import main21 from "../../assets/image/main/main21.jpg";
import itcImage from "../../assets/image/main/itc.png";

// Основной компонент
const HomePage = () => {
  const [images, setImages] = useState([]);

  // Массив с импортированными изображениями
  const imagesArray = [
    main1,
    main2,
    main3,
    main4,
    main5,
    main6,
    main7,
    main8,
    main9,
    main10,
    main11,
    main12,
    main13,
    main14,
    main15,
    main16,
    main17,
    main18,
    main19,
    main20,
    main21,
  ];

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
    const count = 15; // количество требуемых чисел

    const uniqueNumbers = generateUniqueRandomNumbers(count, range);

    const imgSources = uniqueNumbers.map((number) => imagesArray[number - 1]);

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
            <img
              src={itcImage}
              alt="IT-Center"
              className="itcenterimg"
              width="100%"
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

export default HomePage;
