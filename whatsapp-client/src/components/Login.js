import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid"
import "./Login.scss";

function Login({ onIdSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onIdSubmit(idRef.current.value)

  }
  const createNewId = () => {
    onIdSubmit(idRef.current.value)
  }
  const idRef = React.createRef();
  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit">Login</Button>
        <Button onClick={createNewId} variant="secondary" className="ml-2">Create a new ID</Button>
      </Form>
    </Container>
  );
}

export default Login;
