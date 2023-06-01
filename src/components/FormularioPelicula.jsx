import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function FormularioPelicula() {
  const [validated, setValidated] = useState(false);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");
  const [arregloPeliculas, setArregloPeliculas] = useState(
    JSON.parse(localStorage.getItem("peliculas")) || [
      { nombre: "nombre1", descripcion: "descripcion1", genero: "Comedia" },
      { nombre: "nombre2", descripcion: "descripcion2", genero: "Drama" },
      { nombre: "nombre3", descripcion: "descripcion3", genero: "Infantil" },
    ]
  );

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const pelicula = { nombre, descripcion, genero };
      console.log(pelicula);
      setArregloPeliculas([...arregloPeliculas, pelicula]);
      setValidated(true);
    }

    setValidated(false);
  };

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(arregloPeliculas));
  }, [arregloPeliculas]);

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} xs="12" controlId="inputNombre" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            minLength={3}
            maxLength={20}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <Form.Control.Feedback>¡Excelente!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor ingresa un nombre válido
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xs="12" className="mb-3">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            required
            as="textarea"
            placeholder="Descripcion"
            minLength={5}
            maxLength={50}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <Form.Control.Feedback>¡Excelente!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor ingresa una descripción válida
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xs="12" className="mb-3">
          <Form.Label>Género</Form.Label>
          <Form.Select
            required
            aria-label="genero-select"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <option value="">Seleccionar género</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Infantil">Infantil</option>
          </Form.Select>
          <Form.Control.Feedback>¡Excelente!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor selecciona un género.
          </Form.Control.Feedback>
        </Form.Group>
        <div className="text-center my-3">
          <Button type="submit">Enviar</Button>
        </div>
      </Row>
    </Form>
  );
}

export default FormularioPelicula;
