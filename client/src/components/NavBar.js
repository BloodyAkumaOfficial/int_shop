import React, {useContext} from 'react';
import {Context} from "../index";
import {Navbar, Container, Nav, Button} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer( () => {
    const {user} = useContext(Context);
    const history = useHistory()

    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>My Online Shop</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button
                                variant={'outline-light'}
                                onClick={() => history.push(ADMIN_ROUTE)}
                            >
                                Admin Panel
                            </Button>
                            <Button
                                variant={'outline-light'}
                                className="mx-lg-3"
                                onClick={() => {
                                    history.push(LOGIN_ROUTE);
                                    user.setIsAuth(false);
                                }}
                            >
                                Log Out
                            </Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Sign in</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
    );

});

export default NavBar;