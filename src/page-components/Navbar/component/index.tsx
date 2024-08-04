"use client";

import { startCase, toLower } from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import {
	NAVIGATION_TOP_MAPPING,
	NAVIGATION_BOTTOM_MAPPING,
} from "../config/navigationMapping";

import styles from "./styles.module.css";

function Navbar() {
	const pathName = usePathname();

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				<Link href="/dashboard">AI Saas</Link>
			</h2>

			<div className={styles.top_nav}>
				{NAVIGATION_TOP_MAPPING.map((navigation) => {
					const { key, title, href, icon } = navigation || {};

					return (
						<Link
							key={key}
							href={href}
							className={`${styles.nav_items} ${
								pathName === href ? styles.active_nav : ""
							}`}
						>
							{icon}
							{startCase(toLower(title))}
						</Link>
					);
				})}
			</div>

			<div className={styles.bottom_nav}>
				{NAVIGATION_BOTTOM_MAPPING.map((bottomNav) => {
					const { key, title, href, icon } = bottomNav || {};

					return (
						<Link
							key={key}
							href={href}
							className={`${styles.nav_items} ${
								pathName === href ? styles.active_nav : ""
							}`}
						>
							{icon}
							{startCase(toLower(title))}
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Navbar;
