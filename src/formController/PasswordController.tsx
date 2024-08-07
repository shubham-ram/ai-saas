import React from "react";
import { Controller } from "react-hook-form";

import PasswordInput from "@/components/form/PasswordInput";

function InputController(props: any) {
	const { name, rules, control, value, ...rest } = props;

	return (
		<Controller
			name={name}
			rules={rules}
			control={control}
			defaultValue={value}
			render={({ field: { onChange, onBlur, value: newValue } }) => (
				<PasswordInput
					{...rest}
					key={rest.id}
					onChange={onChange}
					value={newValue}
					onBlur={onBlur}
				/>
			)}
		/>
	);
}

export default InputController;
