
import { useState, useEffect } from "react";

export default function GenerarPresup(props) {

    const current = new Date();
    const price = props.totalPrice()

    const [budgets, setBudgets] = useState(
        () => {
            const initial = [];

            try {
                const data = localStorage.getItem("budget");
                return data ? JSON.parse(data) : initial
            } catch (e) {
                return initial
            }

        });


    useEffect(() => {
        localStorage.setItem("budget", JSON.stringify(budgets));
    }, [budgets])


    const [found, setFound] = useState([...budgets])

    function handleAddBudget() {
        const newBudget = {
            nomPres: props.formData.nomPres,
            cliente: props.formData.cliente,
            fecha: current,
            paginaWeb: props.formData.paginaWeb,
            numPag: props.formData.numPag,
            numIdiom: props.formData.numIdiom,
            consultoriaSEO: props.formData.consultoriaSEO,
            googleAds: props.formData.googleAds,
            precio: price,
            search: props.formData.search
        }
        setBudgets([newBudget, ...budgets])
        setFound([newBudget, ...found])
    }


    function orderAlphabetically() {
        const result = [...budgets]
        result.sort(function (a, b) {
            if (a.nomPres > b.nomPres) {
                return 1;
            }
            if (a.nomPres < b.nomPres) {
                return -1;
            }
            return 0
        })

        setFound(result);

    }

    function orderAlphabeticallyReverse() {
        const result = [...budgets]
        result.sort(function (a, b) {
            if (a.nomPres < b.nomPres) {
                return 1;
            }
            if (a.nomPres > b.nomPres) {
                return -1;
            }
            return 0
        })

        setFound(result);
    }

    function orderByData() {
        const result = [...budgets].sort(function (a, b) {
            return b.fecha - a.fecha
        })
        setFound(result);
    }

    function orderByDataReverse() {
        const result = [...budgets].sort(function (a, b) {
            return a.fecha - b.fecha
        })
        setFound(result);
    }

    const [searchText, setSearchText] = useState('')


    function handleChangeText(event) {
        const { value } = event.target

        setSearchText(value)
        filterBudget(value)
    }

    function filterBudget(value) {

        let lowerCaseValue = value.toLowerCase().trim();

        if (lowerCaseValue === undefined) {
            setFound([...budgets])
        } else {
            const filteredName = [...budgets].filter(item => {
                return item.nomPres.toLowerCase().includes(lowerCaseValue)
            });
            setFound(filteredName);
        }
    }

    return (
        <div >
            <div id="crearPresupuesto">
                <button onClick={handleAddBudget}>Nou pressupost</button>
            </div>
            <div>
                Buscador :
                <input
                    type="text"
                    id="search"
                    placeholder="Pressupost a buscar.."
                    value={searchText}
                    name="search"
                    onChange={(e) => handleChangeText(e)}

                />
            </div>
            <div>
                <button onClick={orderAlphabetically}>A-Z</button>
                <button onClick={orderAlphabeticallyReverse}>Z-A</button>
                <button onClick={orderByData}>Més recent</button>
                <button onClick={orderByDataReverse}>Més antic</button>
            </div>
            <div id="container-card">
                {found.map((budget, index) => (
                    <div key={`card-${index}`} id="card">
                        <p><b>Nom pressupost:</b> {budget.nomPres}</p>
                        <p><b>Client:</b> {budget.cliente}</p>
                        <p><b>Preu final:</b> {budget.precio} €</p>
                        <p><b>Data:</b> {new Date(budget.fecha).toLocaleDateString("es-ES",
                            {
                                year: '2-digit',
                                month: '2-digit',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',

                            })}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
