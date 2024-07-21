import React from "react";
import styles from "./styles.module.css";
import getField from "@/formController";
import getWidth from "@/utils/getWidth";

function FormItem({ controls, formHook, isSignUp }) {
	const {
		control,
		formState: { errors },
	} = formHook;

	return (
		<div className={styles.form_container}>
			{controls.map((config) => {
				const {
					name,
					label,
					type,
					showLabel = true,
					bottomSubLabel,
					span = 12,
				} = config || {};

				const Element = getField(type);
				const width = getWidth(span);

				return (
					<div
						key={name}
						className="mt-5"
						style={{ width: `${width}%` }}
					>
						{showLabel ? (
							<p className={styles.label}>{label}</p>
						) : null}

						<Element {...config} control={control} />

						{bottomSubLabel ? (
							<p className={styles.bottom_sub_label}>
								{bottomSubLabel}
							</p>
						) : null}

						<p className={styles.errors}>
							{errors?.[name]
								? `${
										errors?.[name]?.message ||
										errors?.[name]?.type
								  }`
								: ""}
						</p>
					</div>
				);
			})}

			{!isSignUp ? (
				<p className={`mt-5 ${styles.forgot_pass}`}>Forgot Password?</p>
			) : null}
		</div>
	);
}

export default FormItem;
