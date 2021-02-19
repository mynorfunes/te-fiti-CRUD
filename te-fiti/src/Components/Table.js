import { useState } from "react";
import Formulario from "./Form";
import TableInfo from "./TableInfo";
import db from "../firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const ShowTable = () => {
  const [data, setData] = useState([]);

  const [currentId, setCurrentID] = useState("");

  const GetInfo = async () => {
    db.collection("Register").onSnapshot((querySnapshot) => {
      const docInfo = [];
      querySnapshot.forEach((doc) => {
        docInfo.push({ ...doc.data(), id: doc.id });
      });
      setData(docInfo);
    });
  };

  const DeleteData = async (id) => {
    if (window.confirm("Are you sure you want to delete the field?")) {
      await db.collection("Register").doc(id).delete();
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
        <Formulario currentId={currentId} setCurrentID={setCurrentID} />
        <TableInfo
          DeleteData={DeleteData}
          GetInfo={GetInfo}
          data={data}
          setCurrentID={setCurrentID}
        />
        <ToastContainer />
      </header>
    </div>
  );
};

export default ShowTable;
