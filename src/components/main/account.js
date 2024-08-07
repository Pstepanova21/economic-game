import React from "react";
import profileBanner1 from "../../assets/image/itbanner1.png";
import profileBanner from "../../assets/image/account/profilebanner.png";
import itcLogo from "../../assets/image/main/itc.png";

const AccountPage = ({
  name,
  number,
  balance,
  sumCredit,
  sumDeposit,
  stocks,
}) => {
  return (
    <div className="account-page">
      <main>
        <div className="full">
          <div className="banner-container">
            <div className="banner">
              <img src={profileBanner1} alt="Profile Banner 1" />
            </div>
          </div>
        </div>

        <div className="doubleblock">
          <div className="halfblock">
            <div className="container">
              <div className="description-container">
                <h2 className="blockname">Информация:</h2>
                <p id="banner-description" className="banner-desc">
                  Название команды:{" "}
                  <span className="rainbow-animated">{name}</span>
                  <br />
                  Номер команды: {number} <br />
                  Баланс: {balance} плех <br />
                  Сумма задолженности: {sumCredit} плех <br />
                  Депозитный счет: {sumDeposit} плех <br />
                </p>
              </div>
            </div>
          </div>

          <div className="halfblock">
            <div className="container">
              <div className="description-container">
                <h2 className="blockname">Акции:</h2>
                <p id="banner-description2" className="banner-desc">
                  {stocks.map((stock, index) => (
                    <React.Fragment key={index}>
                      {stock.stock_name}: {stock.amount} шт. {stock.sum} пл.
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="end">
          <div className="banner-container">
            <div className="banner">
              <img src={profileBanner} alt="Profile Banner" />
            </div>
          </div>
        </div>
      </main>

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

export default AccountPage;
