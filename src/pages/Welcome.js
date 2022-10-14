import { StyledInicio, StyledBtn } from "../styled";
import { Link } from "react-router-dom";
import imgWelcome from "../img/presupuesto.jpg";
export default function Inicio() {
  return (
    <StyledInicio>
      <div id="container-welcome">
        <div>
          <h1 id="titleWelcome">Calculadora de presupuestos</h1>
          <div id="container-btn">
            <p>Si desea calcular el presupuesto de tu página web </p>
            <StyledBtn>
              <Link to="/presupuesto">click aquí</Link>
            </StyledBtn>
          </div>
        </div>
      </div>
    </StyledInicio>
  );
}
