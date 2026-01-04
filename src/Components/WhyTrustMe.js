import React from "react";
import LineClipPath from "./Slice/LineClipPath";
import "../assets/styles/why-trust-me.scss";

function WhyTrustMe() {
  const trustReasons = [
    {
      title: "Clear and Easy Communication",
      description:
        "I explain things in simple words, give updates often, and make sure clients always know what is happening. This helps avoid confusion and keeps every project moving smoothly.",
      icon: "fa-solid fa-comments",
    },
    {
      title: "Fast and Reliable Work",
      description:
        "I finish tasks on time and make sure everything works properly. Clients know they can depend on me to deliver high-quality results without long delays.",
      icon: "fa-solid fa-clock",
    },
    {
      title: "Simple and Clean Website Designs",
      description:
        "I create websites that are easy to use, easy to read, and nice to look at. My goal is to make every page feel friendly and simple, even for beginners.",
      icon: "fa-solid fa-palette",
    },
    {
      title: "Fair and Honest Pricing",
      description:
        "I offer prices that are clear and easy to understand. There are no hidden fees, and clients always know what they are paying for.",
      icon: "fa-solid fa-hand-holding-dollar",
    },
    {
      title: "Support That Lasts Long-Term",
      description:
        "Even after a project is done, I stay available to help with updates, small fixes, or improvements. Clients feel safe knowing they have someone they can rely on anytime.",
      icon: "fa-solid fa-headset",
    },
  ];

  return (
    <div className="why-trust-me container">
      <h2 className="font-weight-bold text-center pb-3" data-aos="fade-up">
        Why Do Clients Trust Me?
      </h2>
      <p
        className="text-center text-muted f-text-m pb-5 intro-text"
        data-aos="fade-up"
      >
        As a website developer Philippines, I focus on giving every client a
        smooth and stress-free experience. I keep my work simple, clear, and
        honest so people feel safe choosing me for their web development
        Philippines projects. As a web designer Philippines, I make sure each
        website looks clean, works well, and supports real business needs. Here
        are the values that help clients trust my work.
      </p>

      <div className="row trust-reasons-row">
        {trustReasons.map((reason, index) => (
          <div className="col-sm-12 col-md-6 pb-0 pb-md-4 column" key={index}>
            <div
              className="card bgColor h-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <LineClipPath content={``} xtraClass={"line-small"} />
              <div className="d-flex ex-header mt-4">
                <i className={reason.icon}></i>
                <h3>{reason.title}</h3>
              </div>
              <div className="mt-3">
                <span className="text-muted">{reason.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyTrustMe;
