import React, { useContext, useState } from 'react'
import styled from "styled-components"
import { Flex, Logo, Input, FlexContainer, Container, Title, Form, InputGrid } from '../components/UserInterface/MainComp'
import { Button } from '../components/UserInterface/Button'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import AuthContext from '../context/AuthContext'
import RuthLogo from '../img/logo.svg'


export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { getLoggedIn } = useContext(AuthContext)
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
        <FlexContainer marginTop={"1em"}>
            <Container
                padding={"1em"}
                width={"50vw"}
                display={"grid"}
                gridTemplateColumns={"1fr 1fr"}
                bgColor={"white"}
                bRadius={"10px"}
                bgProps={"white no-repeat right/50% 100% url(https://img3.goodfon.com/original/1920x1080/4/4e/buildings-skyscrapers-b-w.jpg)"}
            >
                <Container
                    padding={"1em"}
                >
                    <Title fontFamily={"Lora, serif"}>Login</Title>
                    <p>log in with your data that you entered during your registration</p>
                    <div>
                        <Form onSubmit={login}>
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
                            <Button
                                primary
                                width={"100%"}
                                type="submit">Login</Button>
                            <Link to="/register">
                                <Button
                                    width={"100%"}
                                >Register</Button>
                            </Link>

                        </Form>
                    </div>
                </Container>
                <Container
                >
                    <Flex align={"center"} direction={"column"}>
                        <div>
                            <h2>Welcome</h2>
                        </div>
                        <div>
                            <Logo src={RuthLogo} width={"8em"} alt="Logo"></Logo>
                        </div>
                    </Flex>
                </Container>

            </Container>
        </FlexContainer>
    )
}