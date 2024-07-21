import React from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

function Footer({ isSignUp }) {
	const { push } = useRouter();

	const handleToggle = () => {
		let route = isSignUp ? "login" : "signup";
		push(`/${route}`);
	};

	return (
		<div className={styles.container}>
			<div className={styles.or_section}>
				<span></span>
				OR
				<span></span>
			</div>

			<p className={styles.footer_txt}>
				{isSignUp
					? "Already have an account?"
					: "Don't have an account?"}

				<span className={styles.toggle_text} onClick={handleToggle}>
					{isSignUp ? "Log In" : "Sign Up"}
				</span>
			</p>
		</div>
	);
}

export default Footer;
