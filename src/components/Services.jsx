import React from "react";

const Services = () => {
  // services details
  const services = [
    {
      name: "Full-Stack Software Development",
      desc: "Building scalable web applications with React, Next.js, Node.js, and modern data stacks, from polished frontend experiences to secure backend services and production-ready delivery.",
      icon: "fas fa-laptop-code",
    },
    {
      name: "AI & LLM Applications",
      desc: "Building practical AI features with OpenAI APIs, LangChain, RAG pipelines, semantic search, prompt engineering, and intelligent automation for real user workflows.",
      icon: "fas fa-brain",
    },
    {
      name: "Mobile App Development",
      desc: "Delivering cross-platform mobile apps with Flutter and React Native, including real-time communication, secure integrations, and backend-connected user experiences.",
      icon: "fas fa-mobile-alt",
    },
    {
      name: "Backend & API Engineering",
      desc: "Designing secure, high-performance backend systems with Node.js, Python, FastAPI, and Express, including REST APIs, authentication, async processing, and scalable data models.",
      icon: "fas fa-server",
    },
    {
      name: "Cloud, DevOps & Deployment",
      desc: "Deploying and maintaining reliable applications with AWS, Docker, CI/CD, and production monitoring, with a focus on performance, stability, and maintainable delivery workflows.",
      icon: "fas fa-cloud",
    },
    {
      name: "Applied AI Engineering",
      desc: "Combining software engineering with machine learning foundations to build AI-powered systems, from model-backed prototypes to production-ready tools that support business decisions.",
      icon: "fas fa-tools",
    },
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">My Expertise</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          Full-Stack Engineering and AI Systems I Build
        </h2>
        {/* Heading end*/}
        <div className="row gy-5 mt-5">
          {services.length > 0 &&
            services.map((service, index) => (
              <div className="col-sm-6 col-lg-4 wow fadeInUp" key={index}>
                <div className="featured-box text-center px-md-4">
                  <div className="featured-box-icon text-primary text-13">
                    {" "}
                    <i className={service.icon} />
                  </div>
                  <h3 className="text-6 fw-600 mb-3">{service.name}</h3>
                  <p className="text-muted mb-0">{service.desc} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
