import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <Jumbotron className="mb-0">
      <h1>The Book Store</h1>
      <p>Why buy digital? You would much prefer to carry heavy books right?</p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
