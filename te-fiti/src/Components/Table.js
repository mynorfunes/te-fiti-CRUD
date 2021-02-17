import { Container } from "react-bootstrap";

const Table = () => {
  return (
    <Container>
      <table>
        <tHead>
          <th>Id</th>
          <th>Nombre</th>
        </tHead>
        <tBody>
          <td>01</td>
          <td>Mynor</td>
        </tBody>
      </table>
    </Container>
  );
};

export default Table;
