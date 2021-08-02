import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, subject, message } = formState;

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
      <div className="mb-5">
        <section className="col-12">
          <div className="projects d-flex justify-content-center">
            <h1 className="m-5 font-weight-light">CONTACT SHELBY</h1>
          </div>

          <div className="mx-5">
            <p>
              What design needs do you have for your business or organization?
              Whether it's a new logo or rebranding an existing one, building a
              new website or updating what you have now—whatever it is you're
              looking for—reach out to Shelby for a free quote. Just use the
              contact form below.
            </p>
          </div>
        </section>
        <form className="form-group m-5" id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group col">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div className="form-group col">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div className="form-group col">
            <label htmlFor="email">Subject:</label>
            <input
              type="text"
              className="form-control"
              name="subject"
              defaultValue={subject}
              onBlur={handleChange}
            />
          </div>
          <div className="form-group col">
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
            className="button btn btn-block btn-secondary mt-4 ml-3 text-white"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
