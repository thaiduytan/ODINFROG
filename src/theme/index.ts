import { DEFAULT_THEME, createTheme, virtualColor } from "@mantine/core";
import { inter } from "./fonts";

export const theme = createTheme({
	primaryColor: "primary",
	defaultRadius: "sm",
	cursorType: "pointer",
	autoContrast: true,
	fontFamily: inter.style.fontFamily,
	fontFamilyMonospace: inter.style.fontFamily,
	headings: {
		fontFamily: `${inter.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
		fontWeight: "bold",
	},
	white: "#fff",
	black: "#1f1f1f",
	colors: {
		primary: virtualColor({
			name: "primary",
			dark: "main",
			light: "secondary",
		}),

		main: [
			"#fdb1aa", //0
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa", //7
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
		],
		secondary: [
			"#fdb1aa", //0
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa", //7
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
			"#fdb1aa",
		],
	},
});
