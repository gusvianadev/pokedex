import { AppSty } from "./AppStyles.style";
import { GlobalStyles } from "./GlobalStyles.style";
import Title from "./components/Title/Title";
import SearchBar from "./components/SearchBar/SearchBar";
import CardsHolder from "./components/CardsHolder/CardsHolder";
import { BackgroundScreenSty } from "./styles/BackgroundScreen.style";
import { ScreenEffectSty } from "./styles/ScreenEffect.style";
import Button from "./components/Button/Button";

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
					<Button
						props={{ width: "50%", maxWidth: "150px", padding: ".5rem 0" }}
						content={<p>more+</p>}
					/>
					<ScreenEffectSty />
				</BackgroundScreenSty>
			</main>
			<footer></footer>
		</AppSty>
	);
};

export default App;
