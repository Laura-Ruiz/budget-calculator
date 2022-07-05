import React from 'react'


export default function Panell(props) {

   function incrementar(event) {
      let { name } = event.target
      props.setFormData(prevFormData => {
         return {
            ...prevFormData,
            [name]: name === "numPag" ? props.formData.numPag++ : props.formData.numIdiom++
         }
      })

   }

   function disminuir(event) {
      let { name } = event.target
      props.setFormData(prevFormData => {
         // if (props.formData.numPag = 0 || props.formData.numIdiom === 0) {
         //    return 0
         // }
         return {
            ...prevFormData,
            [name]: name === "numPag" ? props.formData.numPag-- : props.formData.numIdiom--
         }
      })

   }

   return (
      <div>
         <label>Número de páginas</label>
         <input
            type="button"
            value="+"
            onClick={incrementar}
            name="numPag"
         />
         <input
            type="number"
            name="numPag"
            id="numPag"
            value={props.formData.numPag}
            onChange={props.handleChange}

         />
         <input
            type="button"
            value="-"
            onClick={disminuir}
            name="numPag"
         />
         <div>
            <label>Número de idiomas</label>
            <input
               type="button"
               value="+"
               onClick={incrementar}
               name="numIdiom"
            />
            <input
               type="number"
               name="numIdiom"
               id="numIdiom"
               value={props.formData.numIdiom}
               onChange={props.handleChange}
            />
            <input
               type="button"
               value="-"
               onClick={disminuir}
               name="numIdiom"
            />
         </div>
      </div>
   )
}