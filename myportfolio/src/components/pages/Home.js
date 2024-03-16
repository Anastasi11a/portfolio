import { Button, Container, Col, Row, Image } from "react-bootstrap";
import avatar from "../assets/avatar.jpg";
import { itemStyles } from "../styles";

const greeting = "Hello, I'm Anastasiia!";
const bio1 = "A frontend developer";
const bio2 = "specialised in JavaScript, TypeScript, React";

const Home = () => {
    return (
        <Container fluid style={itemStyles.containerHome}>
            <Row>
                <Col style={itemStyles.colHome}>
                    <Image 
                        src={avatar} 
                        alt="My Avatar"
                        fluid
                        roundedCircle
                        style={{ maxWidth: "10rem" }}
                    />
                </Col>
            </Row>
            <Row>
                <Col className="text-center mb-5">
                    <h2 style={itemStyles.header}>{greeting}</h2>
                    <p style={itemStyles.bio1}>{bio1}</p>
                    <p style={itemStyles.bio2}>{bio2}</p>

                    <Button 
                        href="#"
                        variant="outline-info"
                        style={itemStyles.btn}>
                        Download CV
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Home;