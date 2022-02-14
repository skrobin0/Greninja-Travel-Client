import React from "react";
import "animate.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Slogan.css";
import slogan from "../../../Images/Slogan.jpg";

const Slogan = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col md={4} className="ps-0 pe-0">
          <img className="slogan-img" src={slogan} alt="" />
        </Col>
        <Col md={8} className="bg-success">
          <h1 className="animate__animated animate__bounceInDown text-white">
            <i className="fa-2x fab fa-gripfire pt-2"></i>React-Bootstrap
          </h1>
          <h4 className="mt-5 text-white animate__animated animate__flipInX">There is something infinitely healing in the repeated refrains of nature — <br />
            the assurance that dawn comes after night, and spring after winter.</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Slogan;
