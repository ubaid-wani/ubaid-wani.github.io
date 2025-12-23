import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { projectData } from "../../data/data";

const Projects = () => {
  return (
    <section id="project">
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projectData.map((project) => (
              <Col md={4} className="project-card" key={project.id}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;
