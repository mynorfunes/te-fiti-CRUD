import React from "react";
import "./App.css";
import Formulario from "./Components/Form";
import Cards from "./Components/Card";
import Table from "./Components/Table";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Button, Alert } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Formulario />
          <Cards />
          <Alert variant="success">This is a button</Alert>
          <Button>Test</Button>
        </Container>
        <Table />
      </header>
    </div>
  );
}

export default App;
