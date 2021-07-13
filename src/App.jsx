import { AppSty } from "./AppStyles.style";
import { GlobalStyles } from "./GlobalStyles.style";
import Title from "./components/Title/Title";
import SearchBar from "./components/SearchBar/SearchBar";
import CardsHolder from "./components/CardsHolder/CardsHolder";
import { BackgroundScreenSty } from "./styles/BackgroundScreen.style";
import { ScreenEffectSty } from "./styles/ScreenEffect.style";

const App = () => {
	return (
		<AppSty>
			<GlobalStyles />
			<header>
				<BackgroundScreenSty>
					<Title />
					<ScreenEffectSty />
				</BackgroundScreenSty>
			</header>
			<main>
				<BackgroundScreenSty padding="1rem 2rem">
					<SearchBar />
					<CardsHolder />
					<ScreenEffectSty />
				</BackgroundScreenSty>
			</main>
			<footer></footer>
		</AppSty>
	);
};

export default App;
