import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { LogOutBtn } from './LogoutBtn'
import RuthLogo from '../img/logowhite.png'
import { H2 } from './UserInterface/Headings'
import { Container, Flex, Logo, Title } from './UserInterface/MainComp'
import { AiFillHome, AiFillCodeSandboxCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { getUser } from "../services";
import { useSelector, useDispatch } from "react-redux";

export  function SideNav() {
    // const { loggedIn } = useContext(AuthContext);
    // const { user } = useContext(AuthContext);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getUser())
    }, [])
    
    const { user } = useSelector((state) => state.user);
    

    return (
        <Container height={"100vh"} bgColor={"#212529"}>
            <Container padding={'1em 0em'} display={'flex'}  justify={'center'} >
                <H2 bold fontColor={'white'} >Hi!, {`${user.firstName} ${user.lastName}`}</H2>
                <Container>
                    <Link to="/">
                        <IconContext.Provider value={{ size: "2em", className: 'icons' }}>
                            <AiFillHome />
                        </IconContext.Provider>
                    </Link>
                </Container>

            </Container>
        </Container>
    );
}