import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm  <span className="purple">Vinod Kuril </span>
            a fourth-year CS student from <span className="purple"> India.</span>
            <br /> I am a software developer and Competitive Programmer 
            <br /> As a software developer, I enjoy building solutions that have a meaningful impact on the world.
            <br />
            I usually work on <span className="purple">Web development</span> and  <span className="purple">Machine Learning</span>  Project.
            <br /> <br/>
            I believe in <span className="purple">public learning</span>, and I am constantly eager to learn new things and enjoy sharing what I have learned with others. I love <span className="purple"> interacting with folks </span>and helping community members is what I like to do daily.
            <br />
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
           
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vinod Kuril</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
