import React from 'react'


export default function Panell(props) {
   
   const numPag = parseInt(props.formData.numPag);
   const numIdiom = parseInt(props.formData.numIdiom);

   function counter(event, i) {
            
      let { name } = event.target

         props.setFormData(prevFormData => {
               return {
                  ...prevFormData,
                  [name]: name === "numPag" ? numPag + i : numIdiom + i
               }
            })
      }
    
   return (
      <div>
         <label>Número de páginas</label>
         <input
            type="button"
            value="+"
            onClick={(e)=>counter(e,1)}
            name="numPag"
         />
         <input
            type="text"
            name="numPag"
            id="numPag"
            value={props.formData.numPag}
            onChange={props.handleChange}

         />
         <input
            type="button"
            value="-"
            onClick={(e)=> {if(props.formData.numPag > 0) return counter(e,-1)}}
            name="numPag"
         />
         <div>
            <label>Número de idiomas</label>
            <input
               type="button"
               value="+"
               onClick={(e)=>counter(e,1)}
               name="numIdiom"
            />
            <input
               type="text"
               name="numIdiom"
               id="numIdiom"
               value={props.formData.numIdiom}
               onChange={props.handleChange}
            />
            <input
               type="button"
               value="-"
               onClick={(e)=> {if(props.formData.numIdiom > 0) return counter(e,-1)}}
               name="numIdiom"
            />
         </div>
      </div>
   )
}