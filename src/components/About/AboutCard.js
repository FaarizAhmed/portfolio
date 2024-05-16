import React from "react";
import Card from "react-bootstrap/Card";
import { FiActivity } from "react-icons/fi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hope you are doing good by gods grace!<br /><br />
            Hey Everyone, I'm <span className="purple">Faariz Ahmed </span>.
            <br />
            With a background in computer applications,<br /> I'm passionate about exploring emerging technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do include!
          </p>
          <ul>
            <li className="about-activity">
              <FiActivity /> Playing Games
            </li>
            <li className="about-activity">
              <FiActivity /> Cooking
            </li>
            <li className="about-activity">
              <FiActivity /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
           "Embrace trial and error; it's the journey to mastery. <br />Each iteration, no matter how small, contributes to refining your craft <br />and getting 1% better every day."{" "}
          </p>
          <footer className="blockquote-footer">Faariz Ahmed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
