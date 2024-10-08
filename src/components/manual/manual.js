import React from "react";
import itbanner1 from "../../assets/image/itbanner1.png";
import itbanner2 from "../../assets/image/itbanner2.png";
import itcImage from "../../assets/image/main/itc.png";

const ManualPage = () => {
  return (
    <div>
      <div className="full">
        <div className="banner-container">
          <div className="banner">
            <img src={itbanner1} alt="Banner 1" />
          </div>
        </div>
      </div>

      <div className="doubleblock">
        <div className="halfblock">
          <div className="container">
            <div className="description-container">
              <h2 className="blockname">FRONTEND:</h2>
              <p id="banner-description" className="banner-desc">
                <span className="rainbow-animated">
                  <a
                    href="https://vk.com/polina.stepanova1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @polina7741
                  </a>
                  <a
                    href="https://vk.com/baeli1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Betty
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="halfblock">
          <div className="container">
            <div className="description-container">
              <h2 className="blockname">BACKEND:</h2>
              <p id="banner-description" className="banner-desc">
                <span className="rainbow-animated">
                  <a
                    href="https://vk.com/max.x__x"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Max.x__x
                  </a>
                  <a
                    href="https://m.vk.com/juliamakky"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Juulka
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="end">
        <div className="banner-container">
          <div className="banner">
            <img src={itbanner2} alt="Banner 2" />
          </div>
        </div>
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

export default ManualPage;
