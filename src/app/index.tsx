import { env } from "@shared/config";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";

async function enableMocking() {
	if (env.isDevelopment && env.mockApiEnabled) {
		const { worker } = await import("../mocks/browser");

		await worker.start({
			onUnhandledRequest: "error",
		});
	}
}

const rootElement = document.getElementById("app");

if (rootElement && !rootElement.innerHTML) {
	enableMocking().then(() => {
		const root = ReactDOM.createRoot(rootElement);

		root.render(
			<StrictMode>
				<App />
			</StrictMode>,
		);
	});
}
