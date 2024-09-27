import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              imgPath={chatify}
              isBlog={false}
              title="E-commerce website"
              description="This full-featured e-commerce platform, built with the MERN stack, enables admins to manage products and users through CRUD operations, while users can browse, manage carts, place orders, and update profiles."
              ghLink="https://github.com/iftekhar1405/saleem-footwear"
              demoLink="https://salimfootwear.com/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
