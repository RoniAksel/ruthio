import React, { useState } from 'react'
import styled from "styled-components"
import { Button, Input, FlexContainer, Container, Title, Form, InputGrid } from '../components/UserInterface/MainComp'
import axios from "axios"
import { SketchPicker } from 'react-color'


export function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    async function register(e) {
        e.preventDefault()
        try {
            const registerData = {
                email,
                password,
                passwordVerify,
                firstName,
                lastName
            };
            await axios.post("http://localhost:5000/auth", registerData)

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <FlexContainer>
            <Container>
                <Title>Register</Title>
                <div>
                    <Form onSubmit={register}>
                        <FlexContainer>
                        </FlexContainer>
                        <div>
                            <label>Enter Email</label>
                            <Input
                                onChange={(e)=> setEmail(e.target.value)}
                                type="email"
                                value={email}
                                placeholder="Enter Username"></Input>
                        </div>
                        <InputGrid>
                            <div>
                                <label>Enter Password</label>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                    placeholder="Enter Username"></Input>
                            </div>
                            <div>
                                <label>Verify Password</label>
                                <Input
                                    type="password"
                                    value={passwordVerify}
                                    onChange={(e)=> setPasswordVerify(e.target.value)}
                                    placeholder="Enter Email Address"></Input>
                            </div>
                        </InputGrid>

                        <InputGrid>
                            <div>
                                <label>Enter First Name</label>
                                <Input
                                    type="text"
                                    value={firstName}
                                    onChange={(e)=> setFirstName(e.target.value)}
                                    placeholder="Enter First Name"
                                ></Input>
                            </div>
                            <div>
                                <label>Enter Last Name</label>
                                <Input
                                    type="text"
                                    value={lastName}
                                    onChange={(e)=> setLastName(e.target.value)}
                                    placeholder="Enter Last Name"></Input>
                            </div>
                        </InputGrid>
                        <Button type="submit">Register</Button>
                    </Form>
                </div>
            </Container>
        </FlexContainer>
    )
}