import { Card, Col } from "react-bootstrap";

const CardPelicula = () => {
  return (
    <Card
      as={Col}
      border="primary"
      style={{ width: "18rem" }}
      className="me-lg-3 mb-3"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Primary Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardPelicula;
