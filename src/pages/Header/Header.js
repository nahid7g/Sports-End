import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Sports End</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            user ?
                                (
                                    <>
                                        <Nav.Link as={Link} to="/manage-inventory">Manage Inventory</Nav.Link>
                                        <Nav.Link as={Link} to="/add-new-item">Add New Item</Nav.Link>
                                        <button onClick={handleLogout}>Logout</button>
                                    </>
                                )
                                :
                                (
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;