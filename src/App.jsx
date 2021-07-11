import { AppSty } from "./AppStyles.style";
import { GlobalStyles } from "./GlobalStyles.style";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Title from "./components/Title/Title";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadButton from "./components/LoadButton/LoadButton";
import CardsHolder from "./components/CardsHolder/CardsHolder";

const App = () => {
	return (
		<AppSty>
			<GlobalStyles />
			<header>
				<Title />
				<SearchBar />
			</header>
			<main>
				<div className="container">
					<CardsHolder />
				</div>
				<LoadButton />
			</main>
			<footer></footer>
		</AppSty>
	);
};

export default App;
