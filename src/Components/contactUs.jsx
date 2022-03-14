import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";
import "../CSS/contactUs.css";
import Joi from "joi";
import { validate } from "react-joi";

const ContactUs = () => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState("");
  const form = useRef();

  const validateForm = (obj) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string()
        .email({
          tlds: { allow: false },
        })
        .required(),
      contact: Joi.contact().required(),
      school: Joi.string().required(),
      class: Joi.number().required(),
    });

    validate(obj, { joiSchema: schema });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const [name, email, contact, school, cls] = form.current;

    const values = {
      email: email.value,
      name: name.value,
      contact: contact.value,
      school: school.value,
      class: cls.value,
    };

    setDetails(values);

    emailjs
      .send("service_lrmevbg", "template_s7jwmbu", details, "WD8auzSuTbTqaXmKb")
      .then(
        (result) => {
          window.location.reload();
        },
        (err) => {
          setError(err.text);
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
        <Form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col md:inline"
        >
          <Form.Control
            id="name"
            type="text"
            placeholder="Full Name"
            style={{
              borderRadius: "40px",
              margin: "1% 1%",
              width: "98%",
            }}
          />
          <Form.Control
            id="email"
            type="email"
            placeholder="Email id"
            className="w-[98%] md:w-[48%] input-container"
          />
          <Form.Control
            id="contact"
            type="number"
            placeholder="Contact No"
            className="w-[98%] md:w-[48%] input-container"
          />
          <Form.Control
            id="school"
            type="text"
            placeholder="Current School"
            className="w-[98%] md:w-[48%] input-container"
          />
          <Form.Control
            id="cls"
            type="number"
            placeholder="Class"
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
