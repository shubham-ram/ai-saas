import React from "react";

import styles from "./styles.module.css";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

function Navbar() {
	return (
		<div className={styles.container}>
			Navbar
			<ShimmerButton>Get Started</ShimmerButton>
		</div>
	);
}

export default Navbar;
