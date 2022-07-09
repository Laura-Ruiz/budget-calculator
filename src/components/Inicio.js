import { StyledInicio, StyledBtn } from '../styled'
import { Link } from "react-router-dom"

export default function Inicio() {
    return (
        <StyledInicio>
            <h1>Bienvenidos</h1>
            <p>funcionamiento web</p>
            <StyledBtn className='btn-presupuesto'>
                <Link to="/presupuesto">
                    presupuesto
                </Link>
            </StyledBtn>
        </StyledInicio>
    )
}