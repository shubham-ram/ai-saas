import React from "react";
import Navbar from "./Navbar";

import styles from "./styles.module.css";
import TypewriterComponent from "typewriter-effect";
import SubHeading from "./SubHeading";

function LandingPage() {
	return (
		<div className="text-white">
			<Navbar />

			<div className={styles.container}>
				<h1 className={styles.title}>
					CodeCraft AI: Your All-in-One Development Assistant
				</h1>

				<SubHeading />
			</div>
		</div>
	);
}

export default LandingPage;
