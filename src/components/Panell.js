import React from 'react'


export default function Panell(props){
   
        return(
        <div>
        <div>
        <label>Número de páginas</label>
        <input
        type="number"
        name="numPag"
        id="numPag"
        value={props.formData.numPag}
        onChange={props.handleChange}
        />
        </div>
        <div>
        <label>Número de idiomas</label>
        <input
        type="number"
        name="numIdiom"
        id="numIdiom"
        value={props.formData.numIdiom}
        onChange={props.handleChange}
        />
       </div>
    </div>
)}