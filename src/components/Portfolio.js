import React from "react";

function Portfolio() {
  return (
    <div>
      <section id="projects" className="projects">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Class Projects</h2>
        </div>

        <div className="project">
          <div className="project-info">
            <div className="project-img">
              <a href="">
                {" "}
                <img
                  src={}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="project-text">
              <h4>title of project</h4>
              <p>
                short description of project
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <div className="project-img">
              <a href="">
                {" "}
                <img
                  src={}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="project-text">
              <h4>title of project</h4>
              <p>
                short description of project
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <div className="project-img">
              <a href="">
                {" "}
                <img
                  src={}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="project-text">
              <h4>title of project</h4>
              <p>
                short description of project
              </p>
            </div>
          </div>
        </div>
     </section>
    </div>
  )
};

export default Portfolio;