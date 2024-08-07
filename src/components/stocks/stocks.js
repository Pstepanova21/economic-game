import React, { useEffect, useState } from "react";

const fetchQuotes = async () => {
  // Вставьте сюда логику для получения данных, например, вызов API
  // Здесь используется заглушка
  return [
    { image: "/static/images/quote1.png" },
    { image: "/static/images/quote2.png" },
  ];
};

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const loadQuotes = async () => {
      const data = await fetchQuotes();
      setQuotes(data);
    };

    loadQuotes();
  }, []);

  return (
    <div>
      {quotes.map((quote, index) => (
        <img key={index} src={quote.image} alt={`Quote ${index}`} />
      ))}
    </div>
  );
};

export default QuotesPage;
