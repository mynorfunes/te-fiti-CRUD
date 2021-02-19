import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";

const TableInfo = (props) => {
  useEffect(() => {
    props.GetInfo();
  }, []);

  //-------------------------------------------

  return (
    <Container>
      <div className="col-md-15" md>
        <Row md>
          <Col md style={{ textAlign: "left" }}>
            <h3>Nickname</h3>
          </Col>
          <Col md style={{ textAlign: "left" }}>
            <h3>Email</h3>
          </Col>
          <Col md style={{ textAlign: "left" }}>
            <h3>Edit</h3>
          </Col>
          <Col md style={{ textAlign: "left" }}>
            <h3>Delete</h3>
          </Col>
        </Row>
      </div>
      <div className="col-md-15" md>
        {props.data.map((data) => (
          <div>
            <Row md>
              <Col md style={{ textAlign: "left" }}>
                {data.nickname}
              </Col>
              <Col md style={{ textAlign: "left" }}>
                {data.email}
              </Col>
              <Col md>
                <Button
                  variant="info"
                  onClick={() => props.setCurrentID(data.id)}
                >
                  Edit
                </Button>
              </Col>
              <Col md style={{ textAlign: "center" }}>
                <Button
                  variant="danger"
                  onClick={() => props.DeleteData(data.id)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default TableInfo;
