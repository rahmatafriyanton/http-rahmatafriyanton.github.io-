import React from "react";

function HomeContent() {
  return (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-12 col-lg-7">
        <div className="home-content">
          <h6 className="title-3">Hello.</h6>
          <h3 className="title-1">I'm Rahmat</h3>
          <p>
            Skilled software engineer experienced in iOS, Android, ReactJS,
            Node.js, and full-stack development. Committed to delivering
            high-quality code and exceptional user experiences. Proven track
            record of successful projects. Let's bring your ideas to life
            together.
          </p>
          <div className="button-group">
            <a
              className="btn btn-outline-light"
              href="https://drive.google.com/file/d/1WPlS9bAs5k9C-OcveBPtTzgmgNrDDdSA/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-file-lines mr-1"></i>
              CV
            </a>
            <a
              className="btn btn-outline-light"
              href="https://www.linkedin.com/in/rahmatafriyanton/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin mr-1"></i>
              LinkedIn
            </a>
            <a
              className="btn btn-outline-light"
              href="https://github.com/rahmatafriyanton"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-github mr-1"></i>
              GitHub
            </a>
            <a
              className="btn btn-outline-light"
              href="mailto:rahmatafriyanton@gmail.com"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope mr-1"></i>
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
