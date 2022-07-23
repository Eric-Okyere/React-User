import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function User(props) {
	return (
		<>
        {props.mycustomers.map((item, index) => {
            return (
              <Card style={{ width: "18rem" }} key={index}>
                <Card.Body>
                  <Card.Title>Name: {item.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Email:{item.email}
                  </Card.Subtitle>
                  
                </Card.Body>
              </Card>
            );
          })}
		</>
	);
}

export default User;