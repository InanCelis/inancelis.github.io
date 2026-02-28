import Layout from "../Components/Layout/Layout";
import { useHelperFunction } from "../utils/helperFuntion";
import LineClipPath from "../Components/Slice/LineClipPath";
import "../assets/styles/contact.scss";

import ContactForm from "../Components/Slice/ContactForm";
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
  useHelperFunction("Contact |");

  return (
    <Layout>
      <SEO
        title="Contact WordPress Developer Philippines | Inan Celis"
        description="Get in touch with Inan Celis for WordPress development, custom websites, or freelance web projects. Let's build something amazing together!"
        url="https://inancelis.com/contact/"
        structuredData={contactStructuredData}
        breadcrumbs={[
          { name: "Home", url: "https://inancelis.com/" },
          { name: "Contact", url: "https://inancelis.com/contact/" },
        ]}
      />
      <div className=" container contact">
        <div className="form-container">
          <h1 className="contact-title font-weight-bold pb-3">Get In Touch</h1>
          <LineClipPath xtraClass={"grid-100 pb-4"} />
          <ContactForm />
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
