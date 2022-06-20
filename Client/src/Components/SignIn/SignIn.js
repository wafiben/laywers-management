import React from "react";
import { Form ,Button} from "react-bootstrap";
import InputForm from "../InputForm/InputForm";

function SignIn() {
  return (
    <Form>
      <InputForm placeholder="email" type="email" />
      <InputForm placeholder="password" type="password" />
      <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
    </Form>
  );
}

export default SignIn;
