import { useState } from "react";
import Formulario from "../ComponentsURL/FormURL";
import TableInfo from "../ComponentsURL/TableInfoURL";
import db from "../firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Col, Row } from "react-bootstrap";

const ShowTable = (props) => {
  const [data, setData] = useState([]);

  const [currentId, setCurrentID] = useState("");

  const GetInfo = async () => {
    db.collection("links").onSnapshot((querySnapshot) => {
      const docInfo = [];
      querySnapshot.forEach((doc) => {
        docInfo.push({ ...doc.data(), id: doc.id });
      });
      setData(docInfo);
    });
  };

  const DeleteData = async (id) => {
    if (window.confirm("Are you sure you want to delete the field?")) {
      await db.collection("links").doc(id).delete();
    }
    toast(
      "Delete success",
      {
        type: "error",
      },
      1000
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col>
            <div class="container">
              <Formulario currentId={currentId} setCurrentID={setCurrentID} />
            </div>
          </Col>
          <Col>
            <div class="container">
              <TableInfo
                DeleteData={DeleteData}
                GetInfo={GetInfo}
                data={data}
                setCurrentID={setCurrentID}
              />
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </header>
    </div>
  );
};

export default ShowTable;
