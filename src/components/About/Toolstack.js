import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiNotion, SiVercel } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { FaEthereum } from "react-icons/fa";
import { BsTable } from "react-icons/bs"; // Tableau icon
import { SiPowerbi } from "react-icons/si"; // PowerBI icon
import { SiMicrosoftexcel } from "react-icons/si"; // Excel icon

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
        >
          <SiVisualstudiocode style={{ color: "#007ACC" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.notion.so/" target="_blank" rel="noreferrer">
          <SiNotion style={{ color: "white" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://remix.ethereum.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            height="50"
            src="https://www.archblock.com/poland/assets/images/clients/remix.svg"
            alt="Remix"
          />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://vercel.com/" target="_blank" rel="noreferrer">
          <SiVercel style={{ color: "#000000" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          <DiGit style={{ color: "#F05032" }} />
        </a>
      </Col>
      {/* Tableau icon */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.tableau.com/" target="_blank" rel="noreferrer">
          <BsTable style={{ color: "#52B3D9" }} />
        </a>
      </Col>
      {/* PowerBI icon */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://powerbi.microsoft.com/" target="_blank" rel="noreferrer">
          <SiPowerbi style={{ color: "#F2C811" }} />
        </a>
      </Col>
      {/* Excel icon */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.microsoft.com/en-us/microsoft-365/excel" target="_blank" rel="noreferrer">
          <SiMicrosoftexcel style={{ color: "#1D6F42" }} />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
