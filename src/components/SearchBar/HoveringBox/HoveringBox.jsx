import HoveringBoxSty from './HoveringBox.style';

const HoveringBox = ({ content, setDisplay }) => (
	<HoveringBoxSty setDisplay={setDisplay}>{content}</HoveringBoxSty>
);
export default HoveringBox;
