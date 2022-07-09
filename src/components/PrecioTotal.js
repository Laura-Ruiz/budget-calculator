import React from 'react';
import { StyledBtn } from '../styled'
import { Link } from "react-router-dom"

export default function PrecioTotal(props) {

    let precio = (props.formData.paginaWeb ? 500 : 0) +
        (props.formData.consultoriaSEO ? 300 : 0) + (props.formData.googleAds ? 200 : 0);

    precio += (props.formData.paginaWeb ? (props.formData.numPag) * (props.formData.numIdiom) * 30 : 0)


    return (
        <div>
            <div >
                Precio: {precio}
            </div>
            <StyledBtn className='btn-inicio'>
                <Link to="/">
                    Inicio
                </Link>
            </StyledBtn>

        </div>
    )
}