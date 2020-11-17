import React from "react";
import { Card, Button, Row, Container } from "react-bootstrap";
import Scifi from "../datafiles/scifi.json";
import History from "../datafiles/history.json";
import Horror from "../datafiles/horror.json";
import Romance from "../datafiles/romance.json";
import Fantasy from "../datafiles/fantasy.json";

class LatestReleases extends React.Component {
  state = {
    bookSet: Scifi,
  };

  updateBooks = (event) => {
    switch (event.currentTarget.value) {
      case "Fantasy":
        this.setState({ bookSet: Fantasy });
        break;
      case "Horror":
        this.setState({ bookSet: Horror });
        break;
      case "Scifi":
        this.setState({ bookSet: Scifi });
        break;
      case "Romance":
        this.setState({ bookSet: Romance });
        break;
      case "History":
        this.setState({ bookSet: History });
        break;
      default:
        console.log("Error, book set missing");
    }
  };

  render() {
    return (
      <section id="books-container" className="mb-2 py-5">
        <Container>
          <Row className="mb-5">
            <select onChange={this.updateBooks}>
              <option>Fantasy</option>
              <option>History</option>
              <option>Horror</option>
              <option>Romance</option>
              <option>Scifi</option>
            </select>
          </Row>
        </Container>
        <Row className="justify-content-center">
          {this.state.bookSet.map((e) => (
            <BookCard img={e.img} title={e.title} category={e.category} price={e.price} />
          ))}
          ;
        </Row>
      </section>
    );
  }
}

class BookCard extends React.Component {
  render() {
    return (
      <Card className="mr-3 mb-3" style={{ width: "18rem" }}>
        <div class="card-img" style={{ background: `url(${this.props.img})` }}></div>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.category}</Card.Text>
          <Card.Text>{this.props.price}</Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default LatestReleases;
