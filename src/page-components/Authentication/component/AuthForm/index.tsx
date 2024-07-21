"use client";

import React from "react";
import getAuthControls from "../../config/authFormControls";
import { useForm } from "react-hook-form";

import Footer from "./Footer";

import Header from "./Header";
import FormItem from "./FormItem";
import styles from "./styles.module.css";

function AuthForm({ isSignUp = false }) {
	const formHook = useForm();
	const formControls = getAuthControls({ isSignUp });

	const { handleSubmit } = formHook;

	return (
		<div className={` dark:bg-zinc-900 ${styles.container}`}>
			<Header isSignUp={isSignUp} />

			<FormItem
				controls={formControls}
				formHook={formHook}
				isSignUp={isSignUp}
			/>

			<button className={styles.submit_btn}>
				{isSignUp ? "Signup Now" : "Log In"}
			</button>

			<Footer isSignUp={isSignUp} />
		</div>
	);
}

export default AuthForm;
