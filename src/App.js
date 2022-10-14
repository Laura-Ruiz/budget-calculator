import React, { useEffect } from "react";
import Presupuesto from "./pages/Presupuesto";
import Welcome from "./pages/Welcome";
import { Routes, Route, useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("nomPres"));

  const [formData, setFormData] = React.useState({
    nomPres: searchParams.get("nomPres") ? searchParams.get("nomPres") : "",
    cliente: searchParams.get("cliente") ? searchParams.get("cliente") : "",
    paginaWeb: searchParams.get("paginaWeb") === "true" ? true : false,
    numPag: searchParams.get("numPag")
      ? validateNumber(searchParams.get("numPag"))
      : 0,
    numIdiom: searchParams.get("numIdiom")
      ? validateNumber(searchParams.get("numIdiom"))
      : 0,
    consultoriaSEO:
      searchParams.get("consultoriaSEO") === "true" ? true : false,
    googleAds: searchParams.get("googleAds") === "true" ? true : false,
  });

  useEffect(() => {
    setSearchParams(formData);
  }, [setSearchParams, formData]);

  function validateNumber(value) {
    if (!value.match(/^[0-9 ]+$/)) {
      return 0;
    } else {
      return parseInt(value);
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/presupuesto"
          element={
            <Presupuesto formData={formData} setFormData={setFormData} />
          }
        />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
