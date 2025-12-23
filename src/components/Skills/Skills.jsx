import { Container } from "react-bootstrap"
import Github from "./Github"
import Techstack from "./Techstack"
import Toolstack from "./Toolstack"

const Skills = () => {
    return (
        <section id="skills">
            {" "}
            <Container fluid className="about-section">
                <Container>
                    <h1 className="project-heading">
                        Professional <strong className="purple">Skillset </strong>
                    </h1>
                    <Techstack />
                    <h1 className="project-heading">
                        <strong className="purple">Tools</strong> I use
                    </h1>
                    <Toolstack />

                    <Github />
                </Container>
            </Container>

        </section>
    )
}

export default Skills
