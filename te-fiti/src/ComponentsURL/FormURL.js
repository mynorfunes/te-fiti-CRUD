import { Row, Col, Button, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import db from "../firebase";
import { toast } from "react-toastify";

const Formulario = (props) => {
  const initialState = {
    URL: "",
    author: "",
    description: "",
  };

  const [values, setValue] = useState(initialState);

  const HandleSave = async (e) => {
    e.preventDefault();
    if (props.currentId === "") {
      await db.collection("links").doc().set(values);
      toast("Added success", {
        type: "success",
        autoClose: 2000,
      });
      setValue({ ...initialState });
    } else {
      await db.collection("links").doc(props.currentId).update(values);
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
    const doc = await db.collection("links").doc(id).get();
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
                <Form.Label>Tipe the URL</Form.Label>
                <Form.Control
                  type="url"
                  name="URL"
                  placeholder="https://www.somename.com"
                  onChange={handleInputChange}
                  value={values.URL}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  placeholder="John"
                  onChange={handleInputChange}
                  value={values.author}
                />
                <Form.Text className="text-muted">
                  Don't Worry this will be a Secret
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="textarea"
                  name="description"
                  placeholder="Description"
                  onChange={handleInputChange}
                  value={values.description}
                />
              </Form.Group>
              <div>
                <Button variant="secondary" type="submit">
                  {props.currentId === "" ? "Save" : "Update"}
                </Button>
              </div>
              <div>
                <Button
                  variant="info"
                  onClick={() => setValue({ ...initialState })}
                >
                  Clean
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
      <br />
    </div>
  );
};

export default Formulario;
