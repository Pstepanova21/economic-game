import React, { useState } from "react";

// Импортируйте изображения
import всеАкции1 from "../../assets/image/stocks/все акции 1 год.png";
import всеАкции2 from "../../assets/image/stocks/все акции 2 год.png";
import всеАкции3 from "../../assets/image/stocks/все акции 3 год.png";
import всеАкции4 from "../../assets/image/stocks/все акции 4 год.png";
import всеАкции5 from "../../assets/image/stocks/все акции 5 год.png";
import всеАкции6 from "../../assets/image/stocks/все акции 6 год.png";
import всеАкции7 from "../../assets/image/stocks/все акции 7 год.png";

import культ1 from "../../assets/image/stocks/культ 1 год.png";
import культ2 from "../../assets/image/stocks/культ 2 год.png";
import культ3 from "../../assets/image/stocks/культ 3 год.png";
import культ4 from "../../assets/image/stocks/культ 4 год.png";
import культ5 from "../../assets/image/stocks/культ 5 год.png";
import культ6 from "../../assets/image/stocks/культ 6 год.png";
import культ7 from "../../assets/image/stocks/культ 7 год.png";

import фелефатам1 from "../../assets/image/stocks/фелефатам 1 год.png";
import фелефатам2 from "../../assets/image/stocks/фелефатам 2 год.png";
import фелефатам3 from "../../assets/image/stocks/фелефатам 3 год.png";
import фелефатам4 from "../../assets/image/stocks/фелефатам 4 год.png";
import фелефатам5 from "../../assets/image/stocks/фелефатам 5 год.png";
import фелефатам6 from "../../assets/image/stocks/фелефатам 6 год.png";
import фелефатам7 from "../../assets/image/stocks/фелефатам 7 год.png";

import слоудринк1 from "../../assets/image/stocks/слоудринк 1 год.png";
import слоудринк2 from "../../assets/image/stocks/слоудринк 2 год.png";
import слоудринк3 from "../../assets/image/stocks/слоудринк 3 год.png";
import слоудринк4 from "../../assets/image/stocks/слоудринк 4 год.png";
import слоудринк5 from "../../assets/image/stocks/слоудринк 5 год.png";
import слоудринк6 from "../../assets/image/stocks/слоудринк 6 год.png";
import слоудринк7 from "../../assets/image/stocks/слоудринк 7 год.png";

import душитело1 from "../../assets/image/stocks/душитело 1 год.png";
import душитело2 from "../../assets/image/stocks/душитело 2 год.png";
import душитело3 from "../../assets/image/stocks/душитело 3 год.png";
import душитело4 from "../../assets/image/stocks/душитело 4 год.png";
import душитело5 from "../../assets/image/stocks/душитело 5 год.png";
import душитело6 from "../../assets/image/stocks/душитело 6 год.png";
import душитело7 from "../../assets/image/stocks/душитело 7 год.png";

import kftm1 from "../../assets/image/stocks/kftm 1 год.png";
import kftm2 from "../../assets/image/stocks/kftm 2 год.png";
import kftm3 from "../../assets/image/stocks/kftm 3 год.png";
import kftm4 from "../../assets/image/stocks/kftm 4 год.png";
import kftm5 from "../../assets/image/stocks/kftm 5 год.png";
import kftm6 from "../../assets/image/stocks/kftm 6 год.png";
import kftm7 from "../../assets/image/stocks/kftm 7 год.png";

import stocksBanner from "../../assets/image/stocksbanner.png";
import itcLogo from "../../assets/image/icon/itc.png";

// Функция для получения нужного изображения в зависимости от года
const getStockImage = (year, stockType) => {
  const stockImages = {
    all: [
      всеАкции1,
      всеАкции2,
      всеАкции3,
      всеАкции4,
      всеАкции5,
      всеАкции6,
      всеАкции7,
    ],
    культ: [культ1, культ2, культ3, культ4, культ5, культ6, культ7],
    фелефатам: [
      фелефатам1,
      фелефатам2,
      фелефатам3,
      фелефатам4,
      фелефатам5,
      фелефатам6,
      фелефатам7,
    ],
    слоудринк: [
      слоудринк1,
      слоудринк2,
      слоудринк3,
      слоудринк4,
      слоудринк5,
      слоудринк6,
      слоудринк7,
    ],
    душитело: [
      душитело1,
      душитело2,
      душитело3,
      душитело4,
      душитело5,
      душитело6,
      душитело7,
    ],
    kftm: [kftm1, kftm2, kftm3, kftm4, kftm5, kftm6, kftm7],
  };

  return stockImages[stockType][year - 1] || stockImages[stockType][0];
};

