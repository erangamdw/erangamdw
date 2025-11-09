import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="section bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start wow fadeInUp">
            <p className="mb-2 mb-lg-0">
              Copyright © 2025{" "}
              <a className="fw-600" href="/">
                Eranga
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6 wow fadeInUp">
            <p className="mb-0 text-center text-lg-end">
              Designed by{" "}
              <a className="fw-600" href="https://www.erangamdw.com/">
                erangamdw
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
