import React, { useContext, useState } from 'react'
import { Flex, Logo, Input, FlexContainer, Container, Title, Form } from '../components/UserInterface/MainComp'
import { Button } from '../components/UserInterface/Button'
import { H4 } from '../components/UserInterface/Headings'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import AuthContext from '../context/AuthContext'


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
                padding={"3em"}
                width={"70vw"}
                height={"70vh"}
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
                            <Container>
                                <Container margin={"1.2em 0em"}>
                                    <H4 fontColor={"#616161"} margin>Enter Email</H4>
                                    <Input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        value={email}
                                        placeholder="Enter Username"></Input>
                                </Container>
                                <Container margin={"1.2em 0em"}>
                                <H4 fontColor={"#616161"} margin>Enter Email</H4>
                                    <Input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter Username"></Input>
                                </Container>
                            </Container>
                            <Button
                                primary
                                width={"100%"}
                                type="submit">Login</Button>
                            <Link to="/register">
                                <Button
                                    width={"100%"}
                                >Register</Button>
                            </Link>
                            <Flex justify={"center"}>
                                <a>Forgot Password? </a>
                            </Flex>
                        </Form>
                    </div>
                </Container>
                <Container
                >
                    <Flex align={"center"} direction={"column"}>
                        <div>
                            <h2>Welcome to Ruth.io</h2>
                        </div>
                    </Flex>
                </Container>
            </Container>
        </FlexContainer>
    )
}