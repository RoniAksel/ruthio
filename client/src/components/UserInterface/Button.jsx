import styled from "styled-components"

export const Button = styled.button`
    display:block;
    width: ${props => props.width};
    border: ${props => props.primary ? "none" : "1px solid #868686"};
    color: ${props => props.primary ? "white" : "#868686"};
    margin: 1em 0 1em 0;
    padding: 1em;
    border-radius: 5px;
    font-weight: 600;   
    background-color:${props => props.primary ? "#0066FF" : "white"}; 
    transition: 0.3s ease;
    cursor: pointer; 
    &:hover{
        background-color:${props => props.primary ? "#005CE6" : "#0066FF"}; ;
        border: ${props => props.primary ? "none" : "1px solid #86868600"};
        color: ${props => props.primary ? "white" : "white"};
        boxShadow: "0px 0px 24px 5px rgba(153,153,153,0.17)"
    } 
`

export const ButtonA = styled.a`
    border-radius: 5px;
    
`