import { Button, Card } from "react-bootstrap";
import { useEffect } from "react";

const TableInfo = (props) => {
  useEffect(() => {
    props.GetInfo();
  }, []);

  //-------------------------------------------

  return (
    <table>
      <div className="table-responsive">
        <table className="table table-dark table align-middle table-striped table-bordered">
          <thead>
            <tr>
              <th md>
                <h3>INFORMATION</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((data) => (
              <tr>
                <td md>
                  <div className="col-md-200">
                    <Card style={{ color: "#000" }}>
                      <Card.Img />
                      <Card.Body>
                        <Card.Title>{data.author}</Card.Title>
                        <Card.Text>{data.description}</Card.Text>
                        <a href={data.URL} target="_blank" rel="noreferrer">
                          <Button variant="dark">GO</Button>
                        </a>
                        <div>
                          <Button
                            variant="info"
                            onClick={() => props.setCurrentID(data.id)}
                          >
                            Edit
                          </Button>
                          -|-
                          <Button
                            variant="danger"
                            onClick={() => props.DeleteData(data.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </table>
  );
};

export default TableInfo;
