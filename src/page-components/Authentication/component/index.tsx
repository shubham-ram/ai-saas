import React from "react";

import AuthForm from "./AuthForm";

import { AuroraBackground } from "@/components/ui/AuroraBackground";

interface AuthInterface {
	isSignUp?: boolean;
}

function Authentication({ isSignUp = false }: AuthInterface) {
	return (
		<AuroraBackground>
			<AuthForm isSignUp={isSignUp} />
		</AuroraBackground>
	);
}

export default Authentication;
