import React from "react";

function Resume() {
    return (
    <div> 
        <section id="resume" className="resume">
            <div className="article column1">
                <h1 className="page-header">My Resume</h1>
            </div>
            <div className="bottom-spacing">
                <a href={require("../../assets/Resume.jpg")} download>
                    <h4>Download My Resume</h4>
                </a>
            </div>
            <div>
                <p className="column-text">
                    <ul>
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
    </div>
  )
};

export default Resume;