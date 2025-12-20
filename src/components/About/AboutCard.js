import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="blue">Ubaid Ashraf Wani</span>{" "}
            from <span className="blue">Srinagar, Jammu & Kashmir</span>.
            <br />
            I hold a Bachelor's degree in{" "}
            <span className="blue">Electronics and Communication Engineering</span>{" "}
            from <span className="blue">University of Kashmir</span>.
            <br />
            <br />
            I’m currently working as an{" "}
            <span className="blue">SDE-I (Software Engineer)</span> at{" "}
            <span className="blue">Eonyx Infotech</span>.
            <br />
            <br />
            Outside of coding, I enjoy activities that keep me active and entertained:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
          </ul>

          <p className="primary-2">
            "Keep building. Keep improving. Keep moving forward."
          </p>
          <footer className="blockquote-footer">Ubaid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
