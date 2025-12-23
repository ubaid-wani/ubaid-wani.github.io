import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "../Skills/Github";
// import Techstack from "../Skills/Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/About.svg";
// import Toolstack from "../Skills/Toolstack";

const About = () => {
  return (
    <>
      <section id="about">
        {" "}
        <Particle />
        <Container fluid className="about-section">
          <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
              >
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  Know Who <strong className="purple">I'M</strong>
                </h1>
                <Aboutcard />
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img src={laptopImg} alt="about" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
}

export default About;
