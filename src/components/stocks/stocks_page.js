import React, { useState } from "react";

const StocksPage = () => {
  const [year, setYear] = useState(1);

  const companies = [
    {
      name: "КУЛЬТ",
      type: "Строительная компания",
      news: [
        "Строительная компания «КУЛЬТ» является одной из ведущих компаний в сфере строительства новых жилых районов. Она специализируется на создании комфортных, современных и уникальных по своей архитектуре жилых комплексов.",
        "Экономический спад в стране «Плехановка» приводит к снижению спроса на новое жилье и строительные услуги. Компания «КУЛЬТ» сталкивается с уменьшением заказов и снижением своей прибыли.",
        "Был заключен контракт между строительной компанией «КУЛЬТ» и РЭУ им. Г.В. Плеханова на строительство нового корпуса в Дубае. Компания «КУЛЬТ», расширяя свое присутствие на рынке за счет выхода на новые территории, ожидает увеличения объема продаж.",
        "Важная новость, в стране «Плехановка» произошло изменение правового регулирования в строительной отрасли. Ввели новые правила и требования в области энергоэффективности и охраны окружающей среды, что повлечет за собой дополнительные расходы для компании «КУЛЬТ». Это может отразиться на ее финансовой производительности и вызвать негативную реакцию инвесторов.",
        "Компания «КУЛЬТ» запускает новый проект по строительству энергоэффективных домов. В связи с растущим интересом к экологически чистым и энергоэффективным решениям в строительстве, проект компании «КУЛЬТ» начинает пользоваться повышенным спросом со стороны инвесторов.",
        "Благодаря внедрению новых технологий в процесс производства и контроля качества, «КУЛЬТ» предлагает более надежные и долговечные строительные материалы. Это дает дополнительное конкурентное преимущество и привлекает больше клиентов.",
        "Построили новую станцию метро «Балашиха», возле которой находится ЖК «Горенский» строительной компании «КУЛЬТ». Спрос на жилье в ЖК значительно возрос.",
      ],
      images: [
        "src/assets/image/stocks/культ 1 год.png",
        "src/assets/image/stocks/культ 2 год.png",
        "src/assets/image/stocks/культ 3 год.png",
        "src/assets/image/stocks/культ 4 год.png",
        "src/assets/image/stocks/культ 5 год.png",
        "src/assets/image/stocks/культ 6 год.png",
        "src/assets/image/stocks/культ 7 год.png",
      ],
    },
    {
      name: "FelleFatam",
      type: "Производитель косметики",
      news: [
        "Наша компания - это производитель косметики, специализирующийся на создании качественных и инновационных продуктов для ухода за кожей и волосами.",
        "Бренд «FelleFatam» заключает партнерский договор с крупной сетью магазинов Плехановки «Силвер grysha», что расширяет ее доступность на рынке и привлекает новых клиентов.",
        "Научные исследования бренда «FelleFatam» приводят к разработке уникального косметического продукта «Подорожник Antistress», который позволяет сделать революционный прорыв в отрасли.",
        "Срочные новости, бренд «FelleFatam» платит Екатерине Дробницкой и другим инфлюенсерам за написание положительных отзывов о своей косметике. Это подорвало доверие потребителей, вызвало волну негативных комментариев и сомнений в качестве продукции бренда.",
        "Сегодня днем сплыла информация, что бренд «FelleFatam» слил личные данные своих клиентов. Это вызвало возмущение клиентов и публичное осуждение бренда за несоблюдение конфиденциальности и недостаточное обеспечение безопасности данных.",
        "Сегодня днем сплыла информация, что бренд «FelleFatam» слил личные данные своих клиентов. Это вызвало возмущение клиентов и публичное осуждение бренда за несоблюдение конфиденциальности и недостаточное обеспечение безопасности данных.",
        "В стране «Плехановка» появилась новость, что бренд известной косметики «FelleFatam» тестирует косметику на животных. Этот скандал привлек внимание ВОЗЖ (Всемирное общество защиты животных), которое причинило им значительный имиджевый ущерб.",
      ],
      images: [
        "src/assets/image/stocks/фелефатам 1 год.png",
        "src/assets/image/stocks/фелефатам 2 год.png",
        "src/assets/image/stocks/фелефатам 3 год.png",
        "src/assets/image/stocks/фелефатам 4 год.png",
        "src/assets/image/stocks/фелефатам 5 год.png",
        "src/assets/image/stocks/фелефатам 6 год.png",
        "src/assets/image/stocks/фелефатам 7 год.png",
      ],
    },
    {
      name: "SlowDrink",
      type: "Сеть ресторанов",
      news: [
        "Сеть ресторанов быстрого приготовления «SlowDrink» - это сеть уютных и современных заведений, которые предлагают широкий ассортимент напитков и закусок для тех, кто ценит быстрое питание высокого качества.",
        "С появлением большого количества фудтраков и уличных кафе, выросла конкуренция для сети ресторанов «SlowDrink». Клиенты стремятся получить быстрое и доступное питание на ходу, вместо посещения стационарных ресторанов.",
        "На фоне экономического спада в стране потребители стали более осторожны в своих финансовых расходах и предпочитают экономить на посещении ресторанов. Снизился общий спрос на услуги сети «SlowDrink», что привело к ухудшению финансовых показателей.",
        "«SlowDrink» разработал новое меню, включающего в себя более здоровые и экологически чистые продукты. Это привлекает внимание аудитории, активно интересующейся здоровым питанием, и способствует повышению конкурентоспособности сети.",
        "Ресторан «SlowDrink» заключил партнерское соглашение с известной международной компанией по производству и продаже напитков. Это сотрудничество поможет улучшить качество напитков, предлагаемых в ресторанах «SlowDrink», и повысит привлекательность сети в глазах потребителей.",
        "«SlowDrink» повысил качества обслуживания и внедрил программы лояльности для постоянных клиентов и студентов. Улучшенное обслуживание и выгодные условия, предоставляемые лояльностью, делают рестораны «SlowDrink» более привлекательными для посетителей.",
        "Открылся новый ресторан «SlowDrink» в центральном районе страны «Плехановка». Появление нового заведения в популярном и оживленном месте привлекло больше клиентов.",
      ],
      images: [
        "src/assets/image/stocks/слоудринк 1 год.png",
        "src/assets/image/stocks/слоудринк 2 год.png",
        "src/assets/image/stocks/слоудринк 3 год.png",
        "src/assets/image/stocks/слоудринк 4 год.png",
        "src/assets/image/stocks/слоудринк 5 год.png",
        "src/assets/image/stocks/слоудринк 6 год.png",
        "src/assets/image/stocks/слоудринк 7 год.png",
      ],
    },
    {
      name: "душИтело",
      type: "Производитель бытовой химии",
      news: [
        "«Душитело» - компания, специализирующаяся на производстве бытовой и косметической химии. Она предлагает широкий ассортимент продукции для домашнего использования, которая помогает решать проблемы повседневной жизни.",
        "Конкуренты «Душитело» столкнулись с проблемами качества своих товаров. Компания смогла капитализировать на этой ситуации, увеличивая свою долю на рынке и привлекая новых клиентов.",
        "Страна «Плехановка» запретила производство запаха «Алоэ», которое являлось одним из основных ингредиентов новой продукции Компании «Душитело». Это вызвало необходимость изменения состава и временного прекращения производства.",
        "Компания «Душитело» подписала контракт на поставку своей продукции с крупной сетью гипермаркетов, что обеспечивает стабильный спрос на товары и увеличивает доходы компании.",
        "Продукция компании «Душитело» была признана лучшей в своей категории на национальной выставке бытовой химии. Это признание укрепляет репутацию компании и привлекает новых клиентов.",
        "«Душитело» разработала экологически чистую и биоразлагаемую упаковку для своей продукции. Этот шаг привлекает внимание экологически сознательных потребителей и повышает конкурентоспособность бренда.",
        "Ведущие СМИ обвинили компанию «душИтело» в использовании запрещенных химических веществ в своих продуктах. Это вызвало общественное недовольство и волну негатива в социальных сетях, что отрицательно сказалось на репутации компании.",
      ],
      images: [
        "src/assets/image/stocks/душитело 1 год.png",
        "src/assets/image/stocks/душитело 2 год.png",
        "src/assets/image/stocks/душитело 3 год.png",
        "src/assets/image/stocks/душитело 4 год.png",
        "src/assets/image/stocks/душитело 5 год.png",
        "src/assets/image/stocks/душитело 6 год.png",
        "src/assets/image/stocks/душитело 7 год.png",
      ],
    },
    {
      name: "KFTM",
      type: "Онлайн платформа",
      news: [
        "KFTM - это онлайн платформа, предоставляющая разнообразные услуги и возможности для пользователей в различных сферах, включая образование, бизнес и развлечения.",
        "Платформа «KFTM» запустила новую функцию «Прогресс», которая предоставляет пользователям доступ к дополнительным образовательным материалам и интерактивным курсам.",
        "Известный инфлюенсер Петр Симпсон стал официальным лицом бренда «KFTM». Его популярность и влияние помогают привлечь новых пользователей и увеличить узнаваемость платформы.",
        "На платформе «KFTM» произошел серьезный сбой в системе безопасности, что привело к утечке данных пользователей. Это вызвало обеспокоенность среди клиентов и нанесло удар по репутации компании.",
        "KFTM внедрила новую программу лояльности для пользователей, предлагая бонусы и скидки за активное использование платформы. Это стимулирует рост числа постоянных пользователей и увеличивает их лояльность.",
        "KFTM объявила о стратегическом партнерстве с ведущей компанией в области кибербезопасности. Это сотрудничество поможет усилить защиту данных пользователей и повысить доверие к платформе.",
        "KFTM организовала масштабное онлайн-событие, которое привлекло внимание миллионов пользователей. Это мероприятие укрепило позиции платформы на рынке и привлекло новых партнеров.",
      ],
      images: [
        "src/assets/image/stocks/KFTM 1 год.png",
        "src/assets/image/stocks/KFTM 2 год.png",
        "src/assets/image/stocks/KFTM 3 год.png",
        "src/assets/image/stocks/KFTM 4 год.png",
        "src/assets/image/stocks/KFTM 5 год.png",
        "src/assets/image/stocks/KFTM 6 год.png",
        "src/assets/image/stocks/KFTM 7 год.png",
      ],
    },
  ];

  return (
    <div>
      <header>
        <title>Экономическая игра 2023</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="src/assets/image/icon/itc.ico"
        />
      </header>

      <div className="full">
        <div className="doubleblock">
          <div className="halfblock">
            <div className="container">
              <div className="stocks" id="stocks">
                <img
                  src={`src/assets/image/stocks/все акции ${year} год.png`}
                  alt="все акции"
                />
              </div>
            </div>
          </div>
          <div className="halfblock">
            <div className="container">
              <div className="description-container">
                <h2 className="blockname">Акции:</h2>
                <p id="stocks-description" className="stocks-desc">
                  1. КУЛЬТ — <span className="stock1">●</span> — Строительная
                  компания
                  <br />
                  2. FelleFatam — <span className="stock2">●</span> —
                  Производитель косметики
                  <br />
                  3. SlowDrink — <span className="stock3">●</span> — Сеть
                  ресторанов
                  <br />
                  4. Душитело — <span className="stock4">●</span> —
                  Производитель бытовой химии
                  <br />
                  5. KFTM — <span className="stock5">●</span> — Онлайн платформа
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-container">
        <div className="stocks">
          <img src="src/assets/image/stocksbanner.png" alt="Карта" />
        </div>
      </div>

      {companies.map((company, index) => (
        <div className="doubleblock" key={index}>
          <div className="halfblock">
            <div className="container">
              <div className="stocks" id="stocks">
                <img src={company.images[year - 1]} alt={company.name} />
              </div>
            </div>
          </div>
          <div className="halfblock">
            <div className="container">
              <div className="description-container">
                <h2 className="blockname">{company.name}:</h2>
                <p id="stocks-description" className="stocks-desc">
                  {company.news[year - 1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <footer className="footer">
        <div className="credits">
          <a
            href="https://vk.com/it_center_reu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/image/main/itc.png"
              alt="IT-Center"
              className="itclogo"
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

      <div
        className="arrowDown"
        id="arrowDown"
        onClick={() => setYear(year < 7 ? year + 1 : 1)}
      >
        ▼
      </div>
    </div>
  );
};

export default StocksPage;
