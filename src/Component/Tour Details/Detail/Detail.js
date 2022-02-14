import React from "react";
import "./Detail.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Detail = ({ detail }) => {
  const { name, img, _id, description } = detail;

  return (
    <div>
      <Card className="card shadow">
        <Card className="img-card">
        <Card.Img variant="top" src={img} />
        </Card>
        <Card.Body className="text-center">
          <Card.Title className="text-success"><h3>{name}</h3></Card.Title>
          <Card.Text>
            <p className="card-text mt-3">{description.slice(0, 90)}...</p>
          </Card.Text>
          <Link to={`/tourdescription/${_id}`}>
            <Button variant="success">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;
