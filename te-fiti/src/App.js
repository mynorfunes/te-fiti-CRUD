import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Formulario from "./Components/Form";
import Cards from "./Components/Card";
import ShowTable from "./Components/Table";
import Menu from "./Components/Menu";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menu/formulario" component={Formulario} />
        <Route exact path="/menu/Card" component={Cards} />
        <Route exact path="/menu/Table" component={ShowTable} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
/*
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
*/
export default App;
