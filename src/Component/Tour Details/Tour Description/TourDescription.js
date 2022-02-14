import React from "react";
import "./TourDescription.css";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Menubar from "../../Shared/Menubar/Menubar";

const TourDescription = () => {
  const { serviceId } = useParams();

  const [tour, setTour] = useState({});
  const { reset } = useForm();

  useEffect(() => {
    fetch(`https://eerie-goblin-56766.herokuapp.com/details/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setTour(data));
  }, []);

  const { users } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://eerie-goblin-56766.herokuapp.com/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("Your Order Receored");
    reset();

    console.log(data);
  };

  return (
    <div>
      <Menubar></Menubar>
      <h2 className="text-center mt-2">
        Ready To Join With Us...
        <span className="text-success">Please Confirm__</span>
      </h2>
      <Container>

        {/* Tour description part */}
        
        <Row className="mt-5">
          <Col md={6} className="Description-card">
            <div className="card">
              <img
                src={tour.img}
                class="card-img-top img-thumbnail"
                alt="..."
              />
              <div class="card-body">
                <h3 class="card-title text-center  text-success">
                  {tour.name}
                </h3>
                <p class="card-text">{tour.description}</p>
                <h4 class="card-text text-center">Participants: {tour.sit}</h4>
              </div>
            </div>
          </Col>

          {/* place order section */}

          <Col md={6}>
            <div className=" order-form">
              <div>
                <div className="event-box border border d-flex justify-content-center align-items-center">
                  <div className="login-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {tour.name && (
                        <input
                          defaultValue={tour?.name}
                          {...register("PlaceName")}
                          placeholder="Name"
                          className="p-2 m-2"
                        />
                      )}
                      <br />

                      {users.displayName && (
                        <input
                          defaultValue={users?.displayName}
                          {...register("Uname")}
                          placeholder="Name"
                          className="p-2 m-2"
                        />
                      )}
                      <br />

                      <input
                        value={users.email}
                        {...register("email", { required: true })}
                        placeholder="Email"
                        className="p-2 m-2"
                      />
                      <br />
                      <input
                        {...register("date", { required: true })}
                        placeholder="date"
                        defaultValue={new Date()}
                        className="p-2 m-2"
                      />
                      <br />
                      <input
                        value={tour.cost}
                        {...register("price", { required: true })}
                        placeholder="Price"
                        className="p-2 m-2"
                      />
                      <br />
                      <input
                        {...register("location", { required: true })}
                        placeholder="Location"
                        className="p-2 m-2"
                      />
                      <br />
                      {errors.exampleRequired && (
                        <span>This field is required</span>
                      )}

                      <input
                        type="submit"
                        className="btn btn-success w-50 my-2 "
                        value="Book Now"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TourDescription;
