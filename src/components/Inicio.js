import { StyledInicio, StyledBtn } from '../styled'
import { Link } from "react-router-dom"

export default function Inicio() {
    return (
        <StyledInicio>
            <h1>Benvinguts!</h1>
            <p>Preneu el botó per iniciar el pressupost de la vostre pàgina web.</p>
            <StyledBtn className='btn-presupuesto'>
                <Link to="/presupuesto">
                    Iniciar pressupost
                </Link>
            </StyledBtn>
        </StyledInicio>
    )
}