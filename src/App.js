import React, { useEffect } from 'react'
import Presupuesto from './components/Presupuesto'
import Inicio from './components/Inicio'
import { Routes, Route } from "react-router-dom"


function App() {
  const [formData, setFormData] = React.useState(
    () => {
      const iniciar = {
        paginaWeb: false,
        numPag: 0,
        numIdiom: 0,
        consultoriaSEO: false,
        googleAds: false
      }

      try {
        const data = localStorage.getItem("check");
        return data ? JSON.parse(data) : iniciar
      } catch (e) {
        return iniciar;
      }

    }

  )

  useEffect(() => {
    localStorage.setItem("check", JSON.stringify(formData));
  }, [formData])

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
