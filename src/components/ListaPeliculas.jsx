import { Container, Card, Row, Col } from "react-bootstrap";

const ListaPeliculas = () => {
  return (
    <Container>
      <Row
        xs={1}
        md={2}
        lg={3}
        xl={4}
        className="justify-content-center align-items-center"
      >
        <Card
          as={Col}
          border="primary"
          bg="dark"
          text="primary"
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
      </Row>
    </Container>
  );
};

export default ListaPeliculas;
