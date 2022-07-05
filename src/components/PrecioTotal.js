

export default function PrecioTotal(props) {

    console.log("precio", props)

    let precio = (props.formData.paginaWeb ? 500 : 0) +
        (props.formData.consultoriaSEO ? 300 : 0) + (props.formData.googleAds ? 200 : 0);

    precio += (props.formData.paginaWeb ? (props.formData.numPag)*(props.formData.numIdiom)*30 : 0)
    
    
    return (
        <div >
            Precio: {precio}
        </div>
    )
}