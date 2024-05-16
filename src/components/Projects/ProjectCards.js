import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai"; // Import the icon for the Whitepaper button

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{ maxHeight: "200px", overflow: "hidden" }}>
        <Card.Img src={props.imgPath} alt="card-img" style={{ width: "100%", height: "auto" }} />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ letterSpacing: "0px" }}>
          {props.description}
        </Card.Text>
        {/* Render tags */}
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          {props.tags && props.tags.map((tag, index) => (
            <Button
              key={index}
              variant="outline-primary"
              style={{ fontSize: "12px", padding: "5px 10px", marginRight: "5px", marginBottom: "5px", borderRadius: "20px" }}
            >
              {tag}
            </Button>
          ))}
        </div>
        {/* Render lang */}
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          {props.lang && props.lang.map((tag, index) => (
            <Button
              key={index}
              variant="outline-danger"
              style={{ fontSize: "11px", padding: "5px 10px", marginRight: "5px", marginBottom: "5px", borderRadius: "20px" }}
            >
              {tag}
            </Button>
          ))}
        </div>

        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        {props.whitepaperLink && (
          <Button
            variant="primary"
            href={props.whitepaperLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <AiOutlineFileText /> &nbsp;
            {"Whitepaper"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
