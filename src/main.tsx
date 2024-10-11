import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import "./index.css";

export const startReactApp = (targetElement: HTMLElement | string = "root") => {
	const rootElement =
		typeof targetElement === "string"
			? document.getElementById(targetElement)
			: targetElement;

	if (rootElement) {
		createRoot(rootElement).render(
			<StrictMode>
				<App />
			</StrictMode>,
		);
	}
};

if (import.meta.env.DEV) {
	startReactApp();
}
