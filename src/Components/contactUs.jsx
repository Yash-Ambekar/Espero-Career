import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";
import "../CSS/contactUs.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="text-white">
        <h3 className="mb-0 mt-10">INTERESTED IN ESPERO?</h3>
        <p>Provide your contact details and our team will call you soon!</p>
      </div>
      <div className="w-[90%] md:w-[60%] form-container">
        <Form className="flex flex-col md:inline">
          <Form.Control
            type="text"
            placeholder="Full Name"
            style={{
              borderRadius: "40px",
              margin: "1% 1%",
              width: "98%",
            }}
          />
          <Form.Control
            type="email"
            placeholder="Email id"
            className="w-[98%] md:w-[48%] input-container"
          />
          <Form.Control
            type="number"
            placeholder="Contact No"
            className="w-[98%] md:w-[48%] input-container"
          />
          <Form.Control
            type="text"
            placeholder="Current School"
            className="w-[98%] md:w-[48%] input-container"
          />
          <Form.Control
            type="text"
            placeholder="Enter email"
            className="w-[98%] md:w-[48%] input-container"
          />
          <FormCheck.Label className="label-container">
            By clicking on submit button you are expressly agreeing to Matrix's
            Terms of Use and Privacy Policy
          </FormCheck.Label>
          <Button type="submit" className="mx-auto form-btn">
            Request to Call Back
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
