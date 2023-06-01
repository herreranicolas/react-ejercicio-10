import { Container, Row } from "react-bootstrap";
import CardPelicula from "./CardPelicula";

const ListaPeliculas = ({ arregloPeliculas }) => {
  return (
    <Container>
      {arregloPeliculas.length === 0 ? (
        <h2 className="text-center">Aun no hay peliculas agregadas</h2>
      ) : (
        <Row xs={1} md={2} lg={3} xl={4}>
          {arregloPeliculas.map((pelicula, indice) => (
            <CardPelicula
              key={indice}
              nombre={pelicula.nombre}
              descripcion={pelicula.descripcion}
              genero={pelicula.genero}
            ></CardPelicula>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ListaPeliculas;
