import React, { useEffect, useState } from "react";
import { Button, Container} from "react-bootstrap";
import Menubar from "../../Shared/Menubar/Menubar";

const ManageOrder = () => {
  

  const [manageOrder, setManageOrder] = useState([]);

  useEffect(() => {
    fetch("https://eerie-goblin-56766.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setManageOrder(data));
  }, []);

  
  // Deleting a confirmed trip
  const deleteAllOrder = (id) => {
    const proceed = window.confirm(
      "Are you sure, You want to cancel the trip?"
    );
    if (proceed) {
      const url = `https://eerie-goblin-56766.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Trip Cancelled Successfully");
            const remainingEvents = manageOrder.filter(
              (data) => data._id !== id
            );
            setManageOrder(remainingEvents);
          }
        });
    }
  };


  return (
    <div>
      <Menubar></Menubar>
      <Container>
      <h2 className="text-center my-4">
        Booked Trips By{" "}
        <span className="text-success">Our Clients</span>_
      </h2>
        {manageOrder.map((data) => (
          <div key={data._id} className="bg-success my-3 rounded">
            <div className="py-3 px-5 text-light">
              <h5>{data.Uname}</h5>
              <h5>Trip: {data.PlaceName}</h5>
              <p>
                Email: {data.email}
                <br />
                Address: {data.location}
                <br />
                Package Cost: {data.price}
              </p>
              <Button
                onClick={() => deleteAllOrder(data._id)}
                className="btn btn-danger px-5"
              >
                Cancel
              </Button>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ManageOrder;
