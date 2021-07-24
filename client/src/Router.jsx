import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Projects } from './pages/Projects'
import { Panes, Pane } from './components/Panes'
import AuthContext from './context/AuthContext'
import { SideNav } from './components/SideNav'


export function Router() {
    const { loggedIn } = useContext(AuthContext)
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {loggedIn === false && (
                        <Login />
                    )}
                    {loggedIn === true && (
                        <>
                            <Panes>
                                <Pane
                                    body={<SideNav/>}
                                    width={'15%'}
                                    minWidth={'300px'}
                                >
                                </Pane>
                                <Pane
                                    header={
                                        <Navbar />
                                    }
                                    body={
                                        <Projects />
                                    }
                                    width={'85%'}
                                >
                                </Pane>
                            </Panes>
                        </>

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
