import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slogan from "../Slogan/Slogan";
import Crousel from "./Crousel";
import "animate.css";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="background-img">
            <div className="background-text">
              <h1 className="animate__animated animate__bounce">
                Colors of <br /> World
              </h1>
              <p className="text-white">
                It's the wild, stubborn & unconquerable spirit of this ancient{" "}
                <br /> world that has drawn me back again & again for almost
                thirty years
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Slogan></Slogan>
          </Col>
          <Col>
            <Crousel></Crousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
