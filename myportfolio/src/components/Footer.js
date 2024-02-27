import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
    return (  
        <Container 
            fluid 
            className="p-3 bg-dark position-absolute bottom-0 start-0">
            <Row>
                <Col className="text-white text-center fs-6">
                    Alekseeva Anastasiia • © 2024
                </Col>
            </Row>
        </Container>
    );
}
 
export default Footer;