import React, { useState, useEffect } from "react";
import reumap from "../../assets/image/maps/reumap.png";
import itcLogo from "../../assets/image/main/itc.png";

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
      image: "static/image/maps/corpus/1/corpus1-floor0.png",
    },
    floor1: {
      description:
        "1.\tПлехановский бал — <span class=dif2>100%</span> — 135<br>\n" +
        "2.\tЭрудит — <span class=dif3>150%</span> — 152<br>\n" +
        "3.\tРисуночное письмо — <span class=dif1>50%</span> — 153<br>\n" +
        "4.\tКлючи — <span class=dif4>200%</span> — 155<br>\n" +
        "5.\tОбрыв — <span class=dif4>200%</span> — 159<br>\n",
      image: "static/image/maps/corpus/1/corpus1-floor1.png",
    },
    floor2: {
      description:
        "1.\tЛабиринт — <span class=dif3>150%</span> — 210<br>\n" +
        "2.\tГде логика? — <span class=dif3>150%</span> — 212<br>\n" +
        "3.\tВШЭиБ — <span class=dif1>50%</span> — 239<br>\n" +
        "4.\tLanguage Club — <span class=dif2>100%</span> — 252<br>\n",
      image: "static/image/maps/corpus/1/corpus1-floor2.png",
    },
  },
  corpus2: {
    floor2: {
      description:
        "1.\tСинонимайзер — <span class=dif3>150%</span> — 245<br>\n" +
        "2.\tВШКИ — <span class=dif1>50%</span> — 246<br>\n" +
        "3.\tСоздай хит — <span class=dif3>150%</span> — 253<br>\n",
      image: "static/image/maps/corpus/2/corpus2-floor2.png",
    },
  },
  corpus3: {
    floor1: {
      description:
        "1.\tПапина олимпийка — <span class='dif1'>50%</span> — 101<br>\n" +
        "2.\tМистер РЭУ — <span class='dif2'>100%</span> — 102<br>\n" +
        "3.\tH&M вернулся! — <span class='dif1'>50%</span> — 103<br>\n",
      image: "static/image/maps/corpus/3/corpus3-floor1.png",
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
      image: "static/image/maps/corpus/3/corpus3-floor2.png",
    },
    floor3: {
      description:
        "1.\tСтанция ЦВРиМП — <span class=dif2>100%</span> — 306<br>\n" +
        "2.\tГраницы открыли — <span class=dif4>200%</span> — 307<br>\n" +
        "3.\tВолк с уолл стрит — <span class=dif1>50%</span> — 309<br>\n" +
        '4.\tВШ "Форсайт" — <span class=dif1>50%</span> — 311<br>\n' +
        "5.\tВШП — <span class=dif1>50%</span> — 313<br>\n" +
        '6.\tВИШ "НМиТ" — <span class=dif1>50%</span> — 315<br>\n' +
        "7.\tНазад в прошлое — <span class=dif1>50%</span> — 317<br>\n" +
        "8.\tМамин буквоед — <span class=dif2>100%</span> — 321<br>\n" +
        "9.\tBUDDY SYSTEM — <span class=dif2>100%</span> — 323<br>\n" +
        "10.\tДолг платежом красен — <span class=dif2>100%</span> — 325<br>\n" +
        "11.\tМузыкальный синонимайзер — <span class=dif1>50%</span> — 327<br>\n" +
        "12.\tКому на экономической игре жить хорошо... — <span class=dif4>200%</span> — 329<br>\n" +
        "13.\tМолодые режиссеры — <span class=dif2>100%</span> — 331<br>\n" +
        "14.\tФБ Капитаны — <span class=dif1>50%</span> — 333<br>\n" +
        "15.\tПопробуй почувствуй — <span class=dif1>50%</span> — 335<br>\n",
      image: "static/image/maps/corpus/3/corpus3-floor3.png",
    },
    floor4: {
      description:
        "1.\tКлючевое слово — <span class=dif1>50%</span> — 405<br>\n" +
        "2.\tКлуб болельщиков — <span class=dif2>100%</span> — 407<br>\n" +
        "3.\tШВ — <span class=dif2>100%</span> — 409<br>\n" +
        "4.\tГромкий вопрос — <span class=dif3>150%</span> — 410<br>\n" +
        "5.\tКМК — <span class=dif2>100%</span> — 411<br>\n" +
        "6.\tS class — <span class=dif4>200%</span> — 415<br>\n" +
        "7.\tСоциальный комитет — <span class=dif2>100%</span> — 429<br>\n" +
        "8.\tПомоги понять — <span class=dif1>50%</span> — 433<br>\n" +
        "9.\tМемология 2.0 — <span class=dif4>200%</span> — 435<br>\n" +
        "10.\tМинное поле — <span class=dif4>200%</span> — 437<br>\n" +
        "11.\tСила в правде — <span class=dif1>50%</span> — 447<br>\n" +
        "12.\tPlekhanov Case Club — <span class=dif2>100%</span> — 449<br>\n" +
        "13.\tОтгадай, если сможешь — <span class=dif1>50%</span> — 451<br>\n" +
        "14.\tПодъем! — <span class=dif1>50%</span> — 453<br>\n" +
        "15.\tДавайте рисовать — <span class=dif1>50%</span> — 428<br>\n" +
        "16.\tFFM — <span class=dif2>100%</span> — 431<br>\n",
      image: "static/image/maps/corpus/3/corpus3-floor4.png",
    },
    floor5: {
      description:
        "1.\tStudent Show — <span class=dif2>100%</span> — 506<br>\n" +
        "2.\tКто здесь? — <span class=dif1>50%</span> — 501<br>\n",
      image: "static/image/maps/corpus/3/corpus3-floor5.png",
    },
    floor6: {
      description:
        "1.\tВШКМиС — <span class=dif1>50%</span> — 605<br>\n" +
        "2.\tБогатым быть не запретишь — <span class=dif1>50%</span> — 607<br>\n" +
        "3.\tВШФ — <span class=dif1>50%</span> — 609<br>\n" +
        "4.\tСекретарская академия — <span class=dif2>100%</span> — 611<br>\n" +
        "5.\t2 правды 1 ложь — <span class=dif2>100%</span> — 623<br>\n" +
        "6.\tВалютный банк — <span class=dif2>100%</span> — 625<br>\n" +
        "7.\tВШСГН — <span class=dif1>50%</span> — 633<br>\n" +
        "8.\tМисс Плехановский университет — <span class=dif2>100%</span> — 635<br>\n" +
        "9.\tЦентр гражданско-патриотического воспитания — <span class=dif2>100%</span> — 637<br>\n" +
        "10.\tОбщежития — <span class=dif2>100%</span> — 616<br>\n",
      image: "static/image/maps/corpus/3/corpus3-floor6.png",
    },
  },
  corpus6: {
    floor1: {
      description:
        "1.\tСто к одному — <span class='dif2'>100%</span> — 132 <br>",
      image: "static/image/maps/corpus/6/corpus6-floor1.png",
    },
    floor2: {
      description:
        "1.\tКто я? — <span class=dif1>50%</span> — 229<br>\n" +
        "2.\tМеломан — <span class=dif5>служба занятости</span>  — 231<br>\n" +
        "3.\tВечеринка — <span class=dif1>50%</span> — 232<br>\n" +
        "4.\tКПС — <span class=dif2>100%</span> — 240<br>\n" +
        "5.\tЧуткость слуха — <span class=dif4>200%</span> — 260<br>\n" +
        "6.\tКВН — <span class=dif2>100%</span> — 261<br>\n" +
        "7.\tВолонтерский центр РЭУ — <span class=dif2>100%</span> — 265<br>\n" +
        "8.\tУгадай фильм — <span class=dif3>150%</span> — 266<br>\n" +
        "9.\tСНО — <span class=dif2>100%</span>— 233<br>\n",
      image: "static/image/maps/corpus/6/corpus6-floor2.png",
    },
    floor3: {
      description:
        "1.\tГород со странностями — <span class=dif3>150%</span> — 349<br>\n" +
        "2.\tТвой ход — <span class=dif2>100%</span> — 324<br>\n" +
        "3.\tПлехановский клуб знатоков — <span class=dif2>100%</span> — 326<br>\n" +
        "4.\tREU Data Science Club — <span class=dif2>100%</span> — 357<br>\n" +
        "5.\tУдержи если сможешь — <span class=dif2>100%</span> — 363<br>\n",
      image: "static/image/maps/corpus/6/corpus6-floor3.png",
    },
  },
  corpus8: {
    floor2: {
      description:
        "1.\tМемология — <span class=dif1>50%</span> — 205<br>\n" +
        "2.\tСТО — <span class=dif2>100%</span> — 206<br>\n",
      image: "static/image/maps/corpus/8/corpus8-floor2.png",
    },
    floor3: {
      description:
        "1.\tЦВСК — <span class=dif2>100%</span> — 301<br>\n" +
        "2.\tСтуденческие парламентские клубы — <span class=dif2>100%</span> — 302<br>\n" +
        "3.\tПШБ «Интеграл» — <span class=dif1>50%</span> — 305<br>\n" +
        "4.\tКлуб дебатов — <span class=dif2>100%</span> — 308<br>\n" +
        "5.\tПомощь в офисе — <span class=dif5>служба занятости</span> — 311<br>\n" +
        "6.\tВокруг света — <span class=dif3>150%</span> — 312<br>\n",
      image: "static/image/maps/corpus/8/corpus8-floor3.png",
    },
  },
};

const MapsPage = () => {
  const [selectedCorpus, setSelectedCorpus] = useState("corpus3");
  const [selectedFloor, setSelectedFloor] = useState(2);
  const [description, setDescription] = useState(
    mapDescriptions["corpus3"]["floor2"].description
  );
  const [image, setImage] = useState(
    mapDescriptions["corpus3"]["floor2"].image
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
