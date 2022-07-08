import styled from "styled-components";

export const StylePanell = styled.div`
    border: 3px solid black;
    width:fit-content;
    padding:1rem;
    border-radius: 10px;
    display: ${props => props.visibility};
    
`
export const StyledInicio = styled.div`
    text-align: center;
`

export const StyledBtn = styled.button`
    border-radius: 5px;
    padding: 5px;
    margin: 5px;

    a{
        text-decoration: none;
    }
`