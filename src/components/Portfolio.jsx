import React, { useEffect, useRef, useState, useMemo } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Portfolio = () => {
  const INITIAL_VISIBLE_PROJECTS = 10;
  const LOAD_MORE_STEP = 3;

  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PROJECTS);
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // RTL support
  const htmlElement = document.getElementsByTagName("html")[0];
  const isRtl = htmlElement.getAttribute("dir") === "rtl";

  // Portfolio filters (updated based on CV)
  const filters = useMemo(
    () => ({
      WEB: "Web Apps",
      MOBILE: "Mobile Apps",
      FULLSTACK: "Full Stack",
      AI: "AI, ML & LLMs",
      REALTIME: "Real-Time & Calling",
      SUPPORT: "Support & Maintenance",
    }),
    []
  );

  const types = useMemo(
    () => ({
      IMAGE: "image",
      VIDEO: "video",
      DOCUMENT: "document",
    }),
    []
  );

  // Updated projects based on your CV (use your own images under /public/images/projects/)
  const projectsData = useMemo(
    () => [
      {
        title: "HireLens AI – AI-Powered Interview and Hiring Intelligence Platform",
        type: types.DOCUMENT,
        document: {
          projectInfo:
            "Built a full-stack AI hiring platform for candidate evaluation, job matching, and interview intelligence using FastAPI, Next.js, and LangChain. Added RAG-based insights over CVs and job descriptions, plus LLM-powered question generation, skill gap analysis, personalised feedback, and candidate ranking.",
          client: "Personal Project",
          technologies:
            "FastAPI, Next.js, LangChain, RAG, LLMs, CV-to-Job Matching",
          industry: "HR Tech / AI",
          date: "",
          url: { name: "Private / Demo", link: "" },
          sliderImages: [
            "images/projects/hirelense-ai1.png",
            "images/projects/hirelense-ai2.png",
            "images/projects/hirelense-ai3.png",
            "images/projects/hirelense-ai4.png",
            "images/projects/hirelense-ai5.png",
            "images/projects/hirelense-ai6.png",
            "images/projects/hirelense-ai7.png",
            "images/projects/hirelense-ai8.png",
            "images/projects/hirelense-ai9.png",
          ],
        },
        thumbImage: "images/projects/hirelense-ai1.png",
        categories: [filters.AI, filters.FULLSTACK, filters.WEB],
      },
      {
        title: "DocMind AI – AI Knowledge System for Multi-Source Document Intelligence using RAG",
        type: types.DOCUMENT,
        modalImageClassName: "project-details-modal__image--large",
        document: {
          projectInfo:
            "Built a full-stack AI knowledge system for natural language querying over documents using RAG. Users can provide knowledge through uploaded documents, Google Drive links, manual text, and similar sources. Developed backend services with FastAPI, LangChain, and Qdrant for semantic search and LLM-powered responses, and designed secure APIs with a React dashboard for managing multiple knowledge bases.",
          client: "Personal Project",
          technologies:
            "FastAPI, React, LangChain, Qdrant, RAG, Semantic Search, LLMs",
          industry: "Knowledge Management / AI",
          date: "",
          url: { name: "Private / Demo", link: "" },
          sliderImages: [
            "images/projects/docmind2.png",
            "images/projects/docmind3.png",
            "images/projects/docmind4.png",
            "images/projects/docmind5.png",
          ],
        },
        thumbImage: "images/projects/docmind1.png",
        categories: [filters.AI, filters.FULLSTACK, filters.WEB],
      },
      {
        title: "Zulu Courier – Delivery Management Platform",
        type: types.DOCUMENT,
        document: {
          projectInfo:
            "Led development of a MERN-based courier platform that streamlined delivery workflows and improved operational efficiency by 30%. Built scalable APIs and backend services for day-to-day operations.",
          client: "Efito Solutions (Pvt) Ltd",
          technologies: "React.js, Node.js, Express.js, MongoDB",
          industry: "Logistics / Delivery",
          date: "Aug 2023 – Sep 2024",
          url: { name: "Link", link: "https://zulucourier.com/" },
          sliderImages: [
            "images/projects/zulu-1.png",
            "images/projects/zulu-2.png",
            "images/projects/zulu-3.png",
          ],
        },
        thumbImage: "images/projects/zulu-1.png",
        categories: [filters.WEB, filters.FULLSTACK],
      },
      {
        title: "Fan Budget – Admin Dashboard (MERN)",
        type: types.DOCUMENT,
        document: {
          projectInfo:
            "Built the Fan Budget admin dashboard to manage platform operations. Focused on maintainability, performance, and clean backend integration.",
          client: "Efito Solutions (Pvt) Ltd",
          technologies: "React.js, Node.js, Express.js, MongoDB",
          industry: "FinTec / Admin System",
          date: "Aug 2023 – Sep 2024",
          url: { name: "Link", link: "https://app.fanbudget.com/login" },
          sliderImages: [
            "images/projects/fanbudget-web.png"
          ],
        },
        thumbImage: "images/projects/fanbudget-web.png",
        categories: [filters.WEB, filters.FULLSTACK],
      },
      {
        title: "Compatible1 – Mobile App (Real-time + Calling)",
        type: types.DOCUMENT,
        imageClassName: "portfolio-image--compact",
        document: {
          projectInfo:
            "Built a Flutter app with real-time messaging and calling features. Integrated Socket.io and ZegoCloud, including AI-assisted call handling and subscription-based call limits.",
          client: "Efito Solutions (Client Project)",
          technologies: "Flutter, Node.js, Socket.io, ZegoCloud",
          industry: "Dating / Social Media / Communication / Mobile",
          date: "Aug 2023 – Sep 2024",
          url: { name: "Link", link: "" },
          sliderImages: [
            "images/projects/compatible1-1.png",
            "images/projects/compatible1-2.png",
            "images/projects/compatible1-3.png",
            "images/projects/compatible1-4.png",
            "images/projects/compatible1-5.png",
            "images/projects/compatible1-6.png",
          ],
        },
        thumbImage: "images/projects/compatible1-4.png",
        categories: [filters.MOBILE, filters.REALTIME, filters.FULLSTACK, filters.AI],
      },
      {
        title: "Fan Budget – Mobile App",
        type: types.DOCUMENT,
        imageClassName: "portfolio-image--compact",
        document: {
          projectInfo:
            "Contributed to the Fan Budget mobile app with backend API integration and performance-focused improvements for a smoother user experience.",
          client: "Efito Solutions",
          technologies: "Flutter, Node.js, REST APIs",
          industry: "FinTec / Mobile",
          date: "Aug 2023 – Sep 2024",
          url: { name: "Link", link: "https://apps.apple.com/us/app/fan-budget/id1661739863" },
          sliderImages: [
            "images/projects/fanbudget-0.jpg",
            "images/projects/fanbudget-1.jpg",
            "images/projects/fanbudget-2.jpg",
            "images/projects/fanbudget-3.jpg",
            "images/projects/fanbudget-4.jpg",
            "images/projects/fanbudget-5.jpg",
            "images/projects/fanbudget-6.jpg",
            "images/projects/fanbudget-7.jpg",
          ],
        },
        thumbImage: "images/projects/fanbudget.jpg",
        categories: [filters.MOBILE, filters.FULLSTACK],
      },
      {
        title: "HungerLink – Backoffice (React) + API Optimisation",
        type: types.DOCUMENT,
        document: {
          projectInfo:
            "Built a React back-office and optimised backend APIs, improving system performance by about 25%. Focused on scalable UI flows and faster response times.",
          client: "HungerLink (Canada)",
          technologies: "React.js, REST APIs, Performance Optimisation",
          industry: "Food Bank / Non-profit",
          date: "Apr 2023 – Aug 2023",
          url: { name: "Link", link: "https://hunger.link/" },
          sliderImages: [
            "images/projects/hungerlink-1.png",
            "images/projects/hungerlink-3.png",
          ],
        },
        thumbImage: "images/projects/hungerlink-2.png",
        categories: [filters.WEB, filters.FULLSTACK],
      },
      {
        title: "InstaLeaf – AI-Powered Plant Disease Classification (MSc Final Project)",
        type: types.DOCUMENT,
        imageClassName: "portfolio-image--compact",
        document: {
          projectInfo:
            "Built a mobile plant disease detection system using lightweight deep learning models optimised for on-device inference. Combined Flutter, Node.js, MongoDB, and TensorFlow services, added Grad-CAM explainability, and achieved up to 95% macro-F1 with sub-1s inference on mid-range devices.",
          client: "Edge Hill University (MSc Data Science & Artificial Intelligence)",
          technologies:
            "Flutter, Node.js, MongoDB, Python, TensorFlow, TensorFlow Lite, MobileNetV2, EfficientNet-B0, Grad-CAM",
          industry: "AI / Agriculture",
          date: "2024 – 2025",
          url: { name: "Academic Project", link: "" }, // keep empty if no public link
          sliderImages: [
            "images/projects/instaleaf.png",
            "images/projects/instaleaf2.png",
            "images/projects/instaleaf3.png",
            "images/projects/instaleaf4.png",
            "images/projects/instaleaf5.png",
            "images/projects/instaleaf6.png",
            "images/projects/instaleaf7.png",
          ],
        },
        thumbImage: "images/projects/instaleaf4.png",
        categories: [filters.AI, filters.MOBILE, filters.FULLSTACK],
      },
      // LAYOUTindex projects (UK collaboration + support)
      {
        title: "EventsX – Event Platform",
        type: types.DOCUMENT,
        document: {
          projectInfo:
            "Developed and maintained features across the EventsX platform while working closely with the UK team. Balanced feature delivery with enterprise-level support responsibilities.",
          client: "LAYOUTindex UK Ltd (SL Development Centre)",
          technologies: "React.js, Node.js, PHP, Python (Project stack varied)",
          industry: "Events / Platform",
          date: "May 2021 – Jun 2023",
          url: { name: "Link", link: "https://www.eventsx.com/" },
          sliderImages: [
            "images/projects/eventsx1.png",
            "images/projects/eventsx2.png",
            "images/projects/eventsx3.png",
          ],
        },
        thumbImage: "images/projects/eventsx1.png",
        categories: [filters.WEB, filters.SUPPORT],
      },
      {
        title: "CineSync – Web/Mobile Application",
        type: types.DOCUMENT,
        imageClassName: "portfolio-image--compact",
        document: {
          projectInfo:
            "Contributed to CineSync development and maintenance across web and mobile. Worked with UK stakeholders and provided support to keep delivery stable and reliable.",
          client: "LAYOUTindex UK Ltd (SL Development Centre)",
          technologies: "React Native, React.js, Node.js, PHP (Project stack varied)",
          industry: "Media / Application",
          date: "May 2021 – Jun 2023",
          url: { name: "Private / Client", link: "" },
          sliderImages: [
            "images/projects/cinesync-web.png",
            "images/projects/cinesync-mobile.jpg",
          ],
        },
        thumbImage: "images/projects/cinesync-mobile.jpg",
        categories: [filters.MOBILE, filters.SUPPORT, filters.FULLSTACK, filters.WEB],
      },
      {
        title: "Smart Health App – Brain Tumor Detection (BSc Final Project)",
        type: types.DOCUMENT,
        imageClassName: "portfolio-image--compact",
        document: {
          projectInfo:
            "Built a mobile health app for brain tumor detection from MRI scans using image processing and machine learning. It classified tumors, highlighted their location, estimated size across multiple MRI views, and later formed the basis of an academic publication.",
          client: "University of Wolverhampton",
          technologies:
            "Flutter, Python, TensorFlow, Image Processing, Firebase, MRI Analysis",
          industry: "Healthcare / Medical AI",
          date: "2021 – 2022",
          url: { name: "Academic Project", link: "https://ieeexplore.ieee.org/document/10126477" },
          sliderImages: [
            "images/projects/brain1.png",
            "images/projects/brain2.png",
            "images/projects/brain3.png",
            "images/projects/brain4.png",
            "images/projects/brain5.png",
            "images/projects/brain6.png",
            "images/projects/brain7.png",
            "images/projects/brain8.png",
            "images/projects/brain9.png",
            "images/projects/brain10.png",
          ],
        },
        thumbImage: "images/projects/brain1.png",
        categories: [filters.AI, filters.MOBILE, filters.FULLSTACK],
      },
      {
        title: "Arya Taprobane Travels – Business Website & Web Platform",
        type: types.DOCUMENT,
        document: {
          projectInfo:
            "Delivered a responsive website for Arya Taprobane Travels to strengthen online presence and customer engagement. Focused on modern UI, performance, and a clean foundation for future features.",
          client: "Arya Taprobane Travels Sri Lanka",
          technologies: "React.js, NextJS Node.js, REST APIs (as applicable)",
          industry: "Travel & Tourism",
          date: "2023 – 2024",
          url: { name: "aryataprobane.com", link: "https://aryataprobane.com/" },
          sliderImages: [
            "images/projects/aryataprobane.png",
            "images/projects/aryataprobane2.png",
          ],
        },
        thumbImage: "images/projects/aryataprobane.png",
        categories: [filters.WEB, filters.FULLSTACK],
      },
      {
        title: "Syscolabs Web – Platform Work",
        type: types.DOCUMENT,
        document: {
          projectInfo:
            "Engineered and maintained platform features in collaboration with UK stakeholders. Delivered stable updates aligned with product and engineering standards.",
          client: "LAYOUTindex Ltd (SL Development Centre)",
          technologies: "React.js, Node.js (Project stack varied)",
          industry: "Web Platform",
          date: "May 2021 – Jun 2023",
          url: { name: "Link", link: "https://syscolabs.lk/" },
          sliderImages: [
            "images/projects/syscolabs.png",
          ],
        },
        thumbImage: "images/projects/syscolabs.png",
        categories: [filters.WEB, filters.SUPPORT],
      },
      {
        title: "OnlineAccounting – Web App Support & Development",
        type: types.DOCUMENT,
        document: {
          projectInfo:
            "Provided technical support and development for a mission-critical accounting platform. Helped maintain 99% uptime and stable day-to-day operations.",
          client: "LAYOUTindex Ltd (SL Development Centre)",
          technologies: "PHP, React.js (Project stack varied)",
          industry: "Accounting / SaaS",
          date: "May 2021 – Jun 2023",
          url: { name: "Link", link: "https://www.onlineaccounting.lk/" },
          sliderImages: [
            "images/projects/onlineacc.png",
          ],
        },
        thumbImage: "images/projects/onlineacc.png",
        categories: [filters.WEB, filters.SUPPORT],
      },
      
      

    ],
    [filters, types]
  );

  // initialize Isotope
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
      originLeft: !isRtl,
    });

    return () => {
      isotope.current?.destroy();
    };
  }, [isRtl]);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded && isotope.current) {
      isotope.current.reloadItems();
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
      isotope.current.layout();
    }
  }, [filterKey, imagesLoaded, visibleCount]);

  useEffect(() => {
    if (filterKey === "*") {
      setVisibleCount(INITIAL_VISIBLE_PROJECTS);
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  const getKeyByValue = (value) => {
    return Object.keys(filters).find((key) => filters[key] === value);
  };

  const getFilterClasses = (categories) => {
    if (categories?.length > 0) {
      const tempArray = categories.map((category) => getKeyByValue(category));
      return tempArray.join(" ");
    }
    return "";
  };

  const getPrimaryCategoryLabel = (categories) => {
    if (!categories || categories.length === 0) return "";
    return categories[0];
  };

  const visibleProjects = useMemo(() => {
    if (filterKey === "*") {
      return projectsData;
    }

    return projectsData.filter((project) =>
      project.categories?.includes(filters[filterKey])
    );
  }, [filterKey, filters, projectsData, visibleCount]);

  const hasMoreProjects =
    filterKey === "*" && visibleCount < projectsData.length;

  return (
    <>
      <section id="portfolio" className="section bg-light">
        <div className="container">
          {/* Heading */}
          <p className="text-center mb-2 wow fadeInUp">
            <span className="bg-primary text-dark px-2">Portfolio</span>
          </p>
          <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
            Some of my most recent projects
          </h2>
          {/* Heading end*/}

          {/* Filter Menu */}
          <ul className="portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-5 wow fadeInUp">
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>

            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={"nav-link " + (filterKey === oneKey ? "active" : "")}
                  onClick={handleFilterKeyChange(oneKey)}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}

          <div className="portfolio wow fadeInUp">
            <div className="row portfolio-filter filter-container g-3">
              {visibleProjects.map((project, index) => (
                <div
                  className={
                    "col-sm-6 col-lg-4 filter-item " +
                    getFilterClasses(project.categories)
                  }
                  key={index}
                >
                  <div className="portfolio-box">
                    <div
                      className={
                        "portfolio-img " +
                        (project.imageClassName ? "portfolio-img--compact" : "")
                      }
                    >
                      <img
                        onLoad={() => setimagesLoaded((prev) => prev + 1)}
                        className={
                          "img-fluid d-block portfolio-image " +
                          (project.imageClassName || "")
                        }
                        src={project.thumbImage}
                        alt={project.title}
                      />
                      <div
                        className="portfolio-overlay"
                        onClick={() => {
                          setSelectedProjectDetails(project);
                          setIsOpen(true);
                        }}
                      >
                        <button className="popup-ajax stretched-link border-0 p-0">
                          {" "}
                        </button>
                        <div className="portfolio-overlay-details">
                          <p className="text-primary text-8">
                            {project.type === types.DOCUMENT && (
                              <i className="fas fa-file-alt"></i>
                            )}
                            {project.type === types.IMAGE && (
                              <i className="fas fa-image"></i>
                            )}
                            {project.type === types.VIDEO && (
                              <i className="fas fa-video"></i>
                            )}
                          </p>
                          <h5 className="text-white text-5">{project.title}</h5>
                          <span className="text-light">
                            {getPrimaryCategoryLabel(project.categories)}
                          </span>
                          <p className="text-light portfolio-overlay-date mt-2 mb-0">
                            {project.document?.date}
                          </p>
                          <div className="mt-3">
                            <span className="portfolio-overlay-cta">
                              View Project Details
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* {hasMoreProjects && (
            <div className="text-center mt-5 wow fadeInUp">
              <button
                type="button"
                className="btn btn-outline-dark rounded-0 px-4"
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(prev + LOAD_MORE_STEP, projectsData.length)
                  )
                }
              >
                Load More Projects
              </button>
            </div>
          )} */}
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

export default Portfolio;
