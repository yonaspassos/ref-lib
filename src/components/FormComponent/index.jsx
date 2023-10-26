import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "./styles";
import { AppContext } from "../../Data/Store";
import { Toast, ToastContainer } from "react-bootstrap";

const FormComponent = (props) => {
  const context = useContext(AppContext);

  const [title, setTitle] = useState(context.title);
  const [text, setText] = useState(context.text);
  const [color, setColor] = useState(context.color);
  const [toast, setToast] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    context.setTitle(title);
    context.setText(text);
    context.setColor(color);
  };

  const clickSubmit = () => {
    setToast(toast);
  };

  return (
    <Container>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Título do card</Form.Label>
          <Form.Control
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Texto do card</Form.Label>
          <Form.Control
            type="text"
            placeholder="Texto"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
        <Form.Label htmlFor="exampleColorInput">Cor da fonte</Form.Label>
        <Form.Control
          type="color"
          id="exampleColorInput"
          defaultValue={color}
          title="Choose your color"
          onChange={(e) => setColor(e.target.value)}
        />
        <Button
          variant="primary"
          type="submit"
          className="my-5"
          onClick={() => setToast(true)}
        >
          Cadastrar
        </Button>
        <ToastContainer className="position-fixed" position="top-end">
          <Toast
            bg="success"
            onClose={() => setToast(false)}
            show={toast}
            delay={3000}
            className="text-white"
            autohide
          >
            <Toast.Body>Card salvo!</Toast.Body>
          </Toast>
        </ToastContainer>
      </Form>
    </Container>
  );
};

export default FormComponent;
