import React, { useState, useEffect } from "react";
import reumap from "../../assets/image/maps/reumap.png";
import itcLogo from "../../assets/image/main/itc.png";
import corpus1_floor0 from "../../assets/image/maps/corpus/1/corpus1-floor0.png";
import corpus1_floor1 from "../../assets/image/maps/corpus/1/corpus1-floor1.png";
import corpus1_floor2 from "../../assets/image/maps/corpus/1/corpus1-floor2.png";
import corpus2_floor2 from "../../assets/image/maps/corpus/2/corpus2-floor2.png";
import corpus3_floor1 from "../../assets/image/maps/corpus/3/corpus3-floor1.png";
import corpus3_floor2 from "../../assets/image/maps/corpus/3/corpus3-floor2.png";
import corpus3_floor3 from "../../assets/image/maps/corpus/3/corpus3-floor3.png";
import corpus3_floor4 from "../../assets/image/maps/corpus/3/corpus3-floor4.png";
import corpus3_floor5 from "../../assets/image/maps/corpus/3/corpus3-floor5.png";
import corpus3_floor6 from "../../assets/image/maps/corpus/3/corpus3-floor6.png";
import corpus6_floor1 from "../../assets/image/maps/corpus/6/corpus6-floor1.png";
import corpus6_floor2 from "../../assets/image/maps/corpus/6/corpus6-floor2.png";
import corpus6_floor3 from "../../assets/image/maps/corpus/6/corpus6-floor3.png";
import corpus8_floor2 from "../../assets/image/maps/corpus/8/corpus8-floor2.png";
import corpus8_floor3 from "../../assets/image/maps/corpus/8/corpus8-floor3.png";

const imagePaths = {
  "corpus1-floor0": corpus1_floor0,
  "corpus1-floor1": corpus1_floor1,
  "corpus1-floor2": corpus1_floor2,
  "corpus2-floor2": corpus2_floor2,
  "corpus3-floor1": corpus3_floor1,
  "corpus3-floor2": corpus3_floor2,
  "corpus3-floor3": corpus3_floor3,
  "corpus3-floor4": corpus3_floor4,
  "corpus3-floor5": corpus3_floor5,
  "corpus3-floor6": corpus3_floor6,
  "corpus6-floor1": corpus6_floor1,
  "corpus6-floor2": corpus6_floor2,
  "corpus6-floor3": corpus6_floor3,
  "corpus8-floor2": corpus8_floor2,
  "corpus8-floor3": corpus8_floor3,
};

const availableFloors = {
  corpus1: [0, 1, 2],
  corpus2: [2],
  corpus3: [1, 2, 3, 4, 5, 6],
  corpus6: [1, 2, 3],
  corpus8: [2, 3],
};

