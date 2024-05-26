"use client";

import React from "react";
import TypewriterComponent from "typewriter-effect";
import styles from "./styles.module.css";

const DEFAULT_TEXT = [
	"Text, Image, and Code Assistance",
	"Empowering Every Aspect of Your Workflow",
	"Elevate Your Projects with AI-Powered Assistance",
	"Harmonizing Your Workflows with AI Brilliance",
];

function SubHeading() {
	return (
		<div className={styles.container}>
			<TypewriterComponent
				options={{
					strings: DEFAULT_TEXT,
					autoStart: true,
					loop: true,
					delay: 45,
					deleteSpeed: 30,
					pauseFor: 3000,
					wrapperClassName: styles.text,
				}}
			/>
		</div>
	);
}

export default SubHeading;
