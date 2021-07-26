import AppSty from './AppStyles.style';
import GlobalStyles from './GlobalStyles.style';
import Title from './components/Title/Title';
import SearchBar from './components/SearchBar/SearchBar';
import CardsHolder from './components/CardsHolder/CardsHolder';
import BackgroundScreenSty from './styles/BackgroundScreen.style';

const App = () => (
	<AppSty>
		<GlobalStyles />
		<header>
			<BackgroundScreenSty>
				<Title />
			</BackgroundScreenSty>
		</header>
		<main>
			<BackgroundScreenSty padding="1rem 2rem">
				<SearchBar />
				<CardsHolder />
			</BackgroundScreenSty>
		</main>
		<footer />
	</AppSty>
);

export default App;
