import React from "react";

import Navbar from "./Navbar";
import styles from "./styles.module.css";
import SubHeading from "./SubHeading";

import BorderMagicButton from "@/components/ui/BorderMagicButton";

function LandingPage() {
	return (
		<div className="text-white relative z-10">
			<Navbar />
			<div className={styles.container}>
				<h1 className={styles.title}>
					CodeCraft AI: Your All-in-One Development Assistant
				</h1>

				<SubHeading />

				<BorderMagicButton>Lets Begin</BorderMagicButton>
			</div>
		</div>
	);
}

export default LandingPage;
