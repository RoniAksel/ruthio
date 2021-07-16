import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { LogOutBtn } from './LogoutBtn'
import RuthLogo from '../img/logo.svg'
import { Flex, Logo } from './UserInterface/MainComp'
import { AiFillHome, AiFillCodeSandboxCircle } from "react-icons/ai";
import { IconContext } from "react-icons";


export function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Flex align={"center"} justify={"space-between"} bgColor={"white"}>
      <Logo src={RuthLogo} width={"8em"} alt="Logo"></Logo>
      {loggedIn === false && (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Flex>
            <div>
              <Link to="/">
                <IconContext.Provider value={{ size: "2em", className: 'icons' }}>
                  <Flex align={"center"}>
                    <AiFillHome />
                    <div>Home</div>
                  </Flex>
                </IconContext.Provider>
              </Link>
            </div>
            <div>
              <Link to="/project">
                <IconContext.Provider value={{ size: "2em", className: 'icons' }}>
                  <Flex align={"center"}>
                    <AiFillCodeSandboxCircle />
                    <div>Projects </div>
                  </Flex>

                </IconContext.Provider>
              </Link>

            </div>
          </Flex>
          <LogOutBtn />
        </>
      )}
    </Flex>
  );
}