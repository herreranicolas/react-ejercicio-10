import { Container, Row } from "react-bootstrap";
import CardPelicula from "./CardPelicula";

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
        <CardPelicula></CardPelicula>
      </Row>
    </Container>
  );
};

export default ListaPeliculas;
