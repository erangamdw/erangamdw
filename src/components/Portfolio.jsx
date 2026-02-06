import React, { useEffect, useRef, useState, useMemo } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
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
      AI: "AI / Machine Learning",
      REALTIME: "Real-time / Calling",
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
        title: "Zulu Courier – Delivery Management Platform",
        type: types.DOCUMENT,
        document: {
          projectInfo:
            "Led development of a MERN-based courier operations platform to streamline delivery workflows and improve operational efficiency by 30%. Built scalable backend services and APIs for smooth operational management.",
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
            "Built the Fan Budget admin dashboard to manage platform operations. Focused on maintainability, performance, and scalable backend integration.",
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
        document: {
          projectInfo:
            "Developed a Flutter mobile app with real-time features and calling. Integrated Socket.io and ZegoCloud with AI-enhanced call management and subscription-based call duration handling.",
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
        document: {
          projectInfo:
            "Contributed to the Fan Budget mobile application with backend API integration and performance-focused development for a smooth mobile experience.",
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
            "Built a React.js back-office and optimised backend APIs, improving overall system performance by ~25%. Focused on scalable UI flows and faster API response times.",
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
        document: {
          projectInfo:
            "Designed, implemented, and evaluated a mobile-based plant disease classification system using lightweight deep learning models (MobileNetV2, EfficientNet-B0) optimised for CPU inference. Built a hybrid mobile–cloud architecture with Flutter, Node.js, MongoDB, and Python/TensorFlow microservices. Added explainability with Grad-CAM overlays and compared interpretability methods (Grad-CAM, Saliency Maps, Integrated Gradients). Achieved macro-F1 up to 95% with sub-1s inference latency on mid-range devices. Applied TensorFlow Lite quantisation to reduce model size and improve speed.",
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
            "Engineered and maintained features across the EventsX platform while collaborating with the UK office. Balanced development responsibilities with enterprise-level support.",
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
        document: {
          projectInfo:
            "Contributed to development and maintenance work across CineSync. Worked with UK stakeholders and provided technical support to ensure stable delivery and high uptime.",
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
        document: {
          projectInfo:
            "First-class BSc (Hons) final-year research project focused on automated brain tumor detection from MRI images using image processing and machine learning techniques. Designed a mobile health application enabling users to upload MRI scans and receive tumor classification, location highlighting, and size estimation. Implemented preprocessing, segmentation, feature extraction, and classification pipelines. The system supported axial, coronal, and sagittal MRI views and provided volumetric tumor size estimation. This project formed the basis of an academic research publication.",
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
            "Delivered a responsive web solution for Arya Taprobane Travels to improve online presence and client engagement. Implemented modern UI, performance improvements, and clean integration-ready structure for future features.",
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
            "Provided enterprise-level technical support and contributed to development tasks to ensure 99% uptime for a mission-critical accounting platform.",
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
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

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
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.map((project, index) => (
                <div
                  className={
                    "col-sm-6 col-lg-4 filter-item " +
                    getFilterClasses(project.categories)
                  }
                  key={index}
                >
                  <div className="portfolio-box">
                    <div className="portfolio-img">
                      <img
                        onLoad={() => setimagesLoaded((prev) => prev + 1)}
                        className="img-fluid d-block portfolio-image"
                        src={project.thumbImage}
                        alt={project.title}
                      />
                      <div
                        className="portfolio-overlay"
                        onClick={() => {
                          setSelectedProjectDetails(projectsData[index]);
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
