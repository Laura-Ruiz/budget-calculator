import React from 'react'
// import Popup from './Popup';
import { BtnImg } from '../styled';
import imgInfo from "../img/info.png";



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

   const [buttonPopup, setButtonPopup] = React.useState(false)

   function openModal() {
      console.log("trigger", buttonPopup)
      setButtonPopup(true)
   }

   return (
      <div>
         <div className='container-input'>
            <label>Número de páginas</label>
            <input
               className='btn-contador'
               type="button"
               value="+"
               onClick={(e) => counter(e, 1)}
               name="numPag"
            />
            <input
               className='input'
               type="text"
               name="numPag"
               id="numPag"
               value={props.formData.numPag}
               onChange={props.handleChange}

            />
            <input
               className='btn-contador'
               type="button"
               value="-"
               onClick={(e) => { if (props.formData.numPag > 0) return counter(e, -1) }}
               name="numPag"
            />

            <BtnImg onClick={() => setButtonPopup(true)}><img src={imgInfo} alt="info icon" /></BtnImg>
            {/* <button onClick={props.openModal}>i</button> */}
         </div>
         <div>
            <div className='container-input'>
               <label>Número de idiomas</label>
               <input
                  className='btn-contador'
                  type="button"
                  value="+"
                  onClick={(e) => counter(e, 1)}
                  name="numIdiom"
               />
               <input
                  className='input'
                  type="text"
                  name="numIdiom"
                  id="numIdiom"
                  value={props.formData.numIdiom}
                  onChange={props.handleChange}
               />
               <input
                  className='btn-contador'
                  type="button"
                  value="-"
                  onClick={(e) => { if (props.formData.numIdiom > 0) return counter(e, -1) }}
                  name="numIdiom"
               />
               <BtnImg onClick={() => setButtonPopup(true)}><img src={imgInfo} alt="info icon" /></BtnImg>
            </div>
         </div>
         {/* <button onClick={openModal}>Open PopUp</button>
         <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <p>MY POPUP</p>
         </Popup> */}
      </div >

   )
}