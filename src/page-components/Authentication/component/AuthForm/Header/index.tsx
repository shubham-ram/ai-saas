import React from "react";
import styles from "./styles.module.css";

function Header({ isSignUp = false }) {
	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>
				{isSignUp ? "Get Started" : "Welcome Back!!"}
			</h2>
			<p className={styles.subheading}>
				{isSignUp
					? "Fill in the details below to create your account"
					: "We're glad to see you again!"}
			</p>
		</div>
	);
}

export default Header;
