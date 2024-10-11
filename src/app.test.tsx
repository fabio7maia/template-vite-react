import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./app";

describe("App", () => {
	it("renders the App component", () => {
		render(<App />);

		screen.debug(); // prints out the jsx in the App component unto the command line
	});
});
