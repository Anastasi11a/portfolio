import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socials from './socials';
import { btnEffects, itemStyles } from './styles';

const Header = () => {
    return (
        <Navbar 
            collapseOnSelect 
            fixed="top"
            expand="sm" 
            data-bs-theme="dark" 
            style={itemStyles.navbarStyle}>

            <Container fluid>
                <Navbar.Brand style={itemStyles.brandStyle}>
                    Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse 
                    id="responsive-navbar-nav" 
                    style={itemStyles.collapseSlyle}>
                        
                    <Nav defaultActiveKey='/portfolio/'>
                        <Nav.Link 
                            as={Link} 
                            href="#portfolio" 
                            to="/portfolio/" 
                            className="me-3">
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="#portfolio/projects"
                            to="/portfolio/projects" 
                            className="me-3">
                            Projects
                        </Nav.Link>

                        <NavDropdown 
                            title="Contact" 
                            id="collapsible-nav-dropdown">

                            {socials.map(({ icon, url }) => (
                                <NavDropdown.Item 
                                    href={url}
                                    key={url}
                                    target="_blank"
                                    style={itemStyles.btnStyleHeader}
                                    onMouseEnter={btnEffects.btnHoverEffect}
                                    onMouseLeave={btnEffects.btnLeaveEffect}>

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