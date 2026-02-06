import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  const faqsData = [
    {
      question: "Who are you as a software engineer?",
      answer:
        "I’m a backend-focused full stack software engineer with over 5 years of professional experience building scalable web and mobile applications. My core strength is backend development with Node.js, but I’m comfortable delivering complete end-to-end solutions including frontend and mobile apps.",
    },
    {
      question: "What roles are you currently looking for?",
      answer:
        "I’m primarily looking for backend-focused full stack roles, especially involving Node.js and API-driven systems. I’m also open to full stack roles, mobile development positions, and AI-related roles, particularly those involving Large Language Models (LLMs) and applied AI systems.",
    },
    {
      question: "What is your strongest technical skill set?",
      answer:
        "My strongest skills are in backend development using Node.js, Express, REST APIs, real-time systems with Socket.io, authentication, payments (Stripe), and database design with MongoDB and SQL. I focus heavily on clean architecture, performance, and maintainability.",
    },
    {
      question: "Do you have mobile development experience?",
      answer:
        "Yes. I have hands-on experience developing cross-platform mobile applications using Flutter. I’ve built and maintained production mobile apps that integrate with backend APIs, real-time services, and cloud infrastructure.",
    },
    {
      question: "Do you work with AI or Large Language Models (LLMs)?",
      answer:
        "Yes. I completed an MSc in Data Science & Artificial Intelligence, where my final research project focused on deep learning and explainable AI. I’m currently expanding my practical work in AI, particularly LLM-based applications, applied machine learning, and real-world AI system integration.",
    },
    {
      question: "Are you open to UK-based opportunities?",
      answer:
        "Yes. I’m actively seeking UK-based roles and am open to on-site, hybrid, or remote opportunities. I’m especially interested in teams that value strong engineering practices, continuous learning, and real-world impact.",
    },
  ];

  return (
    <section id="faq" className="section bg-light">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6 order-1 order-lg-0 wow fadeInUp">
            {/* Heading */}
            <p className="text-center text-lg-start mb-2">
              <span className="bg-primary text-dark px-2">FAQ</span>
            </p>
            <h2 className="text-10 fw-600 text-center text-lg-start mb-5">
              Frequently Asked Questions
            </h2>
            {/* Heading end */}

            <Accordion flush defaultActiveKey="0">
              {faqsData.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          <div
            className="col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 wow fadeIn"
            data-wow-delay="1s"
          >
            <img
              className="img-fluid"
              src="images/faq.png"
              title="FAQ"
              alt="FAQ illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
