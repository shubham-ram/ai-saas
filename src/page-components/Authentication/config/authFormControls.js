const loginControls = [
	{
		name: "email",
		label: "Email Address*",
		type: "text",
		placeholder: "Enter your email address",
		rules: {
			required: "Email is Mandatory",
		},
	},
	{
		name: "password",
		label: "Password*",
		type: "password",
		subLabel: "Forgot password?",
		placeholder: "Enter your password",
		rules: {
			required: "Password is Mandatory",
			maxLength: 8,
		},
	},
	{
		name: "rememberMe",
		label: "Remember Me",
		showLabel: false,
		type: "checkbox",
		span: 6,
	},
];
const signupControls = [
	{
		name: "name",
		label: "Name*",
		type: "text",
		placeholder: "Enter your name",
		rules: {
			required: "Name is mandatory",
		},
	},
	{
		name: "email",
		label: "Email Address*",
		type: "text",
		placeholder: "Enter your email address",
		rules: {
			required: "Email is mandatory",
		},
	},
	{
		name: "password",
		label: "Password*",
		type: "password",
		bottomSubLabel:
			"(Note: Your password must contain 8 or more characters)",
		placeholder: "Enter your password",
		rules: {
			required: "Please Enter Correct Password",
			maxLength: 8,
		},
	},
];

function getAuthControls({ isSignUp = false }) {
	return isSignUp ? signupControls : loginControls;
}

export default getAuthControls;
