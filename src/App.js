import React, { useEffect } from 'react'
import Presupuesto from './components/Presupuesto'
import Inicio from './components/Inicio'
import { Routes, Route, useSearchParams } from "react-router-dom"


function App() {

  const urlString = window.location.search
  console.log("url", urlString)
  //const params = new URLSearchParams(urlString)
  
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("nomPres"))
  
  const [formData, setFormData] = React.useState(
    {
        nomPres: searchParams.get("nomPres") ? searchParams.get("nomPres") : "",
        cliente: searchParams.get("cliente") ? searchParams.get("cliente") : "",
        paginaWeb: searchParams.get("paginaWeb") === "true" ? true:false,
        numPag: searchParams.get("numPag") ? validateNumber(searchParams.get("numPag")) : 0,
        numIdiom: searchParams.get("numIdiom") ? validateNumber(searchParams.get("numIdiom")) : 0,
        consultoriaSEO: searchParams.get("consultoriaSEO") === "true" ? true : false,
        googleAds: searchParams.get("googleAds") === "true" ? true : false,
        
      }

      // try {
      //   const data = localStorage.getItem("check");
      //   return data ? JSON.parse(data) : iniciar
      // } catch (e) {
      //   return iniciar;
      // }
      
   )
  
  useEffect(() => {
    setSearchParams(formData)
  }, [setSearchParams, formData])
  console.log(searchParams.get("numIdiom"))
  
  // useEffect(() => {
  //   localStorage.setItem("check", JSON.stringify(formData));
  // }, [formData])
console.log(searchParams.get("numPag"))
  
function validateNumber(value){
   
    if(!value.toString().match(/^[0-9 ]+$/)){
      return 0;
    }else{
     return parseInt(value)
    }

}
  
  return (
    <div className="App">

      <Routes>
        <Route path="/presupuesto" element={<Presupuesto formData={formData} setFormData={setFormData} />} />
        <Route path="/" element={<Inicio />} />
      </Routes>

    </div >

  );
}

export default App;
