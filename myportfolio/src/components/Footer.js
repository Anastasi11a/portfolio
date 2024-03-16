import { Container, Col, Row, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socials from "./socials";
import { btnEffects, itemStyles } from "./styles";

const Footer = () => {
    return (  
        <Container fluid style={itemStyles.containerFooter}> 
            <Row style={itemStyles.rowFooter}>
                <Col xs="auto">
                    <Nav>
                        {socials.map(({ icon, url }) => (
                            <Nav.Link
                                href={url}
                                key={url}
                                target="_blank"
                                style={itemStyles.btnStyle}
                                onMouseEnter={btnEffects.btnFooterHoverEffect}
                                onMouseLeave={btnEffects.btnFooterLeaveEffect}>

                                <FontAwesomeIcon icon={icon} size="lg" />
                            </Nav.Link>
                        ))}
                    </Nav>
                </Col>
            </Row>
            <Row>
                <Col style={itemStyles.textFooter}>
                Anastasiia Alekseeva • © 2024
                </Col>
            </Row>
        </Container>
    );
}
 
export default Footer;