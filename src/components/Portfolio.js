import React from "react";

import PersonalBlog from "../../assets/PersonalBlog";
import LogoMaker from "../../assets/LogoMaker";
import TaskBoard from "../../assets/TaskBoard";

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
              <a href="https://bwolkoys.github.io/Module4-Blog/">
                {" "}
                <img
                  src={PersonalBlog}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Personal Blog"
                />
              </a>
            </div>
            <div className="project-text">
              <h4>Personal Blog</h4>
              <p>
              AS A marketing student I WANT a personal blog SO THAT I can showcase my thoughts and experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <div className="project-img">
              <a href="https://drive.google.com/file/d/1s7VR8ZJeM1jpMyn9hptZiCW2gdCUYsPF/view">
                {" "}
                <img
                  src={LogoMaker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="project-text">
              <h4>Logo Maker</h4>
              <p>
              I have created a logo generator where you can input the information into the command line and it will generate a logo. Logo's are used in every business, it's what sets your brand apart visually. This application allows you to creater a logo by entering in up to 3 characters, picking a shape and the text color and shape color.
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <div className="project-img">
              <a href="https://bwolkoys.github.io/Task-Board/">
                {" "}
                <img
                  src={TaskBoard}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="project-text">
              <h4>Task Board</h4>
              <p>
              AS A project team member with multiple tasks to organize I WANT a task board SO THAT I can add individual project tasks, manage their state of progress and track overall project progress accordingly
              </p>
            </div>
          </div>
        </div>
     </section>
    </div>
  )
};

export default Portfolio;