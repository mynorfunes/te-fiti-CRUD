import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const Menu = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Link to="/menu/formulario">
            <Button variant="primary">Register</Button>
          </Link>
        </Container>
        <div>
          <Link to="/menu/Card">
            <Button variant="primary">Card</Button>
          </Link>
        </div>
        <div>
          <Link to="/menu/Table">
            <Button variant="primary">Show Information</Button>
          </Link>
        </div>
        <div>
          <Link to="/menu/auth">
            <Button variant="primary">log in</Button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Menu;
