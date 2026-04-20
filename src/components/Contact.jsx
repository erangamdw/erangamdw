import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "./Tooltip";

const Contact = () => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);
  const formSubmitEndpoint = "https://formsubmit.co/ajax/erangamdw@gmail.com";

  const sendEmail = async (e) => {
    e.preventDefault();
    setSendingMail(true);

    try {
      const formData = new FormData(form.current);
      formData.append("_subject", "New portfolio contact message");
      formData.append("_template", "table");
      formData.append("_replyto", String(formData.get("user_email") || ""));

      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong!");
      }

      document.getElementById("contact-form").reset();
      toast.success(result.message || "Message sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(error.message || "Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setSendingMail(false);
    }
  };

  return (
    <section id="contact" className="section bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 text-center text-lg-start wow fadeInUp">
            <h2 className="text-10 fw-600 mb-5">Let's get in touch</h2>
            <p className="text-5 mb-5">
              I’m open to discussing backend-focused full-stack engineering
              roles, AI and LLM-powered product work, freelance projects, and
              technically ambitious ideas. If you need someone who can work
              across backend systems, full-stack delivery, and practical AI
              features, feel free to reach out with a bit of context about
              your project, team, or opportunity.
            </p>
            <h3 className="text-5 fw-600">
              <i className="fas fa-map-marker-alt me-2" aria-hidden="true" />
              Living In:
            </h3>
            <address className="text-4">London, United Kingdom</address>
            <h3 className="text-5 fw-600">
              <i className="fas fa-envelope me-2" aria-hidden="true" />
              Email:
            </h3>
            <p className="text-4">
              <a
                href="mailto:erangamdw@gmail.com"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                erangamdw@gmail.com
              </a>
            </p>
            <h3 className="text-5 fw-600">
              <i className="fas fa-phone me-2" aria-hidden="true" />
              Call:
            </h3>
            <p className="text-4">
              <a
                href="tel:+447542135343"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                (+44) 7542 135343
              </a>
            </p>

            <ul className="social-icons social-icons-lg justify-content-center justify-content-lg-start mt-5">
              <li className="social-icons-github">
                <Tooltip text="Github" placement="top">
                  <a
                    href="https://github.com/erangamdw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-linkedin">
                <Tooltip text="LinkedIn" placement="top">
                  <a
                    href="https://www.linkedin.com/in/eranga-mdw/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-6 ms-auto mt-5 mt-lg-0 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <h2 className="text-10 fw-600 text-center text-lg-start mb-5">
              Contact Me
            </h2>
            <p className="text-4 text-center text-lg-start mb-4">
              Share a few details about your role, project, or idea, and I’ll
              get back to you as soon as I can.
            </p>
            {/* Contact Form */}
            <form
              id="contact-form"
              className="form-border"
              method="post"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="_honey"
                className="d-none"
                tabIndex="-1"
                autoComplete="off"
              />
              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label" htmlFor="name">
                    Your Name:
                  </label>
                  <input
                    id="name"
                    name="user_name"
                    type="text"
                    className="form-control py-1"
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="email">
                    Your Email Address:
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    className="form-control py-1"
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="form-message">
                    How Can I Help You?
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    className="form-control py-1"
                    rows={4}
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="col-12 text-center text-lg-start">
                  <button
                    id="submit-btn"
                    className="btn btn-dark rounded-0"
                    type="submit"
                  >
                    {sendingMail ? (
                      <>
                        <span
                          role="status"
                          aria-hidden="true"
                          className="spinner-border spinner-border-sm align-self-center me-2"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send{" "}
                        <span className="ms-3">
                          <i className="fas fa-arrow-right" />
                        </span>
                      </>
                    )}
                  </button>
                </div>
                <ToastContainer />
              </div>
            </form>
            {/* Contact Form end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
