
import Presupuesto from './components/Presupuesto'
import PrecioTotal from './components/PrecioTotal'
import Inicio from './components/Inicio'
import React, { useEffect } from 'react'
import { StyledBtn } from './styled'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

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
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <StyledBtn className='btn-inicio'>
            <NavLink to="/">
              Inicio
            </NavLink>
          </StyledBtn>
          <StyledBtn className='btn-presupuesto'>
            <NavLink to="/presupuesto">
              presupuesto
            </NavLink>
          </StyledBtn>
          <Routes>
            <Route path="/presupuesto" element={<div><Presupuesto formData={formData} setFormData={setFormData} /> <PrecioTotal formData={formData} /> </div>}>
              Presupuesto
            </Route>
            <Route path="/" element={<Inicio />}>
            </Route>
          </Routes>
        </header>
      </div >
    </BrowserRouter >
  );
}

export default App;
