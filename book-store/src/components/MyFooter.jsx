import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer>
      <Container>
        <Row className="justify-content-center">
          <h5 className="pb-4">Welcome to the footer</h5>
        </Row>
        <Row>
          <FooterUl link1="testA" link2="testB" link3="testC" link4="testD" />
          <FooterUl link1="testE" link2="testF" link3="testG" link4="testH" />
          <FooterUl link1="testI" link2="testJ" link3="testK" link4="testL" />
        </Row>
      </Container>
    </footer>
  );
};

class FooterUl extends React.Component {
  render() {
    return (
      <Col className="col-4">
        <ul>
          <li>
            <a href="#">{this.props.link1}</a>
          </li>
          <li>
            <a href="#">{this.props.link2.toUpperCase()}</a>
          </li>
          <li>
            <a href="#">{this.props.link3}</a>
          </li>
          <li>
            <a href="#">{this.props.link4.toUpperCase()}</a>
          </li>
        </ul>
      </Col>
    );
  }
}

export default MyFooter;
