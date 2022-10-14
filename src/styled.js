import styled from "styled-components";
import imgWelcome from "./img/backgroundImage.jpg";

export const StylePanell = styled.div`
  border: 3px solid black;
  width: fit-content;
  padding: 1rem;
  border-radius: 10px;
  display: ${(props) => props.visibility};
`;
export const StyledInicio = styled.div`
  background: url(${imgWelcome});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  @media (max-width: 500px) {
    background-size: auto 100vh;
  }
`;

export const StyledBtn = styled.button`
  border-radius: 5px;
  background-color: rgba(186, 44, 16, 0.902);
  border: none;
  padding: 10px;
  margin: 5px;

  a {
    font-size: medium;
    text-decoration: none;
    color: white;
  }
`;

export const BtnImg = styled.img`
  width: 28px;
  cursor: pointer;
  position: relative;
`;
