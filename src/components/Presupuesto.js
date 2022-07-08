import Panell from "./Panell"
import { StylePanell } from '../styled'

export default function Presupuesto(props) {

  function handleChange(event) {

    const { name, value, type, checked } = event.target
    props.setFormData(prevFormData => {

      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : (value < 0 || isNaN(value)) ? 0 : value
      }
    })

  }

  return (
    <form>
      <h3>
        ¿Qué quieres hacer?
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
    </form>

  )
}