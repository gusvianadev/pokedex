import NavBarFunctions from './NavBarFunctions';
import Button from '../Button/Button';
import NavBarSty from './NavBar.style';

const NavBar = ({ singleCard, isLoading, isError }) => {
	const { buttonsToRender } = NavBarFunctions({
		singleCard,
		isLoading,
		isError,
	});

	return (
		<NavBarSty>
			{buttonsToRender.map((btn, i) => (
				<Button
					key={`single-card nav-bar btn number ${i + 1}`}
					aria={btn.aria}
					type="button"
					btnStyles={{
						width: '40px',
						minHeight: '25px',
						margin: '0px',
					}}
					content={btn.content}
					onClick={btn.onClick}
					disabled={btn.disabled || false}
					isLoading={isLoading}
				/>
			))}
		</NavBarSty>
	);
};

export default NavBar;
