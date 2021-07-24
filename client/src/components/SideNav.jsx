import React, { useEffect } from 'react'
import { StyledLinkNav } from './UserInterface/LinkStyle'
import { H2, H4 } from './UserInterface/Headings'
import { Container, Logo } from './UserInterface/MainComp'
import { AiFillHome, AiFillCodeSandboxCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { getUser } from "../services";
import { useSelector, useDispatch } from "react-redux";
import { Colors, BlackColors, FontSizes } from './UserInterface/Styles';
import RuthLogo from '../img/ruthlogo.png'
import { GrTasks } from "react-icons/gr";

export function SideNav() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getUser())
    }, [])


    return (
        <Container height={"100vh"}
            bgColor={BlackColors.white}
            borderR={BlackColors.lighter}
            display={'flex'}
            direction={'column'}
            align={'center'} >
            <Logo src={RuthLogo} width={"8em"} alt="Logo" style={{marginTop:"1em"}}></Logo>
            <H2 bold
                fSize={FontSizes.h5}
                fontColor={Colors.primary}
                style={{marginTop:"1em"}}
            >
                Hi!, {`${user.firstName} ${user.lastName}`}</H2>
            <Container style={{ marginTop: "1em", textAlign:"left", alignSelf:"flex-start" }}>
                <Container style={{ marginTop: "1em" }}>
                <StyledLinkNav style={{ display: "flex", paddingLeft:"1em" }} to="/">
                    <IconContext.Provider value={{ size: "1.25em" }}>
                            <AiFillHome />
                            <H4 style={{marginLeft:"1em"}}>Homepage</H4>
                    </IconContext.Provider>
                </StyledLinkNav>
                </Container>
                <Container style={{ marginTop: "1em" }}>
                <StyledLinkNav style={{ display: "flex", paddingLeft:"1em" }} to="/projects">
                    <IconContext.Provider value={{ size: "1.25em" }}>
                            <AiFillCodeSandboxCircle />
                            <H4 style={{marginLeft:"1em"}}>Projects</H4>
                    </IconContext.Provider>
                </StyledLinkNav>
                </Container>
                <Container style={{ marginTop: "1em" }}>
                <StyledLinkNav style={{ display: "flex", paddingLeft:"1em" }} to="/tasks">
                    <IconContext.Provider value={{ size: "1.25em" }}>
                            <GrTasks />
                            <H4 style={{marginLeft:"1em"}}>My Tasks</H4>
                    </IconContext.Provider>
                </StyledLinkNav>
                </Container>
            </Container>
        </Container>
    );
}