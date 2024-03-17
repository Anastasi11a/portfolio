import { Card, Row } from "react-bootstrap";
import projects from "./progectsList";
import BtnGitHub from "./BtnGitHub";
import { itemStyles } from "../styles";

const Projects = () => {
    return (  
        <div style={itemStyles.containerProjects}>
            <Row xs={1} md={2} lg={3} className="d-flex flex-wrap">
                {projects.map((project, idx) => (
                    <div key={idx} className="mb-4">
                        <Card style={itemStyles.card}>
                            <Card.Title style={itemStyles.cardTitle}>
                                {project.title}
                            </Card.Title>

                            <Card.Img 
                                src={project.img} 
                                style={itemStyles.cardImg} 
                            />

                            <Card.Body style={itemStyles.cardBody}>
                                <Card.Text style={itemStyles.cardText}>
                                    {project.skills}
                                </Card.Text>
                                <BtnGitHub link={project.gitHubLink} />
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Row>
        </div>
    );
}
 
export default Projects;