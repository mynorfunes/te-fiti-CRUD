import { Button } from "react-bootstrap";
import { useEffect } from "react";

const TableInfo = (props) => {
  useEffect(() => {
    props.GetInfo();
  }, []);

  //-------------------------------------------

  return (
    <table class=" table-sm ">
      <div className="table-responsive">
        <table className=" table table-dark table align-middle table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th md>
                <h3>Nickname</h3>
              </th>
              <th md>
                <h3>Email</h3>
              </th>
              <th md>
                <h3>Edit</h3>
              </th>
              <th md>
                <h3>Delete</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((data) => (
              <tr>
                <td md style={{ textAlign: "left" }}>
                  {data.nickname}
                </td>
                <td md style={{ textAlign: "left" }}>
                  {data.email}
                </td>
                <td md style={{ alignitems: "center" }}>
                  <Button
                    variant="info"
                    onClick={() => props.setCurrentID(data.id)}
                  >
                    Edit
                  </Button>
                </td>
                <td md style={{ alignitems: "center" }}>
                  <Button
                    variant="danger"
                    onClick={() => props.DeleteData(data.id)}
                  >
                    Delete
                  </Button>
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
