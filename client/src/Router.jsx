import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Projects } from './pages/Projects'
import AuthContext from './context/AuthContext'


export function Router() {
    const { loggedIn } = useContext(AuthContext)
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {loggedIn === false && (
                        <Login/>
                    )}
                    {loggedIn === true && (
                        <Navbar />
                    )}
                </Route>
                {loggedIn === false && (
                    <>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </>
                )}

                {loggedIn === true && (
                    <>
                    <Navbar />

                        <Route path="/project">
                            <Projects />
                        </Route>
                    </>
                )}
            </Switch>
        </BrowserRouter>
    );
}
