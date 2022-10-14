import Panell from "../components/Panell";
import GenerarPresup from "../components/GenerarPresup";
import { StyledBtn } from "../styled";
import { Link } from "react-router-dom";
import { StylePanell } from "../styled";
import PrecioTotal from "../components/PrecioTotal";
import { StyledInicio } from "../styled";

export default function Presupuesto(props) {
  function handleChange(event) {
    const { name, value, type, checked, className } = event.target;
    props.setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]:
          type === "checkbox"
            ? checked
            : className === "input" && (value < 0 || isNaN(value))
            ? 0
            : value,
      };
    });
  }

  function totalPrice() {
    let precio =
      (props.formData.paginaWeb ? 500 : 0) +
      (props.formData.consultoriaSEO ? 300 : 0) +
      (props.formData.googleAds ? 200 : 0);
    precio += props.formData.paginaWeb
      ? props.formData.numPag * props.formData.numIdiom * 30
      : 0;

    return precio;
  }

  return (
    <div className="container-budget">
      <StyledBtn className="btn-inicio">
        <Link to="/">Volver al inicio</Link>
      </StyledBtn>
      <div id="main-presupuesto">
        <form id="form">
          <div className="container-client">
            <h3>Datos a completar:</h3>
            <div className="container-datosInput">
              <label htmlFor="nomPres"> Nombre del presupuesto </label>
              <input
                type="text"
                id="nomPres"
                value={props.formData.nomPres}
                name="nomPres"
                onChange={handleChange}
              />
            </div>
            <div className="container-datosInput">
              <label htmlFor="cliente"> Nombre del cliente </label>
              <input
                type="text"
                id="cliente"
                value={props.formData.cliente}
                name="cliente"
                onChange={handleChange}
              />
            </div>
          </div>
          <h3>¿Qué quieres hacer?</h3>
          <div style={{ marginBottom: "5px" }}>
            <input
              type="checkbox"
              id="paginaWeb"
              checked={props.formData.paginaWeb}
              onChange={handleChange}
              name="paginaWeb"
            />
            <label htmlFor="paginaWeb"> Una página web (500 Euros)</label>
          </div>
          <StylePanell visibility={props.formData.paginaWeb ? "block" : "none"}>
            <Panell
              setFormData={props.setFormData}
              formData={props.formData}
              handleChange={handleChange}
            />
          </StylePanell>
          <div style={{ marginTop: "5px" }}>
            <input
              type="checkbox"
              id="consultoriaSEO"
              checked={props.formData.consultoriaSEO}
              onChange={handleChange}
              name="consultoriaSEO"
            />
            <label htmlFor="consultoriaSEO">
              Una consultoria SEO (300 Euros)
            </label>
          </div>
          <div style={{ marginTop: "5px" }}>
            <input
              type="checkbox"
              id="idGoogle"
              checked={props.formData.googleAds}
              onChange={handleChange}
              name="googleAds"
            />
            <label htmlFor="googleAds">
              {" "}
              Una campaña de Google Ads (200 Euros)
            </label>
          </div>
          <PrecioTotal formData={props.formData} totalPrice={totalPrice} />
        </form>
        <div>
          <GenerarPresup formData={props.formData} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
}
