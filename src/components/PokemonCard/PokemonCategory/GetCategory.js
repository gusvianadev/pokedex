const GetCategory = ({ category }) => {
	const engCategory = category.filter((cat) => cat.language.name === "en");
	return { genus: engCategory[0].genus };
};

export default GetCategory;
