"use client";

import { useState, forwardRef } from "react";
import { cn } from "@/utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { PiEyeClosedBold, PiEye } from "react-icons/pi";

const radius = 100; // change this to increase the rdaius of the hover effect

function PasswordInput(props: any, ref) {
	const { className, type, ...rest } = props;
	const [visible, setVisible] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: any) {
		let { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<motion.div
			style={{
				background: useMotionTemplate`
                    radial-gradient(
                    ${
						visible ? radius + "px" : "0px"
					} circle at ${mouseX}px ${mouseY}px,
                    var(--blue-500),
                    transparent 80%
                    )
                `,
			}}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			className="p-[2px] rounded-lg transition duration-300 group/input"
		>
			<div
				className={cn(
					`flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
                    file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                    focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                    disabled:cursor-not-allowed disabled:opacity-50
                    dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                    group-hover/input:shadow-none transition duration-400 items-center justify-between gap-2
                `,
					className
				)}
			>
				<input
					ref={ref}
					{...rest}
					className="flex-1 outline-none bg-transparent"
					type={showPassword ? "text" : "password"}
				/>
				<span
					className="cursor-pointer"
					role="presentation"
					onClick={() => {
						setShowPassword((prev) => !prev);
					}}
				>
					{showPassword ? <PiEye /> : <PiEyeClosedBold />}
				</span>
			</div>
		</motion.div>
	);
}

export default forwardRef(PasswordInput);
