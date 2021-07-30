import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { LogOutBtn } from './LogoutBtn'
import { Container, Flex, H4, Logo } from './UserInterface/MainComp'
import { useSelector } from 'react-redux'
import { Avatar } from '@material-ui/core';
import { Input } from './UserInterface/MainComp'
import { FaSearch } from "react-icons/fa";
import { BlackColors } from './UserInterface/Styles'

export function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  const { user } = useSelector((state) => state.user);

  return (
    <Flex
      align={"center"}
      justify={'space-between'}
      bgColor={"white"}
      style={{ borderBottom: `1px solid ${BlackColors.lighter}`, top:"0", position:"sticky" }}
    
    >
      {loggedIn === false && (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
        </>
      )}
      {loggedIn === true && (
        <>
          {user &&
            <Container style={{marginLeft:"1em"}} display={'flex'} justify={'center'}>
            <Input placeholder={`Search Here`}></Input>
          </Container>
          }
          <Flex>
            <LogOutBtn />
            {user &&
              <Container display={'flex'} align={'center'}>
              <Avatar alt={user.firstName} src={user.picUrl}></Avatar>
              </Container>}
          </Flex>
        </>
      )}
    </Flex>
  );
}