import React, { useState, useEffect } from "react";
import $ from "jquery";

const Maps = ({ selected, urls }) => {
  const [selectedCorpus, setSelectedCorpus] = useState(selected);

  useEffect(() => {
    $("#corpus").change(function () {
      document.getElementById("selection-form").submit();
    });
  }, []);

  return (
    <div>
      <form id="selection-form" method="POST" action="/maps">
        <input type="hidden" name="auto_submit" value="false" />
        <label htmlFor="corpus">Выберите корпус:</label>
        <select
          id="corpus"
          name="corpus"
          value={selectedCorpus}
          onChange={(e) => setSelectedCorpus(e.target.value)}
        >
          <option value="1" selected={selectedCorpus === "1"}>
            1 корпус
          </option>
          <option value="2" selected={selectedCorpus === "2"}>
            2 корпус
          </option>
          <option value="3" selected={selectedCorpus === "3"}>
            3 корпус
          </option>
          <option value="4" selected={selectedCorpus === "4"}>
            4 корпус
          </option>
          <option value="5" selected={selectedCorpus === "5"}>
            5 корпус
          </option>
          <option value="6" selected={selectedCorpus === "6"}>
            6 корпус
          </option>
        </select>
      </form>

      {urls.map((url) => (
        <div key={url.index}>
          <p>{url.index}</p>
          <img src={require(`./path/to/static/${url.url}`)} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Maps;
