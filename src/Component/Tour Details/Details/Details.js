import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Detail from "../Detail/Detail";

const Details = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("https://eerie-goblin-56766.herokuapp.com/details")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  if (details.length === 0) {
    return (
      <div class="text-center">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <Container fluid className="p-5">
        <Row>
          <Col>
            <h1 className="text-center text-info my-5">
              <i className="fab  text-info fa-phoenix-squadron"></i> What we are{" "}
              <span className="text-secondary">Offering this moment__</span>{" "}
            </h1>
          </Col>
        </Row>
        <Row>
          {details.map((detail) => (
            <Col className="g-4 mb-3" md={4}>
              <Detail key={detail._id} detail={detail}></Detail>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Details;
