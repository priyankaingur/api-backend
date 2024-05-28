import { useState } from "react";
import loginService from "../Services/login"
import {Button, Container, Row, Col} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Auth from "../utility/constants/AuthConstants.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {setAuthUser} from '../Redux/authReducer.js';
import CryptoJS from 'crypto-js';
const Login = ({ setError, setUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const loggedIn = (user) => {
        window.localStorage.setItem(
            Auth.TOKEN_AUTH_KEY, JSON.stringify(user)
        )
        setUser(user);
        setUsername('');
        setPassword('');
        navigate("/logs");
        dispatch(setAuthUser(user));
    }
    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username,
                password: CryptoJS.AES.encrypt(password, Auth.SECRET).toString()
            })
            
            if (user.canAccess) {
                loggedIn(user);
            } else {
                setErrorMsg({ msg: "Request admin for access", variant: 'danger' });
            }

        } catch (exception) {
            console.log(exception)
            setErrorMsg({ msg: "Please enter correct username or password", variant: 'danger' })
        }
    }
    const setErrorMsg = (msg) => {
        setError(msg)
        setTimeout(() => {
            setError(null)
        }, 5000)
    }

    return (
        <Container fluid className="login-form-container" style={{ marginTop: '10%' }} >
            <h2 className="loginLabel">Login</h2>
            <Form onSubmit={handleLogin} className="my-2">
                <Form.Group controlId="formBasicEmail" className="my-2">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        name="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    /></Form.Group>
                <Form.Group controlId="formBasicPassword" className="my-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Row>
                    <Col className="text-center">
                        <Button
                            style={{
                                backgroundColor: 'rgb(84, 92, 129)',
                                color: 'rgb(255, 255, 255)'
                            }}
                            variant="rgb(84, 92, 129)"
                            type="submit" className="my-3">
                            Sign in
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>)
};

export default Login;