import React from "react";
import Popup from "./Popup";

export default function Panell(props) {
  const numPag = parseInt(props.formData.numPag);
  const numIdiom = parseInt(props.formData.numIdiom);

  function counter(event, i) {
    let { name } = event.target;

    props.setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: name === "numPag" ? numPag + i : numIdiom + i,
      };
    });
  }

  return (
    <div>
      <div className="container-input">
        <label>Número de páginas</label>
        <input
          className="btn-contador"
          type="button"
          value="+"
          onClick={(e) => counter(e, 1)}
          name="numPag"
        />
        <input
          className="input"
          type="text"
          name="numPag"
          id="numPag"
          value={props.formData.numPag}
          onChange={props.handleChange}
        />
        <input
          className="btn-contador"
          type="button"
          value="-"
          onClick={(e) => {
            if (props.formData.numPag > 0) return counter(e, -1);
          }}
          name="numPag"
        />
        <Popup texto="En este componente debe indicar el número de páginas que tendrá su web." />
      </div>
      <div>
        <div className="container-input">
          <label>Número de idiomas</label>
          <input
            className="btn-contador"
            type="button"
            value="+"
            onClick={(e) => counter(e, 1)}
            name="numIdiom"
          />
          <input
            className="input"
            type="text"
            name="numIdiom"
            id="numIdiom"
            value={props.formData.numIdiom}
            onChange={props.handleChange}
          />
          <input
            className="btn-contador"
            type="button"
            value="-"
            onClick={(e) => {
              if (props.formData.numIdiom > 0) return counter(e, -1);
            }}
            name="numIdiom"
          />
          <Popup texto="En este componente debe indicar el número de idiomas que tendrá su web." />
        </div>
      </div>
    </div>
  );
}
