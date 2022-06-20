import React from "react";
import { Form } from "react-bootstrap";

function InputForm({ ...props }) {
  const { type, id, placeholder, value } = props;
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
      />
    </Form.Group>
  );
}
export default InputForm;
