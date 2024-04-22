"use client";

import React, { forwardRef } from "react";
import TypewriterComponent from "typewriter-effect";

const DEFAULT_TEXT = [
	"Text, Image, and Code Assistance",
	"Empowering Every Aspect of Your Workflow",
	"Elevate Your Projects with AI-Powered Assistance",
	"Harmonizing Your Workflows with AI Brilliance",
];

// function TextComp(props: any, ref) {}

// const TextComp = (props: any, ref) => {
// 	console.log(props, "props");

// 	return <h2 ref={ref}>{props.text}</h2>;
// };

// TextComp.displayName = "TextComp";

function SubHeading() {
	return (
		<TypewriterComponent
			// component={TextComp}
			options={{
				strings: DEFAULT_TEXT,
				autoStart: true,
				loop: true,
			}}
		/>
	);
}

export default SubHeading;
