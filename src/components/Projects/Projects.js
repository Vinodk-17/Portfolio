import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.jpeg";
// import emotion from "../../Assets/Projects/emotion.png";
import lpp from "../../Assets/Projects/lpp.jpeg";
import SHAREME from "../../Assets/Projects/SHAREME.png";
import EXPENSE from "../../Assets/Projects/EXPENSE.png";
import celeb from "../../Assets/Projects/Celeb.jpeg";
import TT from "../../Assets/Projects/TT.jpeg";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EXPENSE}
              isBlog={false}
              title="Expense-Income Tracker"
              description="My personal Expense-Tracker ReactJS web application that allows users to track their income and expenses efficiently. It includes advanced features such as speech recognition for adding income and expenses. The app automatically updates the Donut Chart visualization."
              ghLink="https://github.com/Vinodk-17/Expense-Budget-Tracker/"
              demoLink="https://speechly-budget-tracker.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SHAREME}
              isBlog={false}
              title="Shareme"
              description="An advanced image sharing social media app developed using HTML5, Tailwind CSS, ReactJS, and JavaScript. It incorporates features like Google authentication, allowing users to create, edit, delete, and save posts, as well as like, comment, and apply tag filtration. The app ensures a secure and seamless login experience for users through the implementation of Google-OAUTH2."
              ghLink="https://github.com/VINODK-17/SHAREME"
              demoLink="https://share-me-8729.netlify.app/login"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="IV-Weather"
              description="Weather Forecasting Website is a real-time web application built using HTML, CSS, JavaScript, Sass, and the OpenWeatherMap API. It provides a 5-day weather forecast by retrieving data from the API. The website also saves the weather forecast for 5 days in the local storage. Additionally, it features an embedded temperature map and news sections."
              ghLink="https://github.com/Vinodk-17/weatherproject"
              demoLink="https://vinodk-17.github.io/weatherproject/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={celeb}
              isBlog={false}
              title="CELEBMATCH"
              description="It's an academic project developed using Python, Streamlit, OpenCV, and the VGGFace CNN model. The app can determine which Bollywood celebrity your face resembles by extracting features from the input image and comparing them with a database of over 8000 Bollywood celebrity images using cosine similarity."
              ghLink="https://github.com/Vinodk-17/CelebrityLookalike/"
              demoLink="https://www.youtube.com/watch?v=uum9-hgIVFY"              
            />
          </Col>

       

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lpp}
              isBlog={false}
              title="Laptop Price Predictor"
              description="A machine learning project that uses various algorithms to predict laptop prices. By analyzing laptop specifications and historical pricing data, the project provides accurate estimations for potential buyers. It assists users in making informed purchasing decisions and contributes to the field of data analysis."
              ghLink="https://github.com/Vinodk-17/LaptopPricePredictor"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TT}
              isBlog={false}
              title="Tetris Game"
              description="TetrisGame is a simple JavaScript game that brings the classic game of Tetris to your desktop. The game features score and level display, allowing players to track their progress. It is built using vanilla JavaScript and utilizes HTML and CSS for the user interface. Enjoy the timeless fun of Tetris right in your browser!"
              ghLink="https://github.com/Vinodk-17/TetrisGame-"
              demoLink="https://vinodk-17.github.io/TetrisGame-/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
