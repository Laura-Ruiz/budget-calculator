import React from "react";
import Panell from "./Panell"
import GenerarPresup from "./GenerarPresup"

import { StylePanell } from '../styled'
import PrecioTotal from "./PrecioTotal";


export default function Presupuesto(props) {
  console.log("propsPres", props)
  function handleChange(event) {

    const { name, value, type, checked, className } = event.target
    props.setFormData(prevFormData => {

      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : className === "input" && (value < 0 || isNaN(value)) ? 0 : value
        // [name]: type === "checkbox" ? checked : (value < 0 || isNaN(value)) ? 0 : value
      }
    })

  }

  function totalPrice(){
    let precio = (props.formData.paginaWeb ? 500 : 0) +
    (props.formData.consultoriaSEO ? 300 : 0) + (props.formData.googleAds ? 200 : 0);
    precio += (props.formData.paginaWeb ? (props.formData.numPag) * (props.formData.numIdiom) * 30 : 0)
    
    return precio;
  }

  return (
    <div id="main-presupuesto">
      <form id="form">
        <div className="container-client">
          <div>
            <label htmlFor="nomPres"> Nom de pressupost:</label>
            <input
              type="text"
              id="nomPres"
              value={props.formData.nomPres}
              name="nomPres"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="cliente"> Nom client:</label>
            <input
              type="text"
              id="cliente"
              value={props.formData.cliente}
              name="cliente"
              onChange={handleChange}
            />
          </div>
        </div>
        <h3>
          ¿Què vols fer?
        </h3>
        <div>
          <input
            type="checkbox"
            id="paginaWeb"
            checked={props.formData.paginaWeb}
            onChange={handleChange}
            name="paginaWeb"
          />
          <label htmlFor="paginaWeb"> Una pàgina web (500 Euros)</label>
        </div>
        <StylePanell visibility={props.formData.paginaWeb ? "block" : "none"}>
          <Panell setFormData={props.setFormData} formData={props.formData} handleChange={handleChange} />
        </StylePanell>
        <div>
          <input
            type="checkbox"
            id="consultoriaSEO"
            checked={props.formData.consultoriaSEO}
            onChange={handleChange}
            name="consultoriaSEO"

          />
          <label htmlFor="consultoriaSEO">Una consultoria SEO (300 Euros)</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="googleAds"
            checked={props.formData.googleAds}
            onChange={handleChange}
            name="googleAds"
          />
          <label htmlFor="googleAds"> Una campanya de Google Ads (200 Euros)</label>
        </div>
        <PrecioTotal formData={props.formData} totalPrice={totalPrice} />
      </form>
      <div>
        <GenerarPresup formData={props.formData} totalPrice={totalPrice}/>
      </div>
    </div>
  )
}