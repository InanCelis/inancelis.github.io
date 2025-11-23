import { useState } from "react";
import "../assets/styles/faq.scss";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer as a website developer?",
      answer:
        "I create websites, redesign existing pages, build WordPress sites, develop web apps, and improve website speed and layout.",
    },
    {
      question: "How long does it take to finish a website?",
      answer:
        "A simple website can take 1 to 2 weeks. Bigger or custom projects may take longer depending on features and design needs.",
    },
    {
      question: "Do you work with WordPress and Elementor Pro?",
      answer:
        "Yes, I build many websites using WordPress and Elementor Pro because they make pages easy to update and manage.",
    },
    {
      question: "Can you redesign my old website?",
      answer:
        "Yes, I can fix your design, improve your layout, update content, and make your website cleaner, faster, and easier to use.",
    },
    {
      question: "Do you offer support after the website is finished?",
      answer:
        "Yes, I provide ongoing support such as updates, small fixes, and help with content changes.",
    },
    {
      question: "What do you need from me before starting a project?",
      answer:
        "I usually need your goals, content, branding materials, and any design ideas you want to include to build the website you want.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section container">
      <h3 className="font-weight-bold text-center pb-5" data-aos="fade-up">
        FAQs
      </h3>

      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`faq-item ${isActive ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h4>{faq.question}</h4>
                <i className={`fa-solid ${isActive ? "fa-minus" : "fa-plus"}`}></i>
              </div>
              {isActive && (
                <div className="faq-answer">
                  <p className="text-muted">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
