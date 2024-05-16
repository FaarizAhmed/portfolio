import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiPostgresql,
  DiMysql,
  DiHtml5,
  DiCss3Full,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";
import { SiHtml5, SiCss3 } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.python.org/" target="_blank" rel="noreferrer">
        <img height="50" width="50" src="https://img.icons8.com/color/48/000000/python.png" alt="Python" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer">
          <DiHtml5 style={{ color: "#E34F26" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
        <img height="50" width="50" src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
      <img height="50" width="50" src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
          <DiNodejs style={{ color: "#68A063" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <DiReact style={{ color: "#61DAFB" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
        <SiNextdotjs style={{ color: "#000000" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://soliditylang.org/" target="_blank" rel="noreferrer">
          <SiSolidity style={{ color: "#363636" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
      <img height="50" width="50" src="https://img.icons8.com/color/48/000000/sql.png" alt="SQL" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <DiMongodb style={{ color: "#47A248" }} />
        </a>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql style={{ color: "#336791" }} />
      </Col> */}
    </Row>
  );
}

export default Techstack;
