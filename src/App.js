
import Presupuesto from './components/Presupuesto'
import PrecioTotal from './components/PrecioTotal'
import React, {useEffect} from 'react'

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

      try{        
        const data = localStorage.getItem("check");
        return data ? JSON.parse(data) : iniciar
      }catch(e){
        return iniciar;
      }
  
    }
    

    
  )
        useEffect(()=>{
          localStorage.setItem("check", JSON.stringify(formData));
        },[formData])
  
    // useEffect(()=>{
    //   const data = window.localStorage.getItem("check");
    //   console.log(data)
    //   if(data) {
    //     setFormData(JSON.parse(data))
    //   }
    // },[]);

   
      
 
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
