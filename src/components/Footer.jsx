import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { socialLinks } from "../data/data";
import { Flex, Span } from "./general/BaseComponents";
import { FaHeart } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer z-3">
      <Row>
        <Col md="4" className="footer-copywright">
          <Flex className="text-white gap-1 justify-center">
            <Span>Crafted with</Span>
            <FaHeart className="text-heading" />
            <Span>by Ubaid Ashraf Wani</Span>
          </Flex>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} UW</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={socialLinks.github}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={socialLinks.linkedin}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={socialLinks.instagram}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
