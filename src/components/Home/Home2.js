import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

const Home2 = () => {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							LET ME <span className="blue"> INTRODUCE </span> MYSELF
						</h1>

						<p className="home-about-body">
							I’m a passionate{" "}
							<i>
								<b className="blue">Software Engineer with 2.5 years of experience</b>
							</i>{" "}
							specializing in{" "}
							<i>
								<b className="blue">full-stack web development.</b>
							</i>
							<br />
							<br />
							I build{" "}
							<i>
								<b className="blue">scalable, high-performance web applications</b>
							</i>{" "}
							with a strong focus on robust backend systems and modern, user-friendly interfaces.
							<br />
							<br />
							I primarily work with{" "}
							<i>
								<b className="blue">React.js, Node.js and Bun </b>
							</i>
							, and I also use{" "}
							<i>
								<b className="blue">Laravel</b>
							</i>{" "}
							for backend services when required. I’m comfortable working with{" "}
							<i>
								<b className="blue">SQL databases</b>
							</i>{" "}
							and use{" "}
							<i>
								<b className="blue">Figma</b>
							</i>{" "}
							to design and translate interface concepts into polished, production-ready UIs.
						</p>


					</Col>

					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Home2;
