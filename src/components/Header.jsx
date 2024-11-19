import React, { useState } from "react";
import Navigation from "./Navigation";

import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";


function Header() {
  //using useState hook to connect it to the about page as the current page
    const [currentPage, handlePageChange] = useState("About");
  
    // Taken from module 20, activity 24 src/main.jsx
    const renderPage = () => {
      //renderes each page based on the current page
      switch (currentPage) {
        case "About":
          return <About />;
        case "Portfolio":
          return <Portfolio />;
        case "Resume":
            return <Resume />;
        case "Contact":
          return <Contact />;
  
        default:
          return <About />;
      }
    };

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Bradyn Wolkoys's Portfolio</h1>
          </div>
          <div>
            <Navigation
            // this passes current page and handle page change as props. this allows someone to navigate between pages
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            ></Navigation>
          </div>
        </header>
      </section>
      <section className="hero">
        <div className="hero-cta">
          <h2>Welcome!</h2>
          <p>
            Welcome to my portfolio built with React. You can find sample projects, more about me and contact info. Hope you enjoy!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;