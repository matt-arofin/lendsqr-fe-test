import { createContext, useState, useMemo } from "react";
import { createTheme, PaletteMode, Theme } from "@mui/material";

// Color scheme tokens
export const tokens = (mode: PaletteMode) => ({
	...(mode === "light"
		? {
				primary: {
					100: "#FFFFFF",
					200: "#f5f5f5",
					300: "#efefef",
					400: "#eaeaea",
					500: "#e5e5e5", // default
					600: "#b7b7b7",
					700: "#898989",
					800: "#5c5c5c",
					900: "#2e2e2e",
				}, // landing bgc e5e5e5

				green: {
					100: "#d7f5f5",
					200: "#b0ebeb",
					300: "#88e1e0",
					400: "#61d7d6",
					500: "#39cdcc", // default
					600: "#2ea4a3",
					700: "#227b7a",
					800: "#175252",
					900: "#0b2929",
				}, // buttons/links

				red: {
					100: "#facdd8",
					200: "#f49ab1",
					300: "#ef6889",
					400: "#e93562",
					500: "#e4033b", // default
					600: "#b6022f",
					700: "#890223",
					800: "#5b0118",
					900: "#2e010c",
				}, // red accent

				yellow: {
					100: "#fbf0cc",
					200: "#f6e099",
					300: "#f2d166",
					400: "#edc133",
					500: "#e9b200",
					600: "#ba8e00",
					700: "#8c6b00",
					800: "#5d4700",
					900: "#2f2400",
				}, // yellow accent

				indigo: {
					100: "#dddfe5",
					200: "#bbbfcb",
					300: "#989fb1",
					400: "#767f97",
					500: "#545f7d",
					600: "#434c64",
					700: "#32394b",
					800: "#222632",
					900: "#111319",
				}, // grey/blue accent
		  }
		: {
				primary: {
					100: "#dddfe5",
					200: "#bbbfcb",
					300: "#989fb1",
					400: "#767f97",
					500: "#545f7d", // default
					600: "#434c64",
					700: "#32394b",
					800: "#222632",
					900: "#111319",
				}, // landing bgc e5e5e5

				green: {
					100: "#d7f5f5",
					200: "#b0ebeb",
					300: "#88e1e0",
					400: "#61d7d6",
					500: "#39cdcc", // default
					600: "#2ea4a3",
					700: "#227b7a",
					800: "#175252",
					900: "#0b2929",
				}, // buttons/links

				red: {
					100: "#facdd8",
					200: "#f49ab1",
					300: "#ef6889",
					400: "#e93562",
					500: "#e4033b", // default
					600: "#b6022f",
					700: "#890223",
					800: "#5b0118",
					900: "#2e010c",
				}, // red accent

				yellow: {
					100: "#fbf0cc",
					200: "#f6e099",
					300: "#f2d166",
					400: "#edc133",
					500: "#e9b200", // default
					600: "#ba8e00",
					700: "#8c6b00",
					800: "#5d4700",
					900: "#2f2400",
				}, // yellow accent

				indigo: { // not really indigo, but maintained name for coherence
					100: "#fafafa",
					200: "#f5f5f5",
					300: "#efefef",
					400: "#eaeaea",
					500: "#e5e5e5", // default
					600: "#b7b7b7",
					700: "#898989",
					800: "#5c5c5c",
					900: "#2e2e2e",
				}, // grey/blue accent
		  }),
});

// mui theme settings
export const themeSettings = (mode: PaletteMode) => {
	const colours = tokens(mode);

	return {
		palette: {
			mode: mode,
			...(mode === "light"
				? {
						primary: {
							main: colours.primary[100],
						},
						secondary: {
							main: colours.green[500],
						},
						neutral: {
							dark: colours.indigo[700],
							main: colours.indigo[500],
							light: colours.indigo[100],
						},
						background: {
							default: colours.primary[500],
						},
				  }
				: {
						primary: {
							main: colours.primary[700],
						},
						secondary: {
							main: colours.green[500],
						},
						neutral: {
							dark: colours.indigo[700],
							main: colours.indigo[500],
							light: colours.indigo[100],
						},
						background: {
							default: colours.primary[500],
						},
				  }),
		},
		typography: {
			fontFamily: ["Work Sans", "sans-seriff"].join(","),
			fontSize: 12,
			h1: {
				fontFamily: ["Work Sans", "sans-seriff"].join(","),
				fontSize: 40,
			},
			h2: {
				fontFamily: ["Work Sans", "sans-seriff"].join(","),
				fontSize: 32,
			},
			h3: {
				fontFamily: ["Work Sans", "sans-seriff"].join(","),
				fontSize: 24,
			},
			h4: {
				fontFamily: ["Work Sans", "sans-seriff"].join(","),
				fontSize: 20,
			},
			h5: {
				fontFamily: ["Work Sans", "sans-seriff"].join(","),
				fontSize: 16,
			},
			h6: {
				fontFamily: ["Work Sans", "sans-seriff"].join(","),
				fontSize: 14,
			},
		},
	};
};

// react context for colour mode
export const ColourModeContext = createContext({
	toggleColorMode: () => {},
});

export const useMode = (): [Theme, { toggleColorMode: () => void }] => {
	const [mode, setMode] = useState<PaletteMode>("light");

	const colourMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prev) => (prev === "dark" ? "light" : "dark")),
		}),
		[]
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return [theme, colourMode];
};
