import React, { useEffect } from 'react'
import { StyledLinkNav } from './UserInterface/LinkStyle'
import { H2, H4 } from './UserInterface/Headings'
import { Container, Divider, Logo } from './UserInterface/MainComp'
import { AiFillHome, AiFillCodeSandboxCircle, AiOutlineFolder, AiOutlineContainer, AiOutlineHome, AiOutlineSchedule } from "react-icons/ai";
import { IconContext } from "react-icons";
import { getUser } from "../services";
import { useSelector, useDispatch } from "react-redux";
import { Colors, BlackColors, FontSizes } from './UserInterface/Styles';
import RuthLogo from '../img/simplifyio.svg'
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
            borderR={BlackColors.divider}
            display={'flex'}
            direction={'column'}
            align={'center'}
            style={{ boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)" }}
        >
            <Logo src={RuthLogo} width={"10em"} alt="Logo" style={{ marginTop: "1em" }}></Logo>
            <Container style={{ marginTop: "1em", textAlign: "left", alignSelf: "flex-start" }}>
                <H4 style={{paddingLeft: "1em", marginTop:"1em"} }fontColor={BlackColors.gray}>FEATURES</H4>
                <Container style={{ marginTop: "1em" }}>
                    <StyledLinkNav style={{ display: "flex", paddingLeft: "1em" }} to="/">
                        <IconContext.Provider value={{ size: "1.25em" }}>
                            <AiOutlineHome />
                            <H4 style={{ marginLeft: "1em" }}>Homepage</H4>
                        </IconContext.Provider>
                    </StyledLinkNav>
                </Container>
                <Container style={{ marginTop: "1em" }}>
                    <StyledLinkNav style={{ display: "flex", paddingLeft: "1em" }} to="/projects">
                        <IconContext.Provider value={{ size: "1.25em" }}>
                        <AiOutlineFolder />
                            <H4 style={{ marginLeft: "1em" }}>Projects</H4>
                        </IconContext.Provider>
                    </StyledLinkNav>
                </Container>
                <Container style={{ marginTop: "1em" }}>
                    <StyledLinkNav style={{ display: "flex", paddingLeft: "1em" }} to="/tasks">
                        <IconContext.Provider value={{ size: "1.25em" }}>
                            <AiOutlineContainer />
                            <H4 style={{ marginLeft: "1em" }}>My Tasks</H4>
                        </IconContext.Provider>
                    </StyledLinkNav>
                </Container>
                <Container style={{ marginTop: "1em" }}>
                    <StyledLinkNav style={{ display: "flex", paddingLeft: "1em" }} to="/tasks">
                        <IconContext.Provider value={{ size: "1.25em" }}>
                            <AiOutlineSchedule />
                            <H4 style={{ marginLeft: "1em" }}>My Schedule</H4>
                        </IconContext.Provider>
                    </StyledLinkNav>
                </Container>
                <Container style={{ marginTop: "1em", textAlign: "left", alignSelf: "flex-start" }}>
                <H4 style={{paddingLeft: "1em", marginTop:"1em"} }fontColor={BlackColors.gray}>TEAMS</H4>

                </Container>

            </Container>
        </Container>
    );
}