import styled from "styled-components"

export const H4 = styled.h4`
    color: ${props => props.fontColor};
    font-weight: ${props=> props.bold ? '700' : '400'};
    margin: ${props => props.margin ? '1em 0em' : '0'};
`

export const H2 = styled.h2`
    color: ${props => props.fontColor};
    font-weight: ${props=> props.bold ? '700' : '400'};
    margin: ${props => props.margin ? '1em 0em' : '0'};
`