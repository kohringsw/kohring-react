import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
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
  const { handleSubmit, reset } = useForm();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     console.log("Submit Form", formState);
  //   }
  // };

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
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  const toastifySuccess = () => {
    toast("Form sent, thank you!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    // Send form email
    try {
      const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section>
      <div className="mb-5">
        <section className="col-12">
          <div className="contact d-flex justify-content-center">
            <h1 className="m-5 font-weight-light text-center">CONTACT SHELBY</h1>
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
        <form
          className="form-group m-5"
          id="contact-form"
          onSubmit={handleSubmit(reset)}
        >
          <div className="form-group col">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={name}
              onBlur={handleChange}
            ></input>
          </div>
          <div className="form-group col">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              defaultValue={email}
              onBlur={handleChange}
            ></input>
          </div>
          <div className="form-group col">
            <label htmlFor="email">Subject:</label>
            <input
              type="text"
              name="subject"
              className="form-control"
              defaultValue={subject}
              onBlur={handleChange}
            ></input>
          </div>
          <div className="form-group col">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              className="form-control"
              rows="7"
              defaultValue={message}
              onBlur={handleChange}
            ></textarea>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text ml-3">{errorMessage}</p>
            </div>
          )}
          <button
            data-testid="button"
            type="submit"
            className="button btn btn-block btn-secondary mt-4 ml-3 text-white"
            onClick={onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

export default ContactForm;
