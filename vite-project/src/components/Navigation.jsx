import React from "react";

//taken from module 20, sutdent activity 28
function Navigation(props) {
	const { currentTab, handlePageChange } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "About" ? "nav-link active" : "nav-link"}>
					{/* <span onClick={() => currentTab("About")}>About</span> */}
					<a href="/">About</a>
				</li>
				<li className={currentTab === "Portfolio" ? "nav-link active" : "nav-link"}>
					{/* <span onClick={() => currentTab("Portfolio")}>Portfolio</span> */}
					<a href="/Portfolio">Portfolio</a>
				</li>
				<li className={currentTab === "Contact" ? "nav-link active" : "nav-link"}>
					{/* <span onClick={() => currentTab("Contact")}>Contact</span> */}
					<a href="/Contact">Contact</a>
				</li>
				<li className={currentTab === "Resume" ? "nav-link active" : "nav-link"}>
					{/* <span onClick={() => currentTab("Resume")}>Resume</span> */}
					<a href="/Resume">Resume</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;