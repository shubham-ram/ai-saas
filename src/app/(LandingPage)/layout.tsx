import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

import styles from "./layout.module.css";

function LandingPageLayout(props: any) {
	return (
		<div className={`h-[100%] ${styles.container}`}>
			{props.children}
			<BackgroundBeams />
		</div>
	);
}

export default LandingPageLayout;
