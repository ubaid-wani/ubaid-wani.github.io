import { Col, Row } from "react-bootstrap";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/mysql.png";
import SqlLi from "../../Assets/TechIcons/sqlite.svg";
import express from "../../Assets/TechIcons/expressjs.png";
import cloudflare from "../../Assets/TechIcons/cloudflare.svg";
import Elysia from "../../Assets/TechIcons/elysia.svg";
import Laravel from "../../Assets/TechIcons/laravel-svgrepo-com.svg";
import Tanstack from "../../Assets/TechIcons/tanstack.png";
import Figma from "../../Assets/TechIcons/figma.png";
import ThunderClient from "../../Assets/TechIcons/download.png";
import netlify from "../../Assets/TechIcons/netlify-svgrepo-com.svg";
import versel from "../../Assets/TechIcons/vercel-logo-svgrepo-com.svg";
import radixUI from "../../Assets/TechIcons/radixui.png";
import reactBootstrap from "../../Assets/TechIcons/reactbootstrap.svg";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={express} alt="Node" />
        <div className="tech-icons-text">Express.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Elysia} alt="Elysia.Js" />
        <div className="tech-icons-text">Elysia.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Laravel} alt="Laravel" />
        <div className="tech-icons-text">Laravel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tanstack} alt="Tanstack Query" />
        <div className="tech-icons-text">Tanstack Query</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">MySql</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SqlLi} alt="SQL" />
        <div className="tech-icons-text">SqlLite</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Figma} alt="tailwind" />
        <div className="tech-icons-text">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={reactBootstrap} alt="mui" />
        <div className="tech-icons-text">React Bootstap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="mui" />
        <div className="tech-icons-text">Material UI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={radixUI} alt="Radixui" />
        <div className="tech-icons-text">Radix UI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ThunderClient} alt="Thunder Client" />
        <div className="tech-icons-text">Thunder Client</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={versel} alt="Versel" />
        <div className="tech-icons-text">Versel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={netlify} alt="Netlify" />
        <div className="tech-icons-text">Netlify</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={cloudflare} alt="Cloudflare" />
        <div className="tech-icons-text">Cloudflare</div>
      </Col>
    </Row>
  );
}

export default Techstack;
