import { Container, Col, Row, Image } from "react-bootstrap";
import avatar from "../assets/avatar.jpg";

const greeting = "Hello, I'm Anastasiia!";
const bio1 = "A frontend developer";
const bio2 = "specialised in JavaScript, React";

const Home = () => {
    return (
        <div className="home-container"> 
            <Container fluid className="vh-100 d-flex flex-column justify-content-center align-items-center">
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
                        <h2 className="mb-5">{greeting}</h2>
                        <h1 className="mb-3">{bio1}</h1>
                        <h2>{bio2}</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Home;