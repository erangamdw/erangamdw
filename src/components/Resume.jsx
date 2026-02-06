import React from "react";
import resumeFile from "../documents/resume.pdf";
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiFlask,
  SiPhp,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiHuggingface,
  SiAmazonwebservices,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiSocketdotio,
  SiStripe,
  SiPaypal,
  SiRedis,
  SiJest,
  SiJira,
  SiClickup,
  SiAsana,
  SiFlutter,
  SiDart,
} from "react-icons/si";


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
    title: "Software Engineer",
    place: "Efito Solutions (Pvt) Ltd, Sri Lanka",
    desc: "Led development of large-scale web and mobile applications using the MERN stack and Flutter. Built systems including Zulu Courier and Fan Budget platforms, streamlining delivery workflows and improving operational efficiency by 30%. Developed scalable REST APIs with Node.js and Express.js supporting 10K+ users with sub-200ms response times. Integrated Socket.io and ZegoCloud for real-time communication and AI-enhanced call management. Mentored and trained junior developers, improving team productivity and code quality.",
  },
  {
    yearRange: "May 2021 – Jun 2023",
    title: "Software Engineer & Technical Support Engineer",
    place: "LayoutIndex, Sri Lanka",
    desc: "Engineered and maintained applications using React.js, React Native, Node.js, and PHP across projects such as EventsX, CineSync, Dogota, Syscolabs Web, and OnlineAccounting. Worked directly with UK-based clients, providing enterprise-level technical support, diagnosing complex infrastructure and software issues, and ensuring 99% system uptime while balancing development and support responsibilities.",
  },
  {
    yearRange: "Feb 2018 – Mar 2021",
    title: "Associate Software Engineer",
    place: "EMP (Pvt) Ltd, Sri Lanka",
    desc: "Contributed to web application development while supporting and enhancing ERP systems using SAP and MS SQL Server. Worked on internal web-based tools and system integrations, alongside workflow optimisations that improved efficiency by 15%. Maintained IT infrastructure including servers, Active Directory, DNS/DHCP, and backups, and provided day-to-day technical support to ensure system reliability.",
  },
  {
    yearRange: "Aug 2017 – Jan 2018",
    title: "IT Intern",
    place: "IUCN Sri Lanka",
    desc: "Provided IT helpdesk support, troubleshooting hardware, software, and network-related issues. Assisted with Windows server maintenance and system administration tasks, gaining hands-on experience in enterprise IT operations and networking fundamentals.",
  },
];



// const skills = [
//   { name: "React.js / Next.js", percent: 95 },
//   { name: "Node.js / Express.js", percent: 90 },
//   { name: "Flutter / React Native", percent: 85 },
//   { name: "Python / TensorFlow / PyTorch", percent: 80 },
//   { name: "MongoDB / MySQL / SQL", percent: 85 },
//   { name: "Machine Learning / Deep Learning", percent: 90 },
//   { name: "Generative AI / LLMs / LangChain", percent: 85 },
//   { name: "AWS / Firebase / Docker", percent: 80 },
//   { name: "Socket.io / WebRTC / ZegoCloud", percent: 80 },
// ];
const skillCategories = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux / Redux Toolkit", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Material UI", icon: SiMui },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask },
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "React Native", icon: SiReact },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQLite", icon: SiSqlite },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    category: "AI / Machine Learning",
    items: [
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
    ],
  },
  {
    category: "LLMs / Generative AI",
    items: [
      { name: "Prompt Engineering", icon: null },
      { name: "LLM Application Development", icon: null },
      { name: "Hugging Face Transformers", icon: SiHuggingface },
      { name: "RAG (Retrieval-Augmented Generation)", icon: null },
      { name: "Embeddings & Vector Search", icon: null },
      { name: "Inference Pipelines", icon: null },
    ],
  },
  {
    category: "Cloud / DevOps",
    items: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Docker", icon: SiDocker },
      { name: "CI/CD (GitHub Actions)", icon: SiGithubactions },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    category: "Integrations & Real-Time",
    items: [
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "ZegoCloud", icon: null }, // no official icon
      { name: "Stripe", icon: SiStripe },
      { name: "PayPal", icon: SiPaypal },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    category: "Testing & Collaboration",
    items: [
      { name: "Jest", icon: SiJest },
      { name: "Jira", icon: SiJira },
      { name: "ClickUp", icon: SiClickup },
      { name: "Asana", icon: SiAsana },
    ],
  },
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
        {/* <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2> */}
        {/* <div className="row gx-5">
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
        </div> */}
        <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>

          <div className="row gx-5">
            {skillCategories.map((group, index) => (
              <div className="col-lg-6 wow fadeInUp my-4" key={index}>
                <h3 className="text-5 fw-600 mb-3">{group.category}</h3>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  {group.items.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <span
                      key={i}
                      className="badge border px-3 py-2 d-inline-flex align-items-center gap-2"
                      style={{
                        borderRadius: "999px",
                        fontWeight: 500,
                        fontSize: 12,
                        backgroundColor: "#f8f9fa",
                        color: "#212529",
                        cursor: "default",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.08)";
                        e.currentTarget.style.backgroundColor = "#F6DF4E";
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.backgroundColor = "#f8f9fa";
                        e.currentTarget.style.color = "#212529";
                      }}
                    >
                      {Icon ? <Icon size={30} /> : null}
                      {skill.name}
                    </span>

                    );
                  })}
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
