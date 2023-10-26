import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';

const Login = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card>
              <Card.Body>
                <h1 className="text-center">Bienvenidos a Centro Médico Centro 15</h1>
                <p className="text-center text-muted">Ingrese sus datos</p>
                <Form>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su usuario" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                  </Form.Group>
                  <Link to="/PageCalendario">
                    <Button variant="primary" className="w-100">
                      Ingresar
                    </Button>
                  </Link>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;

