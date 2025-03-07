import { Providers } from "@/providers";
import "@/theme/global.css";
import { ColorSchemeScript, type MantineColorScheme } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import "@mantine/dates/styles.css";
import { getCookie } from "cookies-next";
import "mantine-datatable/styles.layer.css";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { cookies } from "next/headers";
import "./layout.css";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "ODINFROG",
		description: "ODINFROG",
	};
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const colorScheme = (getCookie("theme", { cookies }) ||
		"dark") as MantineColorScheme;

	return (
		<ViewTransitions>
			<html
				lang="en"
				style={{
					scrollBehavior: "smooth",
					WebkitFontSmoothing: "antialiased",
					MozOsxFontSmoothing: "grayscale",
					textRendering: "optimizeLegibility",
				}}
				data-mantine-color-scheme="light"
			>
				<head>
					<ColorSchemeScript
						defaultColorScheme={colorScheme}
						suppressContentEditableWarning
						suppressHydrationWarning
					/>
					<link rel="shortcut icon" href="/favicon.ico" />
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
					/>
				</head>
				<body>
					<Providers colorScheme={colorScheme}>{children}</Providers>
				</body>
			</html>
		</ViewTransitions>
	);
}
