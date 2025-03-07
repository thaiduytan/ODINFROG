import { theme } from "@/theme";
import {
	DirectionProvider,
	type MantineColorScheme,
	MantineProvider,
} from "@mantine/core";
import type { PropsWithChildren } from "react";

export type ThemeProviderProps = PropsWithChildren & {
	colorScheme: MantineColorScheme;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	return (
		<DirectionProvider>
			<MantineProvider
				theme={theme}
				defaultColorScheme="light"
				classNamesPrefix="app"
			>
				{children}
			</MantineProvider>
		</DirectionProvider>
	);
};
