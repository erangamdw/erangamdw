import React from "react";

const Services = () => {
  // services details
  const services = [
    {
      name: "AI & Machine Learning",
      desc: "Designing intelligent systems using Deep Learning, Computer Vision, and NLP with TensorFlow, PyTorch, and Hugging Face. Experienced in Generative AI, Large Language Models (LLMs), and agentic automation.",
      icon: "fas fa-brain",
    },
    {
      name: "Full-Stack Web Development",
      desc: "Building modern web applications with the MERN stack (MongoDB, Express.js, React.js, Node.js). Skilled in developing scalable REST APIs, real-time systems with Socket.io, and seamless integrations.",
      icon: "fas fa-laptop-code",
    },
    {
      name: "Mobile App Development",
      desc: "Developing cross-platform mobile apps using Flutter and React Native, integrated with real-time communication (ZegoCloud, Socket.io) and secure payment systems like Stripe and PayPal.",
      icon: "fas fa-mobile-alt",
    },
    {
      name: "Backend & API Engineering",
      desc: "Engineering robust, optimized, and secure backend services with Node.js, Express.js, and Python (Flask, FastAPI). Focused on high-performance architecture with sub-200ms API response times.",
      icon: "fas fa-server",
    },
    {
      name: "Cloud & DevOps Integration",
      desc: "Deploying and maintaining scalable applications on AWS, Firebase, and Docker environments with CI/CD pipelines. Ensuring reliability, performance, and security across deployments.",
      icon: "fas fa-cloud",
    },
    {
      name: "Technical Support & ERP Systems",
      desc: "Delivering enterprise-level technical support, troubleshooting, and ERP (SAP) maintenance. Ensuring system uptime, efficient workflows, and comprehensive technical documentation.",
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
          Areas where I bring value as a Software Engineer
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
