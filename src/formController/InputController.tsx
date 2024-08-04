import React from "react";
import { Controller } from "react-hook-form";

import { Input } from "@/components/ui/Input";

function InputController(props: any) {
	const { name, rules, control, value, ...rest } = props;

	return (
		<Controller
			name={name}
			rules={rules}
			control={control}
			defaultValue={value}
			render={({ field: { onChange, onBlur, value: newValue } }) => (
				<Input
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
