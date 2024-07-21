import React from "react";
import { Controller } from "react-hook-form";

import styles from "./styles.module.css";

function CheckboxController(props: any) {
	const { name, rules, control, value, label, ...rest } = props;

	return (
		<Controller
			name={name}
			rules={rules}
			control={control}
			defaultValue={value}
			render={({ field: { onChange, onBlur, value: newValue } }) => (
				<div className={styles.container}>
					<input
						{...rest}
						type="checkbox"
						key={rest.id}
						onChange={onChange}
						value={newValue}
						onBlur={onBlur}
					/>
					<p className={styles.label}>{label}</p>
				</div>
			)}
		/>
	);
}

export default CheckboxController;
