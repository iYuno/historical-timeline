import { HomePage } from "@pages/home";
import type { FC } from "react";
import { GlobalStyle } from "./global.styles";
import { AppQueryClientProvider } from "./providers/query-client-provider";
import { ThemeProvider } from "./providers/theme-provider";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const App: FC = () => {
	return (
		<ThemeProvider>
			<AppQueryClientProvider>
				<GlobalStyle />
				<HomePage />
			</AppQueryClientProvider>
		</ThemeProvider>
	);
};
