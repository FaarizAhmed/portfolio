import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/Robo.gif";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
    <Container>
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
          Get to <span className="purple"> know </span> me
          </h1>
          <p className="home-about-body">
            With a background in computer applications, <br /> I'm passionate about exploring emerging technologies.
            <br />
            <br />Well-versed in traditional languages such as
            <i>
              <b className="purple"> Python, Javascript, and SQL. </b>
            </i>
            <br />
            <br />
            My interests lie in building innovative <i><b className="purple">web technologies and products</b><br /></i> and exploring areas related to <b className="purple">blockchain</b>.
            <br />
            <br />
            Whenever possible, I leverage my skills to develop products using <b className="purple">Node.js</b> and modern JavaScript libraries and frameworks like <i><b className="purple">React.js and Next.js</b></i>.
          </p>
        </Col>
        <Col md={4} className="myAvtar">
          <Tilt>
          <img src={myImg} className="img-fluid rounded" alt="avatar" style={{ width: "220px", height: "250px" }} />
          </Tilt>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>Connect with me</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me on
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/FaarizAhmed"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/frizz_011"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/frizz/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          
          </ul>
        </Col>
      </Row>
    </Container>
  </Container>
  
  );
}
export default Home2;
