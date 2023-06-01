import { Card, Col } from "react-bootstrap";

const CardPelicula = ({ nombre, descripcion, genero }) => {
  return (
    <Card
      as={Col}
      border="primary"
      style={{ width: "18rem" }}
      className="me-lg-3 mb-3"
    >
      <Card.Header>{genero}</Card.Header>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardPelicula;
