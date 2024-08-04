"use client";

import React from "react";
import { useForm } from "react-hook-form";

import getAuthControls from "../../config/authFormControls";
import useAuthentication from "../../hook/useAuthentication";

import Footer from "./Footer";
import FormItem from "./FormItem";
import Header from "./Header";
import styles from "./styles.module.css";

function AuthForm({ isSignUp = false }) {
	const formControls = getAuthControls({ isSignUp });
	const { formHook, onSubmit } = useAuthentication();

	const { handleSubmit } = formHook;

	return (
		<div className={` dark:bg-zinc-900 ${styles.container}`}>
			<Header isSignUp={isSignUp} />

			<FormItem
				controls={formControls}
				formHook={formHook}
				isSignUp={isSignUp}
			/>

			<button
				className={styles.submit_btn}
				onClick={handleSubmit(onSubmit)}
			>
				{isSignUp ? "Signup Now" : "Log In"}
			</button>

			<Footer isSignUp={isSignUp} />
		</div>
	);
}

export default AuthForm;