const StockSection = ({ year, title, description, stockType }) => (
  <div className="doubleblock">
    <div className="halfblock">
      <div className="container">
        <div className="stocks" id="stocks">
          <img src={getStockImage(year, stockType)} alt={title} />
        </div>
      </div>
    </div>
    <div className="halfblock">
      <div className="container">
        <div className="description-container">
          <h2 className="blockname">Последние новости:</h2>
          <p id="stocks-description" className="stocks-desc">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const StocksPage = () => {
  // Состояние для года
  const [year, setYear] = useState(1);

  // Обработчик изменения года
  const handleYearChange = (event) => {
    setYear(Number(event.target.value));
  };

  return (
    <div>
      <div className="full">
        <div className="settings-container">
          <form style={{ width: "100%", padding: "15px" }}>
            <div className="halfblock">
              <h2 className="blockname">ВЫБЕРИТЕ ГОД:</h2>
              <select id="year" value={year} onChange={handleYearChange}>
                <option value={1}>Год 1</option>
                <option value={2}>Год 2</option>
                <option value={3}>Год 3</option>
                <option value={4}>Год 4</option>
                <option value={5}>Год 5</option>
                <option value={6}>Год 6</option>
                <option value={7}>Год 7</option>
              </select>
            </div>
          </form>
        </div>
        <div className="doubleblock">
          <div className="halfblock">
            <div className="container">
              <div className="stocks" id="stocks">
                <img src={getStockImage(year, "all")} alt="все акции" />
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
          <img src={stocksBanner} alt="Banner" />
        </div>
      </div>

      <StockSection
        year={year}
        title="КУЛЬТ"
        description={
          year === 1
            ? "Компания «КУЛЬТ» запустила новый проект по строительству жилого комплекса в Подмосковье. Проект успешно стартовал и привлек внимание инвесторов."
            : year === 2
            ? "В связи с экономическим спадом, компания «КУЛЬТ» приостановила некоторые строительные проекты и оптимизирует свои затраты."
            : year === 3
            ? "Компания «КУЛЬТ» завершила строительство нового жилого комплекса в Санкт-Петербурге, что укрепило её позиции на рынке недвижимости."
            : year === 4
            ? "В условиях экономической нестабильности, компания «КУЛЬТ» начинает проводить активную работу по оптимизации затрат."
            : year === 5
            ? "Компания «КУЛЬТ» успешно завершила проект по строительству нового жилого комплекса в Калуге. Проект вызвал положительные отзывы у клиентов и инвесторов, что укрепило репутацию компании на рынке."
            : year === 6
            ? "На фоне восстановления экономики и увеличения спроса на жилье, компания «КУЛЬТ» запускает новый проект строительства жилого комплекса в центре города. Ожидается рост прибыли компании в ближайшем будущем."
            : year === 7
            ? "Компания «КУЛЬТ» запланировала строительство нового жилого района в Новой Москве, в котором будут представлены современные квартиры и объекты инфраструктуры."
            : ""
        }
        stockType="культ"
      />

      <StockSection
        year={year}
        title="FelleFatam"
        description={
          year === 1
            ? "Компания FelleFatam запустила новую линию косметики, получившую положительные отзывы на рынке. Инновационные формулы и качественные ингредиенты обеспечивают высокий спрос на продукцию."
            : year === 2
            ? "Из-за экономического кризиса спрос на косметические товары FelleFatam снизился. Компания работает над оптимизацией своих затрат и усилением маркетинговых кампаний."
            : year === 3
            ? "FelleFatam заключила стратегическое партнерство с ведущими мировыми розничными сетями. Это позволит расширить географию продаж и укрепить позиции компании на международном рынке."
            : year === 4
            ? "Компания сталкивается с проблемами в цепочке поставок, что приводит к задержкам в производстве и увеличению цен на продукцию. Руководство работает над решением этих проблем."
            : year === 5
            ? "FelleFatam выпустила новую серию косметических средств, которая получила высокие оценки от критиков и потребителей. Ожидается рост продаж и улучшение финансовых показателей."
            : year === 6
            ? "Компания планирует расширение ассортимента и выход на новые рынки. Ожидается увеличение прибыли и укрепление позиций бренда."
            : year === 7
            ? "FelleFatam запустила уникальную линию экологически чистой косметики, что привлекло внимание экологически осознанных потребителей и повысило интерес к продукции."
            : ""
        }
        stockType="фелефатам"
      />

      <StockSection
        year={year}
        title="SlowDrink"
        description={
          year === 1
            ? "Сеть ресторанов SlowDrink начала активно расширять свои филиалы. Новый формат ресторанов получил положительные отзывы и стал популярным среди клиентов."
            : year === 2
            ? "Из-за экономического кризиса сеть ресторанов SlowDrink сталкивается с уменьшением числа клиентов и падением доходов. Компания работает над улучшением качества сервиса и продуктов."
            : year === 3
            ? "SlowDrink заключила соглашение о франшизе, что позволит открыть новые рестораны в других регионах и странах. Ожидается рост сети и улучшение финансовых показателей."
            : year === 4
            ? "Компания сталкивается с проблемами в управлении запасами и логистики, что приводит к задержкам в обслуживании клиентов. Руководство активно работает над улучшением этих процессов."
            : year === 5
            ? "Сеть ресторанов SlowDrink запустила новый концепт ресторанов, ориентированных на здоровое питание. Новый формат получил положительные отзывы и привлек новых клиентов."
            : year === 6
            ? "SlowDrink планирует открыть новые филиалы в крупных городах страны. Ожидается увеличение числа клиентов и рост прибыли компании."
            : year === 7
            ? "Компания запускает программу лояльности для постоянных клиентов, что должно способствовать увеличению числа посетителей и укреплению бренда."
            : ""
        }
        stockType="слоудринк"
      />

      <StockSection
        year={year}
        title="Душитело"
        description={
          year === 1
            ? "Компания Душитело запускает новую линию экологически чистых продуктов для дома, что вызвало интерес у покупателей и обеспечило высокий спрос на продукцию."
            : year === 2
            ? "Из-за экономических трудностей на рынке компания Душитело сталкивается с проблемами в производстве и сбыте своей продукции. Ожидается внедрение новых стратегий для улучшения ситуации."
            : year === 3
            ? "Душитело начала сотрудничество с крупными сетями супермаркетов, что позволит расширить географию продаж и увеличить объемы реализации продукции."
            : year === 4
            ? "В результате повышения цен на сырье, компания Душитело сталкивается с увеличением затрат на производство. Руководство компании работает над оптимизацией затрат."
            : year === 5
            ? "Компания Душитело запустила рекламную кампанию, направленную на продвижение новой продукции. Ожидается увеличение спроса и рост продаж."
            : year === 6
            ? "Душитело планирует расширение ассортимента и внедрение новых продуктов на рынок. Ожидается рост интереса со стороны потребителей и повышение финансовых показателей."
            : year === 7
            ? "Компания запускает стратегическую программу по повышению экологичности своей продукции и упаковки, что должно привлечь экологически осознанных потребителей."
            : ""
        }
        stockType="душитело"
      />

      <StockSection
        year={year}
        title="KFTM"
        description={
          year === 1
            ? "KFTM запускает новый сервис, который предоставляет удобные и доступные финансовые решения для малого бизнеса. Новый продукт получил положительные отзывы от пользователей."
            : year === 2
            ? "Компания KFTM сталкивается с трудностями из-за экономического спада, что ведет к снижению спроса на её услуги. Работают над адаптацией и улучшением сервиса."
            : year === 3
            ? "KFTM расширяет свои услуги, предлагая новые финансовые инструменты и решения. Ожидается, что это поможет привлечь новых клиентов и увеличить прибыль."
            : year === 4
            ? "В связи с изменениями в законодательстве, компания KFTM сталкивается с необходимостью адаптации своих продуктов и услуг. Работает над приведением в соответствие с новыми требованиями."
            : year === 5
            ? "Компания KFTM улучшает свою платформу, добавляя новые функции и инструменты. Ожидается повышение пользовательской удовлетворенности и рост числа клиентов."
            : year === 6
            ? "KFTM планирует выход на новые рынки и расширение своей клиентской базы. Ожидается увеличение доходов и укрепление позиций компании на финансовом рынке."
            : year === 7
            ? "Компания запускает инициативу по повышению финансовой грамотности среди малого бизнеса, что должно укрепить её репутацию и привлечь больше клиентов."
            : ""
        }
        stockType="kftm"
      />
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

export default StocksPage;
