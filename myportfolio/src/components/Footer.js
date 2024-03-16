import { Container, Col, Row, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socials from "./socials";
import "./styles/FooterStyle.css";

const Footer = () => {
    return (  
        <Container 
            fluid 
            className="p-3 bg-dark position-fixed bottom-0 start-0 w-100 border-top border-secondary">

            <Row className="justify-content-center">
                <Col xs="auto">
                    <Nav>
                        {socials.map(({ icon, url }) => (
                            <Nav.Link
                                href={url}
                                key={url}
                                target="_blank"
                                className="footer-icon">

                                <FontAwesomeIcon icon={icon} size="lg" />
                            </Nav.Link>
                        ))}
                    </Nav>
                </Col>
            </Row>
            <Row>
                <Col className="text-white text-center fs-6 mt-2">
                Anastasiia Alekseeva • © 2024
                </Col>
            </Row>
        </Container>
    );
}
 
export default Footer;