import { Row, Col, Button, Form } from "react-bootstrap";

const Formulario = () => {
  return (
    <Form>
      <Row>
        <Col md>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Example@email.com" />
            <Form.Text className="text-muted">
              Don't Worry this will be a Secret
            </Form.Text>
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Login
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
