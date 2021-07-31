import styled from "styled-components/macro"
import { Colors, BlackColors } from "./Styles"

export const Table = styled.table`
    width:100%;
    text-align: left;
    border-collapse: collapse;
    border: 1px solid #ddd;


`

export const TH = styled.th`
    padding: 0.5rem;
    color: ${BlackColors.primary};
    background-color: #f1f1f1;
    text-align: left;
    border: 1px solid #ddd;

`

export const TD = styled.td`
    padding: 0.5rem;
    background-color: ${BlackColors.white};
    border-bottom: 1px solid #ddd;
    
`

export const TR = styled.tr`
    cursor: pointer;

`



