import React from "react";

import { AuroraBackground } from "@/components/ui/AuroraBackground";
import AuthForm from "./AuthForm";

interface AuthInterface {
	isSignUp?: boolean;
}

function Authentication({ isSignUp = false }: AuthInterface) {
	console.log("checking husky");
	return (
		<AuroraBackground>
			<AuthForm isSignUp={isSignUp} />
		</AuroraBackground>
	);
}

export default Authentication;
