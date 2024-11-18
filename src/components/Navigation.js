import React from "react";

//taken from module 20, sutdent activity 28
function Navigation(props) {
	const { currentTab, newTab } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "About" ? "nav-link active" : "nav-link"}>
					<span onClick={() => setCurrentTab("About")}>About</span>
				</li>
				<li className={currentTab === "Portfolio" "nav-link active" : "nav-link"}>
					<span onClick={() => setCurrentTab("Portfolio")}>Portfolio</span>
				</li>
				<li className={currentTab === "Contact" ? "nav-link active" : "nav-link"}>
					<span onClick={() => setCurrentTab("Contact")}>Contact</span>
				</li>
				<li className={currentTab === "Resume" ? "nav-link active" : "nav-link"}>
					<span onClick={() => setCurrentTab("Resume")}>Resume</span>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;