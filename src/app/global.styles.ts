import { createGlobalStyle } from "styled-components";
import { resetStyles } from "./reset.styles";

export const GlobalStyle = createGlobalStyle`
	${resetStyles}

	html {
		font-size: 16px;
	}

	::selection {
		background: rgba(56, 119, 238, 0.2);
	}

	#app {
		min-height: 100vh;
		font-family: "PT Sans", sans-serif;
		background: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.textPrimary};
	}
`;
