import React from "react";

import PersonalBlog from "../assets/PersonalBlog.jpg";
import LogoMaker from "../assets/LogoMaker.jpg";
import TaskBoard from "../assets/TaskBoard.jpg";
import NetworkApi from "../assets/NetworkApi.jpg";
import JsLibrary from "../assets/JsLibrary.jpg";
import ReadMe from "../assets/ReadMe.jpg";

function Portfolio() {
  return (
    <div>
      <section id="projects" className="projects">
        <div className="flex-row">
          <h1 className="section-title secondary-border">Class Projects</h1>
        </div>
<br></br>
        <div className="project">
          <div className="project-info">
            <div className="project-img">
            </div>
            <div className="project-text">
              <h4>Personal Blog</h4>
              <a href="https://bwolkoys.github.io/Module4-Blog/">
                {" "}
                <img
                  src={PersonalBlog}
                  className="my-2"
                  style={{ width: "60%" }}
                  alt="Personal Blog"
                />
              </a>
              <p>
              AS A marketing student I WANT a personal blog SO THAT I can showcase my thoughts and experiences. <a href="https://github.com/bwolkoys/Module4-Blog">Link to Code.</a>
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <div className="project">
          <div className="project-info">
            <div className="project-img">
            </div>
            <div className="project-text">
              <h4>Logo Maker</h4>
              <a href="https://drive.google.com/file/d/1s7VR8ZJeM1jpMyn9hptZiCW2gdCUYsPF/view">
                {" "}
                <img
                  src={LogoMaker}
                  className="my-2"
                  style={{ width: "60%" }}
                  alt=""
                />
              </a>
              <p>
              I have created a logo generator where you can input the information into the command line and it will generate a logo. Logo's are used in every business, it's what sets your brand apart visually. This application allows you to creater a logo by entering in up to 3 characters, picking a shape and the text color and shape color. <a href="https://github.com/bwolkoys/SVG-Logo-Maker">Link to Code.</a>
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <div className="project">
          <div className="project-info">
            <div className="project-img">
              
            </div>
            <div className="project-text">
              <h4>Task Board</h4>
              <a href="https://bwolkoys.github.io/Task-Board/">
                {" "}
                <img
                  src={TaskBoard}
                  className="my-2"
                  style={{ width: "60%" }}
                  alt=""
                />
              </a>
              <p>
              AS A project team member with multiple tasks to organize I WANT a task board SO THAT I can add individual project tasks, manage their state of progress and track overall project progress accordingly. <a href="https://github.com/bwolkoys/Task-Board">Link to Code.</a>
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <div className="project">
          <div className="project-info">
            <div className="project-img">
              <br></br>

            </div>
            <div className="project-text">
              <h4>Social Network API</h4>
              <a href="https://www.loom.com/share/8ed640e0f65f44749b7189a77974aea4?sid=27f572ef-5f95-4330-8f77-ac5bc628a3f7">
                {" "}
                <img
                  src={NetworkApi}
                  className="my-2"
                  style={{ width: "60%" }}
                  alt=""
                />
              </a>
              <p>
              The project is an API for a social Newtowk application. It allows users to add freinds to their list, create thoughts and delete them as well as add and delete reactions. It also allowsx your to create users, deelete them and update them. Enjoy the walk through! <a href="https://github.com/bwolkoys/SocialNetworkAPI">Link to Code.</a>
              </p>
            </div>
          </div>
        </div>

        <br></br>

        <div className="project">
          <div className="project-info">
            <div className="project-img">
              
            </div>
            <div className="project-text">
              <h4>Javascript Syntax Library</h4>
              <a href="https://ohkrah.github.io/JavaScript-Library/">
                {" "}
                <img
                  src={JsLibrary}
                  className="my-2"
                  style={{ width: "60%" }}
                  alt=""
                />
              </a>
              <p>
              A library for Java script synatx and respositories. For beginner developers in their first year of coding. Valuable resources to explain Javascript syntax that we struggle and have encountered. <a href="https://github.com/Ohkrah/JavaScript-Library">Link to Code.</a>
              </p>
            </div>
          </div>
        </div>

        <br></br>

        <div className="project">
          <div className="project-info">
            <div className="project-img">
              
            </div>
            <div className="project-text">
              <h4>ReadMe Generator</h4>
              <a href="https://drive.google.com/file/d/1R-UkSbvNsONtsnHm173ayZfb-7qaIRwN/view?usp=sharing">
                {" "}
                <img
                  src={ReadMe}
                  className="my-2"
                  style={{ width: "60%" }}
                  alt=""
                />
              </a>
              <p>
              AS A developer I WANT a README generator SO THAT I can quickly create a professional README for a new project <a href="https://github.com/bwolkoys/README-Generator">Link to Code.</a>
              </p>
            </div>
          </div>
        </div>
     </section>
     <br></br>
    </div>
  )
};

export default Portfolio;