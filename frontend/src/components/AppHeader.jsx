import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import {RiLogoutCircleRLine} from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const AppHeader = ({user,setUser}) => {
    const navigate = useNavigate();
    const handleLogout=()=>{
        window.localStorage.clear();
        setUser(null);
        navigate('/');
    }
    return (
        <>
            <Navbar variant="dark" fixed="top" style={{ width:'100%', height:'90px', backgroundColor: '#545c81', color: '#fff' , padding: '0px'}}>
                <Container>
                    <Navbar.Brand style={{width:'80%'}}>
                        <h2 style={{fontSize: '30px' }}>Logs Monitor</h2>
                    </Navbar.Brand>
                    {user && <>
                        <Nav className="me-auto" style={{color: 'white'}}>
                            <LinkContainer to="/logs">
                                <Nav.Link>Logs</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/dashboard">
                                <Nav.Link>Dashboard</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <RiLogoutCircleRLine onClick={handleLogout} size={20} cursor="pointer"/>
                        </Navbar.Collapse>
                        </>}
                </Container>
            </Navbar>
        </>
    )
}
export default AppHeader;