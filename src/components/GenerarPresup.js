import { useState, useEffect } from "react";

export default function GenerarPresup(props) {
  const current = new Date();
  const parseCurrent = Date.parse(current);
  const price = props.totalPrice();

  const [budgets, setBudgets] = useState(() => {
    const initial = [];

    try {
      const data = localStorage.getItem("budget");
      return data ? JSON.parse(data) : initial;
    } catch (e) {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budgets));
  }, [budgets]);

  const [found, setFound] = useState([...budgets]);

  function handleAddBudget() {
    const newBudget = {
      nomPres: props.formData.nomPres,
      cliente: props.formData.cliente,
      fecha: parseCurrent,
      paginaWeb: props.formData.paginaWeb,
      numPag: props.formData.numPag,
      numIdiom: props.formData.numIdiom,
      consultoriaSEO: props.formData.consultoriaSEO,
      googleAds: props.formData.googleAds,
      precio: price,
      search: props.formData.search,
    };
    setBudgets([newBudget, ...budgets]);
    setFound([newBudget, ...budgets]);
  }

  function handleDeleted() {
    setBudgets([]);
    setFound([]);
  }

  function orderAlphabetically() {
    const result = [...found];
    result.sort(function (a, b) {
      if (a.nomPres > b.nomPres) {
        return 1;
      }
      if (a.nomPres < b.nomPres) {
        return -1;
      }
      return 0;
    });

    setFound(result);
  }

  function orderAlphabeticallyReverse() {
    const result = [...found];
    result.sort(function (a, b) {
      if (a.nomPres < b.nomPres) {
        return 1;
      }
      if (a.nomPres > b.nomPres) {
        return -1;
      }
      return 0;
    });

    setFound(result);
  }

  function orderByData() {
    const result = [...found].sort(function (a, b) {
      return b.fecha - a.fecha;
    });
    console.log("alpha", result);
    setFound(result);
  }

  function orderByDataReverse() {
    const result = [...found].sort(function (a, b) {
      return a.fecha - b.fecha;
    });
    console.log("beta", result);
    setFound(result);
  }

  const [searchText, setSearchText] = useState("");

  function handleChangeText(event) {
    const { value } = event.target;

    setSearchText(value);
    filterBudget(value);
  }

  function filterBudget(value) {
    let lowerCaseValue = value.toLowerCase().trim();

    if (lowerCaseValue === undefined) {
      setFound([...budgets]);
    } else {
      const filteredName = [...budgets].filter((item) => {
        return item.nomPres.toLowerCase().includes(lowerCaseValue);
      });
      setFound(filteredName);
    }
  }

  return (
    <div id="container-presupuesto">
      <div id="crearPresupuesto">
        <button className="btn" id="btnAdd" onClick={handleAddBudget}>
          Añadir presupuesto
        </button>
        <button className="btn" id="btnDeleted" onClick={handleDeleted}>
          Eliminar todo
        </button>
      </div>
      <div>
        <input
          type="text"
          id="search"
          placeholder="Presupuesto a buscar.."
          value={searchText}
          name="search"
          onChange={(e) => handleChangeText(e)}
        />
      </div>
      <div>
        <button className="btn" onClick={orderAlphabetically}>
          A-Z
        </button>
        <button className="btn" onClick={orderAlphabeticallyReverse}>
          Z-A
        </button>
        <button className="btn" onClick={orderByData}>
          Más reciente
        </button>
        <button className="btn" onClick={orderByDataReverse}>
          Más antiguo
        </button>
      </div>
      <div id="container-card">
        {found.map((budget, index) => (
          <div key={`card-${index}`} id="card">
            <p>
              <b>Nombre presupuesto:</b> {budget.nomPres}
            </p>
            <p>
              <b>Cliente:</b> {budget.cliente}
            </p>
            <p>
              <b>Precio final:</b> {budget.precio} €
            </p>
            <p>
              <b>Fecha:</b>{" "}
              {new Date(budget.fecha).toLocaleDateString("es-ES", {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
