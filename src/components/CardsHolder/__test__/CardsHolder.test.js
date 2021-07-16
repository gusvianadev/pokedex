import {
	findAllByTestId,
	fireEvent,
	render,
	cardsHolder,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardsHolder from "../CardsHolder";
import { Provider } from "react-redux";
import store from "../../../redux/store";

const MockCardsHolder = () => (
	<Provider store={store}>
		<CardsHolder />
	</Provider>
);

describe("On CardsHolder render", () => {
	it("should should render the cards container", () => {
		const cardsHolder = render(<MockCardsHolder />);
		const cardsContainer = cardsHolder.getByTestId("cards-container");

		expect(cardsContainer).toBeVisible();
	});

	it("should not render the loading ring at first", () => {
		const cardsHolder = render(<MockCardsHolder />);
		const loadingRing = cardsHolder.queryByTestId("ldn-ring");

		expect(loadingRing).not.toBeInTheDocument();
	});

	it("should not render the search more button at first", () => {
		const cardsHolder = render(<MockCardsHolder />);
		const searchMoreBtn = cardsHolder.queryByTestId("search-more-btn");

		expect(searchMoreBtn).not.toBeInTheDocument();
	});

	it("should fetch the first cards and render them", async () => {
		const cardsHolder = render(<MockCardsHolder />);
		const pokeCards = await cardsHolder.findAllByTestId(/poke-card/i);

		expect(pokeCards.length).toBeGreaterThan(0);
	});
});

const mockClick = jest.fn();
