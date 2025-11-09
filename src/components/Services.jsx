import React from "react";

const Services = () => {
  // services details
const services = [
    {
      name: "AI & Machine Learning",
      desc: "Building intelligent systems powered by Deep Learning, Computer Vision, and NLP using TensorFlow, PyTorch, and Hugging Face. Expertise in Generative AI, LLMs, and Agentic automation.",
      icon: "fas fa-brain",
    },
    {
      name: "Full Stack Web Development",
      desc: "Designing and developing modern web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) with scalable REST APIs, Socket.io, and real-time integrations.",
      icon: "fas fa-laptop-code",
    },
    {
      name: "Mobile App Development",
      desc: "Creating cross-platform mobile apps with Flutter and React Native, integrated with real-time communication (ZegoCloud, Socket.io) and secure payment systems (Stripe, PayPal).",
      icon: "fas fa-mobile-alt",
    },
    {
      name: "Backend & API Engineering",
      desc: "Developing robust, optimized, and secure backend services using Node.js, Express.js, and Python (Flask, FastAPI), delivering high performance with sub-200ms API response times.",
      icon: "fas fa-server",
    },
    {
      name: "Cloud & DevOps Integration",
      desc: "Deploying and managing scalable apps on AWS, Firebase, and Docker environments with CI/CD pipelines, ensuring performance, security, and reliability.",
      icon: "fas fa-cloud",
    },
    {
      name: "Technical Support & ERP Systems",
      desc: "Providing enterprise-grade support, troubleshooting, and ERP (SAP) maintenance. Ensuring system uptime, efficient workflows, and detailed technical documentation.",
      icon: "fas fa-tools",
    },
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">What I Do?</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          How I can help your next project
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
