import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const MockApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

describe("On App render", () => {
	it("should render the title", () => {
		render(<MockApp />);
		const headingElement = screen.getByTestId("app-title");

		expect(headingElement).toBeVisible();
	});

	it("should render the search bar", () => {
		render(<MockApp />);
		const searchBar = screen.getByPlaceholderText("Search...");

		expect(searchBar).toBeVisible();
	});

	it("should render the cards holder", () => {
		render(<MockApp />);
		const cardsHolder = screen.getByTestId("cards-holder");

		expect(cardsHolder).toBeVisible();
	});
});
