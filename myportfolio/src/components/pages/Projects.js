import { Card, Row, Button } from "react-bootstrap";
import projects from "./progectsList";
import BtnGitHub from "./BtnGitHub";

const Projects = () => {
    return (  
        <div className="d-flex bg-dark bg-gradient justify-content-center align-items-center p-5 mt-5 mb-5">
                
            <Row xs={1} md={2} lg={3} className="d-flex flex-wrap">
                {projects.map((project, idx) => (
                    <div key={idx} className="mb-4">
                        <Card className="bg-dark h-100 mb-3 border-secondary">
                            <Card.Title className="text-center text-light p-3 fw-bold fs-4">
                                {project.title}
                            </Card.Title>

                            <Card.Img 
                                src={project.img} 
                                style={{ 
                                    width: "90%", 
                                    height: "16rem",
                                    margin: "auto", 
                                    borderRadius: "0.4rem",
                                    objectFit: "cover"
                                }} 
                            />

                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <Card.Text className="mr-2 mb-0 p-2 fs-5 text-info">
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