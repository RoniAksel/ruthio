import styled from "styled-components"
import React  from "react";
import { Container } from "./UserInterface/MainComp";

export const Panes = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    max-width: 100%
`

const Header = styled.div(props => ({
    ...props
}))


let Body = styled.div({
    overflow: 'auto',
    flexGrow: "1"
  });

export function Pane({ body, width, header }) {
    return <Container width={width} display={"flex"} style={{flexDirection:"column"}}>
        <Header>{header}</Header>
        <Body>
            {body}
        </Body>
    </Container>
}

