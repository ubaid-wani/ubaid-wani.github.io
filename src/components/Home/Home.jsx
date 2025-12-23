import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";
import dp from "../../Assets/dp.jpeg"

const Home = () => {
  return (
    <section id="Home">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> UBAID WANI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={dp}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="dp-wrapper">
                <img
                  src={dp}
                  alt="home pic"
                  className="img-fluid dp-image"
                  style={{ maxHeight: "450px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
