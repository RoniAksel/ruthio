import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Projects } from './pages/Projects'
import { Panes, Pane } from './components/Panes'
import AuthContext from './context/AuthContext'
import { SideNav } from './components/SideNav'
import { Home } from './pages/Home'
import { Tasks } from './pages/Tasks'
import { Project } from './pages/Project'


export function Router() {
    const { loggedIn } = useContext(AuthContext)
    return (
        <BrowserRouter>
            <Switch>
                {loggedIn === false && (
                    <Route exact path="/">
                        <Login />
                    </Route>

                )}
                {loggedIn === true && (
                    <>
                        <Panes>
                            <Pane
                                body={<SideNav />}
                                width={'15%'}
                                minWidth={'300px'}
                            >
                            </Pane>
                            <Pane
                                header={
                                    <Navbar />
                                }
                                body={
                                    <>
                                        <Route exact path="/">
                                            <Home />
                                        </Route>
                                        <Route path="/projects">
                                            <Projects />
                                        </Route>
                                        <Route path="/tasks">
                                            <Tasks />
                                        </Route>
                                        <Route path="/project">
                                            <Project />
                                        </Route>
                                    </>
                                }
                                width={'85%'}
                            >
                            </Pane>
                        </Panes>
                    </>

                )}
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

                {/* {loggedIn === true && (
                    <>
                        <Route path="/projects">
                            <>
                                <Panes>
                                    <Pane
                                        body={<SideNav />}
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
                        </Route>
                        <Route path="/tasks">
                            <>
                                <Panes>
                                    <Pane
                                        body={<SideNav />}
                                        width={'15%'}
                                        minWidth={'300px'}
                                    >
                                    </Pane>
                                    <Pane
                                        header={
                                            <Navbar />
                                        }
                                        body={
                                            <Tasks />
                                        }
                                        width={'85%'}
                                    >
                                    </Pane>
                                </Panes>
                            </>
                        </Route>
                    </>
                )} */}
            </Switch>
        </BrowserRouter>
    );
}
