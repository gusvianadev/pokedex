import { AiOutlineGithub } from 'react-icons/ai';
import FooterSty from './Footer.style';

const Footer = () => (
	<FooterSty>
		<a
			href="https://github.com/gusvianadev/pokedex"
			target="_blank"
			rel="noopener noreferrer"
		>
			See the code! <AiOutlineGithub />
		</a>
	</FooterSty>
);

export default Footer;
