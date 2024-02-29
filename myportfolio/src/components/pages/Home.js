import { Link } from "react-router-dom";
import { Button, Container, Col, Row, Image } from "react-bootstrap";
import avatar from "../assets/avatar.jpg";

const greeting = "Hello, I'm Anastasiia!";
const bio1 = "A frontend developer";
const bio2 = "specialised in JavaScript, React";

const Home = () => {
    return (
        <div className="home-container"> 
            <Container fluid className="vh-100 d-flex flex-column bg-dark bg-gradient justify-content-center align-items-center">
                <Row>
                    <Col className="text-center mb-4">
                        <Image 
                            src={avatar} 
                            alt="My Avatar"
                            fluid
                            roundedCircle
                            style={{ maxWidth: "200px" }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mb-5">
                        <h2 className="mb-5 fs-3 text-light">{greeting}</h2>
                        <p className="mb-3 fs-1 fw-bold text-info">{bio1}</p>
                        <p className="mb-3 fs-2 fw-bold text-light">{bio2}</p>

                        <Button 
                            href="#"
                            variant="outline-info"
                            className="mt-4 mb-4">
                            Download CV
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Home;