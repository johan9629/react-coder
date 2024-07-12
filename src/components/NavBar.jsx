import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CarWidget } from "./CartWidget"



export const NavBar = ()=> {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                <Navbar.Brand href="#home">NOXUS</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#features">Productos</Nav.Link>
                    <Nav.Link href="#pricing">Politicas</Nav.Link>
                </Nav>
                <CarWidget/>
                </Container>
            </Navbar>

    </>
    )
}