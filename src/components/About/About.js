import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="justify-content-center align-items-center" style={{ padding: "10px" }}>
          <Col md={7} style={{ paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingBottom: "50px" }} className="text-center">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
            </h1>
            <Techstack />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            <Toolstack />
          </Col>
        </Row>
        <Row>
          <Col>
            <Github />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
