import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  const faqsData = [
    {
      question: "What kind of software engineer are you?",
      answer:
        "I’m a backend-focused full-stack software engineer with 6+ years of experience building web, mobile, and AI-powered applications. My strongest area is backend engineering with Node.js and Python, but I’m also comfortable delivering end-to-end solutions across frontend, APIs, databases, and cloud-connected systems.",
    },
    {
      question: "What technologies do you work with most?",
      answer:
        "I work most often with Node.js, Python, React, Next.js, Flutter, FastAPI, Express, MongoDB, PostgreSQL, and AWS. I also work with OpenAI APIs, LangChain, RAG pipelines, semantic search, and other tools used to build practical AI and LLM-powered applications.",
    },
    {
      question: "Do you build full-stack products end to end?",
      answer:
        "Yes. I can take a product from frontend interface to backend services, database design, API development, integrations, and deployment. While my main strength is backend systems, I regularly build complete full-stack solutions and work across the full delivery lifecycle.",
    },
    {
      question: "Do you work with AI and LLM applications?",
      answer:
        "Yes. My recent work includes LLM integrations, Retrieval-Augmented Generation (RAG), semantic search, prompt engineering, and AI workflow automation. I focus on building AI features that are useful in production, not just prototypes, and combine them with solid software engineering practices.",
    },
    {
      question: "Do you have mobile development experience?",
      answer:
        "Yes. I have hands-on experience building cross-platform mobile applications with Flutter and React Native. I’ve worked on production mobile apps connected to secure backend APIs, real-time communication services, and cloud-based systems.",
    },
    {
      question: "What opportunities are you open to?",
      answer:
        "I’m open to backend-focused full-stack software engineering roles, AI engineering roles, and opportunities involving LLM-powered systems or applied AI products. I’m also open to UK-based on-site, hybrid, or remote opportunities where I can contribute to real product and platform delivery.",
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
