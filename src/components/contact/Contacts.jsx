import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { socialLinks } from "../../data/data";
import SocialIcon from "../Icons/SocialIcon";

const Contacts = () => {
    return (
        <section id="contact">
            <Container>
                <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
                    <Col md={12} className="text-white">
                        <h1>Find Me On</h1>
                        <p>
                            Feel free to <span className="text-heading">connect </span>with me
                        </p>
                        <ul className="flex justify-center items-center gap-8 list-none p-0">
                            <SocialIcon href={socialLinks.github} icon={AiFillGithub} />
                            <SocialIcon href={socialLinks.linkedin} icon={FaLinkedinIn} />
                            <SocialIcon href={socialLinks.instagram} icon={AiFillInstagram} />
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contacts;
