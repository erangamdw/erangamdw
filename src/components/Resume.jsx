import React from "react";
import resumeFile from "../documents/Eranga_CV.pdf";
import {
  SiAmazonapigateway,
  SiAmazoncloudwatch,
  SiAmazonec2,
  SiAmazons3,
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
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiHuggingface,
  SiJavascript,
  SiLangchain,
  SiOpenai,
  SiPytest,
  SiSap,
  SiAmazonwebservices,
  SiAwslambda,
  SiBitbucket,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiGitlab,
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
  SiTypescript,
} from "react-icons/si";
import {
  FaCodeBranch,
  FaComments,
  FaCogs,
  FaCube,
  FaDatabase,
  FaDraftingCompass,
  FaExchangeAlt,
  FaHeadset,
  FaLink,
  FaNetworkWired,
  FaPlug,
  FaProjectDiagram,
  FaRobot,
  FaRoute,
  FaSearch,
  FaSitemap,
  FaTachometerAlt,
  FaVial,
  FaVials,
  FaVideo,
} from "react-icons/fa";


const Resume = () => {
  const educationDetails = [
    {
      yearRange: "2024 - 2025",
      title: "MSc in Data Science & Artificial Intelligence",
      place: "Edge Hill University, Lancashire, United Kingdom",
      desc: "Focused on applied AI systems, machine learning, deep learning, and NLP. Final project: InstaLeaf, an AI-powered plant disease classification system.",
    },
    {
      yearRange: "2022 - 2023",
      title: "BSc (Hons) in Computer Science (Software Engineering) - First Class",
      place: "University of Wolverhampton, United Kingdom",
      desc: "Built a strong foundation in software engineering, full-stack development, and modern system design.",
    },
    {
      yearRange: "2018 - 2020",
      title: "Higher National Diploma in Computing (Software Engineering)",
      place: "Pearson BTEC, Sri Lanka",
      desc: "Studied core software engineering, databases, and application development across academic and practical projects.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "Aug 2023 - Sep 2024",
      title: "Software Engineer",
      place: "Efito Solutions (Pvt) Ltd, Sri Lanka",
      desc: "Built and maintained backend services with Python and Node.js for production applications serving 10K+ users. Delivered secure REST APIs, RBAC-based authentication, real-time communication features, and AI-assisted workflows, while improving API performance to below 200ms and mentoring junior developers.",
    },
    {
      yearRange: "May 2021 - Jun 2023",
      title: "Software Engineer & Technical Support Engineer",
      place: "LAYOUTindex UK Ltd, Stevenage (SL Development Centre)",
      desc: "Developed backend and full-stack applications with Python, Node.js, React.js, and React Native. Worked on systems delivered to UK-based clients, designed secure APIs, resolved infrastructure and database issues, and helped maintain around 99% uptime across critical platforms.",
    },
    {
      yearRange: "Feb 2018 - Mar 2021",
      title: "Associate Software Engineer",
      place: "EMP (Pvt) Ltd, Sri Lanka",
      desc: "Supported ERP enhancements and internal business systems using SAP, MS SQL Server, Node.js, and backend web services. Improved workflow efficiency, maintained core IT infrastructure, and provided day-to-day technical support across servers, networking, and business applications.",
    },
    {
      yearRange: "Aug 2017 - Jan 2018",
      title: "IT Intern",
      place: "IUCN Sri Lanka",
      desc: "Provided IT support for hardware, software, and networking issues while assisting with system administration and Windows server maintenance.",
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
    category: "Programming",
    items: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Dart", icon: SiDart },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Native", icon: SiReact },
      { name: "Flutter", icon: SiFlutter },
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
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask },
      { name: "REST API Design", icon: FaPlug },
      { name: "Microservices", icon: FaProjectDiagram },
      { name: "Async Services", icon: FaExchangeAlt },
    ],
  },
  {
    category: "Databases & Vector Stores",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQLite", icon: SiSqlite },
      { name: "Firebase", icon: SiFirebase },
      { name: "Redis", icon: SiRedis },
      { name: "Pinecone", icon: FaDatabase },
      { name: "Chroma", icon: FaDatabase },
      { name: "Qdrant", icon: FaDatabase },
    ],
  },
  {
    category: "AI & LLMs",
    items: [
      { name: "OpenAI APIs", icon: SiOpenai },
      { name: "Agentic AI Systems", icon: FaRobot },
      { name: "LangChain", icon: SiLangchain },
      { name: "Hugging Face Transformers", icon: SiHuggingface },
      { name: "Hugging Face Hub", icon: SiHuggingface },
      { name: "Prompt Engineering", icon: FaComments },
      { name: "RAG Pipelines", icon: FaRoute },
      { name: "Semantic Search", icon: FaSearch },
      { name: "Context-Aware AI Systems", icon: FaCogs },
      { name: "AI Workflow Automation", icon: FaCogs },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "NLP", icon: FaComments },
    ],
  },
  {
    category: "Cloud / DevOps",
    items: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Lambda", icon: SiAwslambda },
      { name: "EC2", icon: SiAmazonec2 },
      { name: "S3", icon: SiAmazons3 },
      { name: "API Gateway", icon: SiAmazonapigateway },
      { name: "CloudWatch", icon: SiAmazoncloudwatch },
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "GitLab CI", icon: SiGitlab },
      { name: "Git", icon: SiGit },
      { name: "GitLab", icon: SiGitlab },
      { name: "Bitbucket", icon: SiBitbucket },
    ],
  },
  {
    category: "APIs, Integrations & Real-Time",
    items: [
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "ZegoCloud", icon: FaVideo },
      { name: "Stripe", icon: SiStripe },
      { name: "PayPal", icon: SiPaypal },
    ],
  },
  {
    category: "Testing & Collaboration",
    items: [
      { name: "Jest", icon: SiJest },
      { name: "PyTest", icon: SiPytest },
      { name: "Unit Testing", icon: FaVial },
      { name: "Integration Testing", icon: FaVials },
      { name: "Jira", icon: SiJira },
      { name: "ClickUp", icon: SiClickup },
      { name: "Asana", icon: SiAsana },
    ],
  },
  {
    category: "System Design",
    items: [
      { name: "RESTful Architecture", icon: FaLink },
      { name: "API Design", icon: FaDraftingCompass },
      { name: "Modular Monoliths", icon: FaCube },
      { name: "Microservices Architecture", icon: FaSitemap },
      { name: "Scalability & Performance Optimization", icon: FaTachometerAlt },
    ],
  },
  {
    category: "Additional",
    items: [
      { name: "Technical Support", icon: FaHeadset },
      { name: "ERP (SAP)", icon: SiSap },
      { name: "Networking", icon: FaNetworkWired },
      { name: "Code Reviews", icon: FaCodeBranch },
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
          Experience, Education, and Technical Skills
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
