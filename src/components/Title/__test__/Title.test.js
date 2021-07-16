import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Title from "../Title";

describe("On Title render", () => {
	it("should render the title", () => {
		render(<Title />);
		const headingElement = screen.getByTestId("app-title");
		expect(headingElement).toBeVisible;
	});
});