const mapDescriptions = {
  corpus1: {
    floor0: {
      description:
        "1.\tБизнес Инкубатор — <span class=dif2>100%</span> — 1<br>\n" +
        "2.\tНайди истину — <span class=dif2>100%</span> — 26<br>\n" +
        "3.\tЭкономическая разрядка — <span class=dif5>служба занятости</span> — 39<br>\n" +
        "4.\tСПОРТКОМ — <span class=dif2>100%</span> — 40<br>\n" +
        "5.\tМузыкальный полиглот — <span class=dif3>150%</span> — 41<br>\n" +
        "6.\tАлгоРИТМЫ — <span class=dif2>100%</span> — 62<br>\n",
      image: imagePaths["corpus1-floor0"],
    },
    floor1: {
      description:
        "1.\tПлехановский бал — <span class=dif2>100%</span> — 135<br>\n" +
        "2.\tЭрудит — <span class=dif3>150%</span> — 152<br>\n" +
        "3.\tРисуночное письмо — <span class=dif1>50%</span> — 153<br>\n" +
        "4.\tКлючи — <span class=dif4>200%</span> — 155<br>\n" +
        "5.\tОбрыв — <span class=dif4>200%</span> — 159<br>\n",
      image: imagePaths["corpus1-floor1"],
    },
    floor2: {
      description:
        "1.\tЛабиринт — <span class=dif3>150%</span> — 210<br>\n" +
        "2.\tГде логика? — <span class=dif3>150%</span> — 212<br>\n" +
        "3.\tВШЭиБ — <span class=dif1>50%</span> — 239<br>\n" +
        "4.\tLanguage Club — <span class=dif2>100%</span> — 252<br>\n",
      image: imagePaths["corpus1-floor2"],
    },
  },
  corpus2: {
    floor2: {
      description:
        "1.\tСинонимайзер — <span class=dif3>150%</span> — 245<br>\n" +
        "2.\tВШКИ — <span class=dif1>50%</span> — 246<br>\n" +
        "3.\tСоздай хит — <span class=dif3>150%</span> — 253<br>\n",
      image: imagePaths["corpus2-floor2"],
    },
  },
  corpus3: {
    floor1: {
      description:
        "1.\tПапина олимпийка — <span class='dif1'>50%</span> — 101<br>\n" +
        "2.\tМистер РЭУ — <span class='dif2'>100%</span> — 102<br>\n" +
        "3.\tH&M вернулся! — <span class='dif1'>50%</span> — 103<br>\n",
      image: imagePaths["corpus3-floor1"],
    },
    floor2: {
      description:
        "1.\tША — <span class=dif1>50%</span> — 201<br>\n" +
        '2.\t<span class="rainbow-animated">ITCenter</span> — <span class=dif2>100%</span> — 202<br>\n' +
        "3.\tГде-то я это слышал! — <span class=dif4>200%</span> — 203<br>\n" +
        "4.\tАби Клаб — <span class=dif2>100%</span> — 212<br>\n" +
        "5.\tЭти звуки мне знакомы… — <span class=dif1>50%</span> — 213<br>\n" +
        "6.\tТы уже у меня в голове — <span class=dif1>50%</span> — 214<br>\n" +
        "7.\tПроект Х — <span class=dif2>100%</span> — 215<br>\n" +
        "8.\tТО — <span class=dif2>100%</span> — 221<br>\n" +
        "9.\tИПАМ — <span class=dif1>50%</span> — 222<br>\n" +
        "10.\tВолонтерский центр РЭУ — <span class=dif2>100%</span> — 223<br>\n" +
        "11.\tВШМ — <span class=dif1>50%</span> — 225<br>\n",
      image: imagePaths["corpus3-floor2"],
    },
    floor3: {
      description:
        "1.\tСтанция ЦВРиМП — <span class=dif2>100%</span> — 306<br>\n" +
        "2.\tГраницы открыли — <span class=dif4>200%</span> — 307<br>\n" +
        "3.\tВолк с уолл стрит — <span class=dif1>50%</span> — 309<br>\n" +
        '4.\tВШ "Форсайт" — <span class=dif1>50%</span> — 311<br>\n' +
        "5.\tВШП — <span class=dif1>50%</span> — 313<br>\n" +
        '6.\tВИШ "НМиТ" — <span class=dif1>50%</span> — 315<br>\n' +
        "7.\tЦМТО — <span class=dif2>100%</span> — 317<br>\n" +
        "8.\tВШНМиИТ — <span class=dif1>50%</span> — 318<br>\n" +
        "9.\tВШФ — <span class=dif1>50%</span> — 319<br>\n" +
        "10.\tСБР — <span class=dif2>100%</span> — 320<br>\n" +
        "11.\tПрофком — <span class=dif1>50%</span> — 323<br>\n" +
        "12.\tЭКОСОФТ — <span class=dif2>100%</span> — 325<br>\n" +
        "13.\tРЭУ Times — <span class=dif2>100%</span> — 326<br>\n" +
        "14.\tЦАОС — <span class=dif2>100%</span> — 327<br>\n" +
        "15.\tИНИТ — <span class=dif2>100%</span> — 329<br>\n" +
        "16.\tПараграф — <span class=dif2>100%</span> — 330<br>\n",
      image: imagePaths["corpus3-floor3"],
    },
    floor4: {
      description:
        "1.\tИнтерклуб — <span class=dif1>50%</span> — 404<br>\n" +
        "2.\tЦРиМП — <span class=dif3>150%</span> — 405<br>\n" +
        "3.\tКнижная эйфория — <span class=dif1>50%</span> — 406<br>\n" +
        "4.\tЦМО — <span class=dif1>50%</span> — 407<br>\n" +
        "5.\tЦентр карьеры — <span class=dif1>50%</span> — 410<br>\n" +
        "6.\tСТАРТ — <span class=dif1>50%</span> — 413<br>\n",
      image: imagePaths["corpus3-floor4"],
    },
    floor5: {
      description:
        "1.\tПойми меня — <span class=dif2>100%</span> — 501<br>\n" +
        "2.\tНА ГРАНИ — <span class=dif2>100%</span> — 503<br>\n" +
        "3.\tMafia — <span class=dif2>100%</span> — 507<br>\n" +
        "4.\tФакультет права — <span class=dif2>100%</span> — 511<br>\n" +
        "5.\tДавай уже учиться — <span class=dif1>50%</span> — 514<br>\n" +
        "6.\tЦПИ — <span class=dif1>50%</span> — 515<br>\n" +
        "7.\tМежфак — <span class=dif1>50%</span> — 516<br>\n" +
        "8.\tПрофориентатор — <span class=dif1>50%</span> — 517<br>\n" +
        "9.\tИМС — <span class=dif1>50%</span> — 520<br>\n",
      image: imagePaths["corpus3-floor5"],
    },
    floor6: {
      description:
        "1.\tВолонтерский центр РЭУ — <span class=dif2>100%</span> — 603<br>\n" +
        "2.\tГлобальные партнерства — <span class=dif1>50%</span> — 604<br>\n" +
        "3.\tРЭУ Times — <span class=dif1>50%</span> — 605<br>\n" +
        "4.\tЛига РЭУ — <span class=dif2>100%</span> — 606<br>\n" +
        "5.\tЦМО — <span class=dif2>100%</span> — 607<br>\n",
      image: imagePaths["corpus3-floor6"],
    },
  },
  corpus6: {
    floor1: {
      description:
        "1.\tХимич — <span class=dif1>50%</span> — 123<br>\n" +
        "2.\tКиноман — <span class=dif2>100%</span> — 124<br>\n" +
        "3.\tСпортинвентарь — <span class=dif2>100%</span> — 126<br>\n",
      image: imagePaths["corpus6-floor1"],
    },
    floor2: {
      description:
        "1.\tРЭУшечка — <span class=dif1>50%</span> — 227<br>\n" +
        "2.\tАгентство Книги — <span class=dif2>100%</span> — 228<br>\n" +
        "3.\tВдохновение — <span class=dif2>100%</span> — 229<br>\n" +
        "4.\tЦентр тестирования — <span class=dif2>100%</span> — 230<br>\n",
      image: imagePaths["corpus6-floor2"],
    },
    floor3: {
      description:
        "1.\tСМИ — <span class=dif1>50%</span> — 329<br>\n" +
        "2.\tСПО — <span class=dif2>100%</span> — 330<br>\n" +
        "3.\tИздательство — <span class=dif1>50%</span> — 331<br>\n" +
        "4.\tШтаб волонтеров — <span class=dif2>100%</span> — 332<br>\n",
      image: imagePaths["corpus6-floor3"],
    },
  },
  corpus8: {
    floor2: {
      description:
        "1.\tВторое дыхание — <span class=dif1>50%</span> — 220<br>\n" +
        "2.\tКультура добра — <span class=dif2>100%</span> — 221<br>\n" +
        "3.\tДелопроизводство — <span class=dif1>50%</span> — 222<br>\n",
      image: imagePaths["corpus8-floor2"],
    },
    floor3: {
      description:
        "1.\tСолнечные ребята — <span class=dif1>50%</span> — 320<br>\n" +
        "2.\tБухгалтера — <span class=dif2>100%</span> — 321<br>\n" +
        "3.\tУютное место — <span class=dif2>100%</span> — 322<br>\n",
      image: imagePaths["corpus8-floor3"],
    },
  },
};

