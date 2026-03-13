import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";

async function enableMocking() {
	if (process.env.NODE_ENV === "development") {
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
