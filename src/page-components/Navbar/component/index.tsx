"use client";

import React from "react";
import { startCase, toLower } from "lodash";

import {
	NAVIGATION_TOP_MAPPING,
	NAVIGATION_BOTTOM_MAPPING,
} from "../config/navigationMapping";

import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
	const pathName = usePathname();

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				<Link href="/dashboard">AI Saas</Link>
			</h2>

			<div className={styles.top_nav}>
				{NAVIGATION_TOP_MAPPING.map((navigation) => {
					const { key, title, href } = navigation || {};

					return (
						<Link
							key={key}
							href={href}
							className={`${styles.nav_items} ${
								pathName === href ? styles.active_nav : ""
							}`}
						>
							{startCase(toLower(title))}
						</Link>
					);
				})}
			</div>

			<div className={styles.bottom_nav}>
				{NAVIGATION_BOTTOM_MAPPING.map((bottomNav) => {
					const { key, title, href } = bottomNav || {};

					return (
						<Link
							key={key}
							href={href}
							className={`${styles.nav_items} ${
								pathName === href ? styles.active_nav : ""
							}`}
						>
							{startCase(toLower(title))}
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Navbar;
