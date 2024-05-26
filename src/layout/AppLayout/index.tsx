import Navbar from "@/page-components/Navbar/component";
import React from "react";

function AppLayout(props: any) {
	return (
		<div className="h-[100%] w-[100%] flex">
			<div className="w-[20%]">
				<Navbar />
			</div>
			<div className="w-[80%] p-10">{props.children}</div>
		</div>
	);
}

export default AppLayout;
