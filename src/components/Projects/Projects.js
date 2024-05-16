import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eminem from "../../Assets/Projects/Eminem.webp";
import editor from "../../Assets/Projects/CLogo.png";
import chatify from "../../Assets/Projects/ClashB.webp";
import KEY from "../../Assets/Projects/kEY.webp";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "20px" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "20px", letterSpacing: "0px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eminem}
              isBlog={false}
              title="MEME COIN - Landing Page"
              description="Single-page landing site showcasing token charts, social links, and graphics for a innovative meme coin project."
              demoLink="https://eminemcro.vercel.app/"
              imgSize="200px" // Set the desired size for the image
              tags={["BlockChain", "Cronos"]}
              lang={["Next.js", "ReactJs", "JavaScript","TailwindCss"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ClashVerse"
              description="Innovative game marketplace and DApp that bridges Discord and Blockchain. Seamlessly integrates with ClashCity's gaming ecosystem and offers rich web-based features."
              demoLink="https://clash-verse.vercel.app/"
              imgSize="200px" // Set the desired size for the image
              tags={["Web 3.0 Dapp", "GameFi"]}
              lang={["Next.js", "Next-Auth", "MongoDb", "Node.js", "ReactJs", "TailwindCss", "Wagmi"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KEY}
              isBlog={false}
              title="NFT Minting Dapp and Exchange"
              description="A feature of the ClashVerse Dapp for Minting ERC721 NFTs along with an Exchange for swapping crypto ($CRO) for in-game currency (RELICS)."
              demoLink="https://clash-verse.vercel.app/dashboard/K2C"
              imgSize="200px" // Set the desired size for the image
              tags={["NFTs", "Exchange / Swap","Cronos Blockchain"]}
              lang={["Wagmi", "Solidity"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ClashCity"
              description="It's a Discord Thing For Discord People! A comprehensive Discord gaming ecosystem featuring a store, auctions, and robust management features. Engage in thrilling in-game activities like racing, plundering, shopping, and monster battles & so much more Join the Fun."
              whitepaperLink="https://clash-city.gitbook.io/clash-city"
              demoLink="https://discord.com/invite/clash-city-923262570540974110"
              imgSize="200px" // Set the desired size for the image
              tags={["Discord", "GameFi"]}
              lang={["Discordjs", "Node.js", "MongoDb", "JavaScript"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
