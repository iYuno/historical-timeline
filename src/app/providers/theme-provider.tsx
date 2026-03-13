import { theme } from "@shared/config/theme";
import type { FC, JSX } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";

export interface ThemeProviderProps {
	children?: JSX.Element | JSX.Element[];
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
	const { children } = props;
	return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};
