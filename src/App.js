import React from 'react'
import Presupuesto from './components/Presupuesto'
import PrecioTotal from './components/PrecioTotal'


function App() {
  const [formData, setFormData] = React.useState(
    {
      paginaWeb: false,
      numPag: 0,
      numIdiom: 0,
      consultoriaSEO: false,
      googleAds: false
    }
  )

  
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          ¿Qué quieres hacer?
        </h3>
        <form>
        <Presupuesto formData={formData} setFormData={setFormData} />
        </form>
        <PrecioTotal formData={formData} />
      </header>
    </div>
  );
}

export default App;
