import React, { useContext, useState } from 'react'
import styled from "styled-components"
import { Button, Input, FlexContainer, Container, Title, Form, InputGrid } from '../components/UserInterface/MainComp'
import axios from "axios"
import { useHistory } from 'react-router';
import  AuthContext  from '../context/AuthContext'


export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthContext)
    const history = useHistory()

    async function login(e) {
        e.preventDefault()
        try {
            const loginData = {
                email,
                password,
            };
            await axios.post("http://localhost:5000/auth/login", loginData)
            await getLoggedIn();
            history.push("/")

        } catch (err) {
            console.error(err)
        }
    }
    return (
        <FlexContainer>
            <Container>
                <Title>Login</Title>
                <div>
                    <Form onSubmit={login}>
                        <FlexContainer>
                        </FlexContainer>
                        <div>
                            <label>Enter Email</label>
                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                value={email}
                                placeholder="Enter Username"></Input>
                            <div>
                                <label>Enter Password</label>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter Username"></Input>
                            </div>
                        </div>
                        <Button type="submit">Register</Button>
                    </Form>
                </div>
            </Container>
        </FlexContainer>
    )
}