import React from 'react';
import { StyledBtn } from '../styled'
import { Link } from "react-router-dom"

export default function PrecioTotal(props) {

    let precio = props.totalPrice()

    return (
        <div>
            <div >
                Preu: {precio} €
            </div>
            <StyledBtn className='btn-inicio'>
                <Link to="/">
                    Inicio
                </Link>
            </StyledBtn>

        </div>
    )
}