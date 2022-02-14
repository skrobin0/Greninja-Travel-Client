import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import Menubar from "../../Shared/Menubar/Menubar";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
  const { users } = useAuth();

  useEffect(() => {
    fetch(`https://eerie-goblin-56766.herokuapp.com/order/${users?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [users.email]);
  console.log(myOrder);

  const deleteOrder = (id) => {
    fetch(`https://eerie-goblin-56766.herokuapp.com/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Are you sure, You want to cancel the trip?");
          const total = myOrder.filter((data) => data._id !== id);
          setMyOrder(total);
        }
      });
  };

  return (
    <div>
      <Menubar></Menubar>
      <Container>
        <h2 className="text-center my-4">
          All Your <span className="text-success">Booked Trips </span>here_
        </h2>
        {myOrder.map((data) => (
          <div key={data._id} className="bg-success my-3 rounded">
            <div className="py-3 px-5 text-light">
              <h5>{users.displayName}</h5>
              <h5>Trip: {data.PlaceName}</h5>
              <p>
                Email: {data.email}
                <br />
                Address: {data.location}
                <br />
                Package Cost: {data.price}
              </p>
              <Button
                onClick={() => deleteOrder(data._id)}
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

export default MyOrder;
