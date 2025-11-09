import React from "react";
const AboutUs = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Heading */}
        <p className="text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">About Me</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          Know Me More
        </h2>
        {/* Heading end*/}
        <div className="row">
          <div className="col-lg-8 text-center text-lg-start wow fadeInUp">
            <h2 className="text-8 fw-400 mb-3">
              Hi, I'm{" "}
              <span className="fw-700 border-bottom border-3 border-primary">
                Wasaba Eranga
              </span>
            </h2>
            <p className="text-5">
            Software Engineer & AI Enthusiast with 6+ years of experience building AI-driven, full-stack web and mobile applications (MERN,
            Flutter, React Native) and hands-on expertise in Machine Learning and Deep Learning. Published IEEE researcher with an MSc in
            Data Science & Artificial Intelligence from Edge Hill University and a First-Class BSc (Hons) in Computer Science (Software
            Engineering) from the University of Wolverhampton.
            Skilled in delivering scalable, high-performance solutions, leading development teams, and integrating intelligent systems. Passionate
            about AI-native development, LLMs, Generative AI, and Agentic automation, combining practical engineering expertise with applied
            deep learning to build next-generation intelligent systems.
            </p>
          </div>
          <div
            className="col-lg-4 mt-4 mt-lg-0 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="featured-box style-4">
              <div className="featured-box-icon text-25 fw-500 bg-primary rounded-circle">
                <span className="wow heartBeat" data-wow-delay="1.3s">
                  7
                </span>
              </div>
              <h3 className="text-7 wow rubberBand" data-wow-delay="2s">
                Years of <span className="fw-700">Experiance</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row gy-3 mt-4">
          <div className="col-6 col-lg-3 wow fadeInUp">
            <p className="text-muted fw-500 mb-0">Name:</p>
            <p className="text-4 text-dark fw-600 mb-0">Wasaba Eranga</p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
            <p className="text-muted fw-500 mb-0">Email:</p>
            <p className="text-4 fw-600 mb-0">
              <a className="link-dark" href="mailto:erangamdw@gmail.com">
                erangamdw@gmail.com
              </a>
            </p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
            <p className="text-muted fw-500 mb-0">Date of birth:</p>
            <p className="text-4 text-dark fw-600 mb-0">18 May, 1996</p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
            <p className="text-muted fw-500 mb-0">From:</p>
            <p className="text-4 text-dark fw-600 mb-0">London, UK.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
