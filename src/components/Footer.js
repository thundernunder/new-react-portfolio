import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/thundernunder" target="_blank" rel="noreferrer">
            Nathan Underwood
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/nathanunderwood20/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;