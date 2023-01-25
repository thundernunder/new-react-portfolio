import React from "react";
import Background from "../Assets/img/background2.jpg";



function Project(props) {
  return (
    <div style={{backgroundImage: `url(${Background})`, color: "black"}}>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {props.projects.map((project) => (
          <div className="column is-half">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <a href={project.live_link} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.alt} />
                  </a>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4" key={project.id}>
                      {project.title}
                    </p>
                  </div>
                </div>

                <div className="content has-text-left">
                  {project.description}
                  <br />
                  <br />
                  <div className="content is-family-code">
                    Languages: {project.languages}
                    <br />
                    NPM Packages: {project.node_packages}
                  </div>
                  <div className="card">
                    <footer className="card-footer">
                      <a
                        href={project.repo}
                        className="card-footer-item"
                        target="_blank" rel="noreferrer"
                      >
                        Repo!
                      </a>
                      <br />
                      <a
                        href={project.live_link}
                        className="card-footer-item"
                        target="_blank" rel="noreferrer"
                      >
                        Live App!
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;