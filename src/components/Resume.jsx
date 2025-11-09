import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = () => {
  const educationDetails = [
  {
    yearRange: "2024 - 2025",
    title: "MSc in Data Science & Artificial Intelligence",
    place: "Edge Hill University, United Kingdom",
    desc: "Specialized in Deep Learning, Machine Learning, Natural Language Processing, and AI systems development. Completed final project 'InstaLeaf: AI-Powered Plant Disease Classification'.",
  },
  {
    yearRange: "2022 - 2023",
    title: "BSc (Hons) in Computer Science (Software Engineering) – First Class",
    place: "University of Wolverhampton, United Kingdom",
    desc: "Focused on full-stack software development, web and mobile technologies, and intelligent systems design.",
  },
  {
    yearRange: "2018 - 2020",
    title: "Higher National Diploma in Computing (Software Engineering)",
    place: "Pearson BTEC, Sri Lanka",
    desc: "Gained strong foundation in software engineering, databases, and system design. Completed multiple academic and freelance projects.",
  },
];

const experienceDetails = [
  {
    yearRange: "Aug 2023 – Sep 2024",
    title: "Senior Software Engineer",
    place: "Efito Solutions (Pvt) Ltd, Sri Lanka",
    desc: "Led development of full-stack web and mobile apps using MERN stack and Flutter. Integrated AI-assisted workflows, Socket.io, and ZegoCloud for real-time communication. Mentored junior developers and improved project efficiency by 30%.",
  },
  {
    yearRange: "Feb 2022 – May 2024",
    title: "Freelance Software Engineer (Remote)",
    place: "Global Clients (Canada, UK, Europe)",
    desc: "Delivered AI-enabled full-stack solutions using React, Node.js, Python, and AWS. Lead developer for HungerLink (Canada) and Arya Ayurveda platforms, achieving 40% performance boost and improved client engagement.",
  },
  {
    yearRange: "May 2021 – Jun 2023",
    title: "Software Engineer & Technical Support Engineer",
    place: "LayoutIndex, Sri Lanka",
    desc: "Developed and maintained apps in React, React Native, Node.js, and PHP. Provided enterprise-level technical support ensuring 99% uptime. Contributed to major projects including CineSync, EventsX, and OnlineAccounting.lk.",
  },
  {
    yearRange: "Feb 2018 – Mar 2021",
    title: "Associate Software Engineer / IT Officer",
    place: "EMP (Pvt) Ltd, Sri Lanka",
    desc: "Supported ERP (SAP) systems, managed server infrastructure, and optimized workflows improving efficiency by 15%.",
  },
  {
    yearRange: "Aug 2017 – Jan 2018",
    title: "IT Intern",
    place: "IUCN Sri Lanka",
    desc: "Provided IT helpdesk support, troubleshooting, and server maintenance. Built strong foundation in networking and system administration.",
  },
];

const skills = [
  { name: "React.js / Next.js", percent: 95 },
  { name: "Node.js / Express.js", percent: 90 },
  { name: "Flutter / React Native", percent: 85 },
  { name: "Python / TensorFlow / PyTorch", percent: 80 },
  { name: "MongoDB / MySQL / SQL", percent: 85 },
  { name: "Machine Learning / Deep Learning", percent: 90 },
  { name: "Generative AI / LLMs / LangChain", percent: 85 },
  { name: "AWS / Firebase / Docker", percent: 80 },
  { name: "Socket.io / WebRTC / ZegoCloud", percent: 80 },
];


  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Resume</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          A summary of My Resume
        </h2>
        {/* Heading end*/}
        <div className="row g-5 mt-5">
          {/* My Education */}
          <div className="col-lg-6 wow fadeInUp">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Education</h2>
            <div className="border-start border-2 border-primary ps-3">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
          {/* My Experience */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Experience</h2>
            <div className="border-start border-2 border-primary ps-3">
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* My Skills */}
        <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className="col-md-6 wow fadeInUp" key={index}>
                <p className="fw-500 text-start mb-2">
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div className="progress progress-sm mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <p className="text-center mt-5 wow fadeInUp">
          <a
            className="btn btn-outline-dark shadow-none rounded-0"
            href={resumeFile}
            download
          >
            Download CV
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
