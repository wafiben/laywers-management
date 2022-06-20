import React from "react";
import "./Contact.css";
import { Button, Form } from "react-bootstrap";
import InputForm from "../InputForm/InputForm";
const styleInput = { display: "flex", justifyContent: "space-around" };
const formStyle = { width: "500px" };

function Contact() {
  return (
    <div className="contact-parent">
      <div className="contact-email">
        <h3>Tunisia</h3>
        <div className="mail">
          <img
            className="img-mail"
            src="data:image/png;base64,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"
            alt="email"
            width="40"
          />
          <a
            href="mailto:mohammedAli@gmail.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            mohammedAli@gmail.com
          </a>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Form style={formStyle}>
          <div style={styleInput}>
            <InputForm placeholder="last-name" />
            <InputForm placeholder="first-name"/>
          </div>
          <div style={styleInput}>
            <InputForm placeholder="email"  />
            <InputForm placeholder="phone" />
          </div>
          <div>
            <InputForm placeholder="type your message" name="message" />
          </div>
          <Button
            variant="success"
            type="submit"
            style={{ marginRight: "395px" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
