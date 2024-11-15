import React from "react";

function About() {
    return (
      <section id="about-me" className="my-5 intro">
        <div class="flex-row">
          <h1 id="about" className="section-title primary-border">
            About Me
          </h1>
        </div>
        <div className="flex-row">
          <div class="intro-info">
            <div class="my-image">
              <img src={process.env.PUBLIC_URL + '/assets/profile.jpg'} style={{ width: "100%" }} alt="Bradyn's profile picture" />
            </div>
            <p>
              Hello, my name is Bradyn Wolkoys. I currently work as both a marketing assistant and marketing manager for two different companies. I grew up in Southern California and moved to San Francisco after college. I've now been in San Francisco for 3 years and absolutely love it here. After this bootcamp, I'm hoping to get a promotion at my current company and start some part-time work coding.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;