const MapsPage = () => {
  const [selectedCorpus, setSelectedCorpus] = useState("corpus1");
  const [selectedFloor, setSelectedFloor] = useState(0);
  const [description, setDescription] = useState(
    mapDescriptions["corpus1"]["floor0"].description
  );
  const [image, setImage] = useState(
    mapDescriptions["corpus1"]["floor0"].image
  );

  useEffect(() => {
    const corpusFloors = availableFloors[selectedCorpus];
    if (!corpusFloors.includes(selectedFloor)) {
      setSelectedFloor(corpusFloors[0]);
    }
    const floorData = mapDescriptions[selectedCorpus][`floor${selectedFloor}`];
    if (floorData) {
      setDescription(floorData.description);
      setImage(floorData.image);
    }
  }, [selectedCorpus, selectedFloor]);

  return (
    <div>
      <div className="full">
        <div className="settings-container">
          <form style={{ width: "100%", display: "flex", padding: "15px" }}>
            <div className="halfblock">
              <div style={{ margin: "0 5px" }}>
                <h2 className="blockname">КОРПУС:</h2>
                <select
                  id="corpus"
                  name="corpus"
                  value={selectedCorpus}
                  onChange={(e) => setSelectedCorpus(e.target.value)}
                >
                  {Object.keys(availableFloors).map((corpus) => (
                    <option key={corpus} value={corpus}>
                      {corpus.replace("corpus", "Корпус ")}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="halfblock">
              <div style={{ margin: "0 5px" }}>
                <h2 className="blockname">ЭТАЖ:</h2>
                <select
                  id="floor"
                  name="floor"
                  value={selectedFloor}
                  onChange={(e) => setSelectedFloor(parseInt(e.target.value))}
                >
                  {availableFloors[selectedCorpus].map((floor) => (
                    <option key={floor} value={floor}>
                      {floor}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="doubleblock">
          <div className="halfblock">
            <div className="container">
              <div className="map" id="map">
                <img src={image} alt="Карта" />
              </div>
            </div>
          </div>
          <div className="halfblock">
            <div className="container">
              <div className="description-container">
                <h2 className="blockname">СПИСОК СТАНЦИЙ:</h2>
                <p
                  id="map-description"
                  className="map-desc"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="settings-container">
          <div className="map">
            <img src={reumap} alt="Карта" />
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

export default MapsPage;
