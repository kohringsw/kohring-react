import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section>
      <div className="col-12">
        <h1 className="contact-h1 m-4 pb-3" data-testid="h1tag">Contact Me</h1>
        <form class="form-group m-4" id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              className="form-control"
              rows="7"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button
            data-testid="button"
            type="submit"
            className="button btn btn-block btn-secondary mt-4 text-white"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
