import { React } from "react";
import "./App.css";
import ShowTable from "./ComponentsURL/TableURL";

function App() {
  return <ShowTable />;
}
/*
    <BrowserRouter>
      <Switch>
        <Route exact path="" component={ShowTable} />
      </Switch>
    </BrowserRouter>
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
