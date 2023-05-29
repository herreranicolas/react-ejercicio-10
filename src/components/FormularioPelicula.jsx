import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function FormularioPelicula() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="inputNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control required type="text" placeholder="Nombre" />
          <Form.Control.Feedback>¡Excelente!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor ingresa un nombre válido
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="inputDescripcion">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control required as="textarea" placeholder="Descripcion" />
          <Form.Control.Feedback>¡Excelente!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor ingresa una descripción válida
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Género</Form.Label>
          <Form.Select
            required
            aria-label="genero-select"
            controlId="inputGenero"
          >
            <option>Seleccionar género</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Infantil">Infantil</option>
          </Form.Select>
          <Form.Control.Feedback>¡Excelente!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor selecciona un género.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Enviar</Button>
    </Form>
  );
}

export default FormularioPelicula;
