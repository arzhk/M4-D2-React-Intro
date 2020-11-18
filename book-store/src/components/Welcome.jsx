import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <Jumbotron className="mb-0">
      <h1>The Book Store</h1>
      <p>Why not buy digital you ask yourself? Buy something here while you think about it!</p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
