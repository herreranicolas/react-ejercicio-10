import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioPelicula from "./components/FormularioPelicula";

function App() {
  return (
    <Container className="my-3">
      <h1 className="text-center">Alta de Peliculas</h1>
      <FormularioPelicula />
    </Container>
  );
}

export default App;
