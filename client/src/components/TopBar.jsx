import React, { useEffect } from 'react';
import { Container } from './UserInterface/MainComp';
import { BlackColors, Colors } from './UserInterface/Styles';
import RuthLogo from '../img/ruthlogo.png'
import { Logo } from './UserInterface/MainComp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../services';
import { Avatar } from '@material-ui/core';
import { LogOutBtn } from './LogoutBtn';

export function TopBar() {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(getUser())
    }, []);


    return (
        <>
            <Container
                width={"100%"}
                bgColor={BlackColors.white}
                style={{ height: "4.25rem", position:"sticky", top:"0", zIndex:"9999"}}
                margin={"0"}
                padding={"0"}
            >
                <Container
                    style={{ height: "100%" }}
                    padding={"0px 20px"}
                    display={"flex"}
                    justify={"space-between"}
                    align={"center"}
                >
                    <Container>
                        <Logo src={RuthLogo} width={"8em"} alt="Logo" style={{ marginTop: "1em" }}></Logo>
                    </Container>
                    <Container display={"flex"} align={"center"}>
                        <Avatar alt={user.firstName} src={user.picUrl}></Avatar>
                        <NotificationsIcon style={{ color: BlackColors.light, margin: "0.25rem" }} />
                        <SettingsIcon style={{ color: BlackColors.light, margin: "0.25rem" }} />
                        <LogOutBtn />
                    </Container>
                </Container>
            </Container>
        </>
    );
}
