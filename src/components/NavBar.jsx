import Container from 'react-bootstrap/Container';
import noxus from "../assets/img/Logo.jpeg";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CarWidget } from "./CartWidget"
import { NavLink } from 'react-router-dom';



export const NavBar = ()=> {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                <Navbar.Brand as={NavLink} to="/"><img src={noxus} height={40} alt="logo noxus" /></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/category/caballero">Caballero</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/dama">Dama</Nav.Link>
                </Nav>
                <CarWidget/>
                </Container>
            </Navbar>
        </>
    )
}