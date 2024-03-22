import { Card, Col, Row } from "react-bootstrap";
import projects from "./progectsList";
import BtnGitHub from "../btn-links/BtnGitHub";
import { itemStyles, btnEffects } from "../styles";

const Projects = () => {
    return (  
        <div style={itemStyles.containerProjects}>
            <Row xs={1} md={2} lg={3} className="d-flex flex-wrap">
                {projects.map((project, idx) => (
                    <div key={idx} className="mb-4">
                        <Card style={itemStyles.card}>
                            <Card.Body style={itemStyles.cardBody}>
                                <Card.Link 
                                    href={project.visitLink}
                                    target='_blank' 
                                    style={itemStyles.cardLink}
                                    onMouseEnter={btnEffects.btnHoverEffect}
                                    onMouseLeave={btnEffects.btnLeaveEffect}>

                                    <Card.Title 
                                        title='Visit site'
                                        style={itemStyles.cardTitle}>
                                        {project.title}
                                    </Card.Title>
                                    <Card.Img 
                                    fluid 
                                    title='Visit site'
                                    src={project.img} 
                                    style={itemStyles.cardImg}/>
                                </Card.Link>
                            </Card.Body>
                            <Card.Body style={itemStyles.cardBody}>
                                <Card.Text style={itemStyles.cardText}>
                                    <Col>Description:</Col>
                                    <Col style={itemStyles.skillsTxt}>{project.description}</Col>
                                    <Col>Features:</Col>
                                    <Col style={itemStyles.skillsTxt}>{project.features}</Col>
                                    <Col>Technologies used:</Col>
                                    <Col style={itemStyles.skillsTxt}>{project.skills}</Col>
                                    <Row>
                                        <Col>
                                            GitHub repository: <span><BtnGitHub link={project.gitHubLink} /></span>
                                        </Col>
                                    </Row>
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Row>
        </div>
    );
}
 
export default Projects;