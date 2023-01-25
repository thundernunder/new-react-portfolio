import React from "react";
import pdf from "../Assets/nathanUnderwoodResume12.1.22.pdf";

function Resume() {
  return (
    <div className="columns">
      <div className="column" style={{paddingLeft: "100px"}}>
        <p className="content is-medium">Resume</p>
        <hr />

        {/* <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button> */}

        <a
          className="button is-primary"
          href={pdf}    target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>OpenAPI, JSON</li>
            <li>MERN Stack</li>
            <li>Markdown</li>
            <li>Git, Heroku</li>
            <li>Github Repo Management</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;