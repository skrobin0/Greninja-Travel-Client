import axios from "axios";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Menubar from "../../Shared/Menubar/Menubar";
import "./ToursAdd.css";

const ToursAdd = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://eerie-goblin-56766.herokuapp.com/details", data)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          alert("Tour added successfully");
          reset();
        }
      });
  };

  return (
    <div>
      <Menubar></Menubar>
      <Container>
        <Row>
          <Col>
          <h2 className="text-center my-3">Want to add a trip? <span className="text-success">Add Here_</span></h2>
            <div className="Add-box">
              <div className="event-box border border d-flex justify-content-center align-items-center">
                <div className="login-form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      {...register("place name")}
                      placeholder="Place Name"
                      className="p-2 m-2 w-100"
                    />
                    <br />
                    <input
                      {...register("price")}
                      placeholder="Price"
                      type="number"
                      className="p-2 m-2 w-100"
                    />
                    <br />
                    <input
                      {...register("description")}
                      placeholder="Description"
                      className="p-2 m-2 w-100"
                    />
                    <br />

                    <input
                      {...register("image", { required: true })}
                      placeholder="Image url"
                      className="p-2 m-2 w-100"
                    />
                    <br />

                    {/* <input
                      type="submit"
                      value="Confirm"
                      className="btn btn-warning mb-2 gg"
                    /> */}
                  </form>
                  <input
                      type="submit"
                      value="Confirm"
                      className="btn btn-success mb-2 gg my-3"
                    />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ToursAdd;
