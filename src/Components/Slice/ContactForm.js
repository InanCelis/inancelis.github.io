import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import AlertPopup from "./AlertPopup";

const ContactForm = ({ compact = false, onSuccess }) => {
  const [alert, setAlert] = useState({
    message: "",
    type: "",
    isVisible: false,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ptae8fe",
        "template_gq5izz6",
        form.current,
        "w-rjpWx0cbWeWkXV6"
      )
      .then(
        () => {
          resetForm();
          setAlert({
            message:
              "Message has been delivered successfully. Please hold on for Inan's response.",
            type: "success",
            isVisible: true,
          });
          if (onSuccess) {
            setTimeout(() => onSuccess(), 2000);
          }
        },
        () => {
          setAlert({
            message: "Failed to send the message.",
            type: "error",
            isVisible: true,
          });
        }
      );
  };

  return (
    <>
      <AlertPopup
        alertInfo={alert}
        onClose={() => setAlert({ ...alert, isVisible: false })}
      />
      <form
        ref={form}
        onSubmit={sendEmail}
        className={compact ? "compact-form" : ""}
      >
        <div className="group">
          <input
            type="text"
            required
            className="form-input"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <span className="bar"></span>
          <label>Name</label>
        </div>
        <div className="group">
          <input
            type="email"
            required
            name="email"
            className="form-input"
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span className="bar"></span>
          <label>Your Email</label>
          <span className="validation-text">
            <i className="fa-solid fa-triangle-exclamation"></i> Please enter a
            valid email address.
          </span>
        </div>
        <div className="group">
          <textarea
            required
            id={compact ? "popup-message" : "message"}
            name="message"
            rows="0"
            className="form-input"
            onChange={(e) => setMessage(e.target.value)}
            placeholder=""
            value={message}
          ></textarea>
          <span className="bar"></span>
          <label>Message</label>
        </div>

        <button type="submit" className={compact ? "link" : "link link-full"}>
          <i className="fa-solid fa-chevron-right"></i>{" "}
          <span>Send Message</span>
        </button>
      </form>
    </>
  );
};

export default ContactForm;
