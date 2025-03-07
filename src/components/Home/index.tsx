"use client";

import { AppShell, Container } from "@mantine/core";
import type React from "react";
import { PropsWithChildren } from "react";
import classes from "./Home.module.css";

export const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<AppShell padding="md">
			<AppShell.Main classNames={{ main: classes.main }} p={0}>
				<Container
					size="xl"
					mx="auto"
					h="100%"
					p={0}
					pos="relative"
					left={{
						base: 0,
						sm: "3%",
					}}
				>
					{children}
				</Container>
			</AppShell.Main>
		</AppShell>
	);
};
