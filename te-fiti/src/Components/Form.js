import { Row, Col, Button, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import db from "../firebase";
import { toast } from "react-toastify";

const Formulario = (props) => {
  const initialState = {
    nickname: "",
    email: "",
    password: "",
  };

  const [values, setValue] = useState(initialState);

  const HandleSave = async (e) => {
    e.preventDefault();
    if (props.currentId === "") {
      await db.collection("Register").doc().set(values);
      toast("Added success", {
        type: "success",
        autoClose: 2000,
      });
      setValue({ ...initialState });
    } else {
      await db.collection("Register").doc(props.currentId).update(values);
      toast("Update success", {
        type: "info",
        autoClose: 2000,
      });
      props.setCurrentID("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  const EditData = async (id) => {
    const doc = await db.collection("Register").doc(id).get();
    setValue({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValue(initialState);
    } else {
      EditData(props.currentId);
    }
  }, [props.currentId]);

  return (
    <div className="App">
      <Container>
        <Form onSubmit={HandleSave}>
          <Row>
            <Col md>
              <Form.Group>
                <Form.Label>NickName</Form.Label>
                <Form.Control
                  type="text"
                  name="nickname"
                  placeholder="Nickname"
                  onChange={handleInputChange}
                  value={values.nickname}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Example@email.com"
                  onChange={handleInputChange}
                  value={values.email}
                />
                <Form.Text className="text-muted">
                  Don't Worry this will be a Secret
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                  value={values.password}
                />
              </Form.Group>

              <Button variant="secondary" type="submit">
                {props.currentId === "" ? "Save" : "Update"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <br />
    </div>
  );
};

export default Formulario;
