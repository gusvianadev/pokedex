import { useDispatch } from 'react-redux';
import TitleSty from './Title.style';
import { setShowSingle } from '../../redux/slicePokeCards';

const Title = () => {
	const dispatch = useDispatch();
	return (
		<TitleSty onClick={() => dispatch(setShowSingle(false))}>
			<p className="title-character title-character-1">P</p>
			<p className="title-character title-character-2 title-character__on-top">
				o
			</p>
			<p className="title-character title-character-3">k</p>
			<p className="title-character title-character-4 title-character__on-top">
				é
			</p>
			<p className="title-character title-character-5">d</p>
			<p className="title-character title-character-6 title-character__on-top">
				e
			</p>
			<p className="title-character title-character-7">x</p>
		</TitleSty>
	);
};
export default Title;
