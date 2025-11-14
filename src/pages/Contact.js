import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

import Layout from "../Components/Layout/Layout";
import { useHelperFunction } from "../utils/helperFuntion";
import LineClipPath from "../Components/Slice/LineClipPath";
import "../assets/styles/contact.scss";

import AlertPopup from "../Components/Slice/AlertPopup";
import PageIndicator from "../Components/Slice/PageIndicator";
import SEO from "../Components/SEO";

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Inan Celis",
  description:
    "Get in touch with Inan Celis for web development projects and collaborations",
  url: "https://inancelis.com/contact/",
};

function Contact() {
  const [alert, setAlert] = useState({
    message: "",
    type: "",
    isVisible: false,
  });
  //form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useHelperFunction("Contact |");

  const form = useRef();
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
        (result) => {
          resetForm();
          setAlert({
            message: `Message has been delivered successfully. Please hold on for Inan's response.`,
            type: "success",
            isVisible: true,
          });
        },
        (error) => {
          setAlert({
            message: "Failed to send the message.",
            type: "error",
            isVisible: true,
          });
        }
      );
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Layout>
      <SEO
        title="Contact - Inan Celis | Get in Touch"
        description="Get in touch with Inan Celis for web development projects, collaborations, or freelance opportunities. Let's build something amazing together!"
        url="https://inancelis.com/contact/"
        structuredData={contactStructuredData}
      />
      <AlertPopup
        alertInfo={alert}
        onClose={() => setAlert((alert.isVisible = false))}
      />
      <div className=" container contact">
        <div className="form-container">
          <h1 className="contact-title font-weight-bold pb-3">Get In Touch</h1>
          <LineClipPath xtraClass={"grid-100 pb-4"} />
          <form ref={form} onSubmit={sendEmail}>
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
                <i className="fa-solid fa-triangle-exclamation"></i> Please
                enter a valid email address.
              </span>
            </div>
            <div className="group">
              <textarea
                required
                id="message"
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

            <button type="submit" className="link link-full">
              <i className="fa-solid fa-chevron-right"></i> Send Message
            </button>
          </form>
          <div className="other-contact">
            <h4 className="f-text-m pb-2">Other Contact info</h4>
            <div className="item-border">
              <div>
                <strong className="font-weight-bold text-muted f-text-s">
                  Address{" "}
                </strong>
                <span>Lilian st. Brgy. Bulihan Famy, Laguna Philippines</span>
              </div>
              <div>
                <strong className="font-weight-bold text-muted f-text-s">
                  Email
                </strong>
                <span>celisinan@gmail.com</span>
              </div>
              <div>
                <strong className="font-weight-bold text-muted f-text-s">
                  Mobile Number
                </strong>
                <span>
                  (+63) 938 0386 385 <br />
                  (+63) 992 3019 995{" "}
                </span>
              </div>
              <div>
                <strong className="font-weight-bold text-muted f-text-s">
                  Websites
                </strong>
                <span>
                  version 2.0 -{" "}
                  <a href="https://inancelis.com/" target="_blank">
                    inancelis.com
                  </a>
                  <br />
                  version 1.0 -{" "}
                  <a href="https://inan-celis.surge.sh/" target="_blank">
                    inan-celis.surge.sh
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageIndicator page="Contact" />
    </Layout>
  );
}

export default Contact;
