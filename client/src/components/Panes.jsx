import styled from "styled-components"
import React, { useEffect, useRef } from "react";
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


export const Body = styled.div`
    ${'' /* width: ${props => props.width}; */}
    flex-grow: 1;
    overflow: auto;
    max-width: 100%;
`

export function Pane({ body, width, header }) {
    //  let ref = useRef(null)
    //  useEffect(()=>{
    //     ref.current.scrollTo(0, ref.current.scrollHeight)
    //   }, [lastScroll])
    return <Container width={width}>
        <Header>{header}</Header>
        <Body>
            {body}
        </Body>
    </Container>
}

