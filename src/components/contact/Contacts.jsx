import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    // AiOutlineTwitter,
    AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { socialLinks } from "../../data/data";

const Contacts = () => {
    return (
        <section id="contact">
            <Container>
                <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
                    <Col md={12} className="home-about-social">
                        <h1>Find Me On</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href={socialLinks.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            {/* <li className="social-icons">
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li> */}
                            <li className="social-icons">
                                <a
                                    href={socialLinks.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href={socialLinks.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contacts;
