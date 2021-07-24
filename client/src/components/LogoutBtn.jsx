import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import  AuthContext  from '../context/AuthContext'
import { StyledLogOut } from './UserInterface/LinkStyle';

export function LogOutBtn() {

    const { getLoggedIn } = useContext(AuthContext);

    const history = useHistory()

    async function logout() {
        await axios.get('http://localhost:5000/auth/logout')
        getLoggedIn()
        history.push("/")

    }


    return (
        <StyledLogOut onClick={logout}></StyledLogOut>
    )
}