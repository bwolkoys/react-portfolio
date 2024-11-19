
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./App.css"; 

function App() {
	const [currentTab, handlePageChange] = useState("about");

	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div className="header">
				<Header currentTab={currentTab} handlePageChange={handlePageChange}></Header>
			</div>
			<div>
				{/* <main>{renderTab()}</main> */}
        <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </Router>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
