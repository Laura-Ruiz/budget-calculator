
import { useState } from "react";

export default function GenerarPresup(props) {

    const current = new Date();
    //const date = current.toString();
    //const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;


    const price = props.totalPrice()

    const [budgets, setBudgets] = useState([]);
    console.log("budget", budgets)
    const [found, setFound] = useState([]);
    console.log("found", found)

    function handleAddUser() {
        const newUser = {
            nomPres: props.formData.nomPres,
            cliente: props.formData.cliente,
            //data: date,
            fecha: current,
            paginaWeb: props.formData.paginaWeb,
            numPag: props.formData.numPag,
            numIdiom: props.formData.numIdiom,
            consultoriaSEO: props.formData.consultoriaSEO,
            googleAds: props.formData.googleAds,
            precio: price,
            search: props.formData.search
        }
        setBudgets([newUser, ...budgets])
        setFound([newUser, ...budgets])
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

        setBudgets(result)
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

        setBudgets(result)
    }


    function orderByData() {
        const result = [...budgets].sort(function (a, b) {
            return b.fecha - a.fecha
        })
        setBudgets(result)
    }


    function orderByDataReverse() {
        const result = [...budgets].sort(function (a, b) {
            return a.fecha - b.fecha
        })
        setBudgets(result)
    }


    const [searchText, setSearchText] = useState('')


    function handleChangeText(event) {
        const { value } = event.target

        setSearchText(value)
        filterBudget(value)
    }

    let lowerCaseValue;
    function filterBudget(value) {

        lowerCaseValue = value.toLowerCase().trim();
        console.log("lowerCase", lowerCaseValue)
        if (lowerCaseValue === undefined) {
            console.log(budgets)
            setBudgets([...budgets])
        } else {
            const filteredName = [...budgets].filter(item => {
                return item.nomPres.toLowerCase().includes(lowerCaseValue)
            });
            console.log(filteredName)
            setFound(filteredName);
        }
    }
    const array = (lowerCaseValue === "") ? budgets : found;
    console.log(array)
    return (
        <div >
            <div id="crearPresupuesto">
                <button onClick={handleAddUser}>Nou pressupost</button>
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
                {array.map((budget, index) => (
                    <div key={`card-${index}`} id="card">
                        <p><b>Nom pressupost:</b> {budget.nomPres}</p>
                        <p><b>Client:</b> {budget.cliente}</p>
                        <p><b>Preu final:</b> {budget.precio} €</p>
                        <p><b>Data:</b> {budget.fecha.toString()}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
