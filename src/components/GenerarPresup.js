
import { useState } from "react";

export default function GenerarPresup(props) {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    console.log(date)

    const price = props.totalPrice()

    const [users, setUsers] = useState([]);

    function handleAddUser() {
        const newUser = {
            nomPres: props.formData.nomPres,
            cliente: props.formData.cliente,
            data: date,
            paginaWeb: props.formData.paginaWeb,
            numPag: props.formData.numPag,
            numIdiom: props.formData.numIdiom,
            consultoriaSEO: props.formData.consultoriaSEO,
            googleAds: props.formData.googleAds,
            precio: price
        }
        setUsers([...users, newUser])
    }
    const [orderUsers, setOrderUsers] = useState([])
    const resultadoFinal = [];
    function orderAlphabetically() {
        let result = hola()

        let resultado;
        for (let i = 0; i < result.length; i++) {
            console.log(result[i])
            let item = result[i]
            resultado = users.filter(user => user.nomPres === item)
            resultadoFinal.push(resultado)
        }
        console.log("resutladoFinal", resultadoFinal)
        setOrderUsers(...orderUsers, resultadoFinal)
    }
    console.log("order", orderUsers)

    function hola() {
        const getBudget = users.map(user => user.nomPres)
        let resultados = getBudget.sort()

        return resultados;
    }

    function orderByData() {

    }

    function restart() {

    }
    return (
        <div >
            <button onClick={handleAddUser}>Nou pressupost</button>
            <div>
                <button onClick={orderAlphabetically}>Ordenar alfabèticament</button>
                <button onClick={orderByData}>Ordenar per data</button>
                <button onClick={restart}>Reiniciar</button>
            </div>

            <div id="container-card">
                {orderUsers.map((user, index) => (
                    <div key={`card-${index}`} id="card">
                        <p><b>Nom pressupost:</b> {user.nomPres}</p>
                        <p><b>Client:</b> {user.cliente}</p>
                        <p><b>Preu final:</b> {user.precio} €</p>
                        <p><b>Data:</b> {user.data}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
