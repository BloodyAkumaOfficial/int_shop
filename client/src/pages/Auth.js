import React, {useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        if (isLogin) {
            const response = await login(email, password)
        } else {
            const response = await registration(email, password)
            console.log(response);
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card
                style={{width: 600}}
                className="p-5"
            >
                <h2 className="m-auto">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Type your email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Type your password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <Row className="d-flex justify-content-between mt-3 p-lg-3 p-rg-3">
                        {isLogin ?
                            <div>
                                Don`t have an account? <NavLink to={REGISTRATION_ROUTE}>Sign Up!</NavLink>
                            </div>
                            :
                            <div>
                                Do you have an account? <NavLink to={LOGIN_ROUTE}>Sign In!</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                            className='mt-2'
                            onClick={click}
                        >
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;