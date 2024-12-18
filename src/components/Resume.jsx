import React from "react";
import ResumeImg from "../assets/Resume.jpg";

function Resume() {
    return (
    <div> 
        <section id="resume" className="resume">
            <div className="article column1">
                <h1 className="page-header">My Resume</h1>
            </div>
            <div className="bottom-spacing">
                {/* <a href={require("../assets/Resume.jpg")}> */}
                    {/* <h4>My Resume</h4> */}
                    <a>
                <img
                  src={ResumeImg}
                  className="my-2"
                  style={{ width: "60%" }}
                  alt="Resume"
                />
              </a>

                {/* </a> */}
            </div>
            <div>
                <p className="column-text">
                    <ul> Some of the things I've learned in the bootcamp:
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>APIs</li>
                        <li>Bootstrap</li>
                        <li>Node.js</li>
                        <li>MVC: Model View Controller</li>
                        <li>Responsive Design</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>NPM</li>
                    </ul>
                </p>
            </div>
        </section>
        <br></br>
    </div>
  )
};

export default Resume;