import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socials from './socials';
import "./styles/HeaderStyle.css";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" fixed="top" className="px-4 border-bottom border-secondary">
            <Container fluid>
                <Navbar.Brand href="#home" className="fs-3 me-auto text-info fw-bold">
                    Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end me-4 fs-5">
                    <Nav defaultActiveKey='/'>
                        <Nav.Link href="/" className="header-link me-3">Home</Nav.Link>
                        <Nav.Link href="/projects" className="header-link me-3">Projects</Nav.Link>

                        <NavDropdown 
                            title="Contact" 
                            id="collapsible-nav-dropdown" 
                            bg="dark" 
                            data-bs-theme="dark">

                            {socials.map(({ icon, url }) => (
                                <NavDropdown.Item 
                                    href={url}
                                    key={url}
                                    className="header-icon"
                                    target="_blank"
                                    rel="noopener noreferrer">

                                    <FontAwesomeIcon icon={icon} size="2x" />
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default Header;