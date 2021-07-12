import "./Card.css";

// serves as a container/wrapper for components; in this case, it's a wrapper for the css, etc 
const Card = (props) =>{
	const classes = "card " + props.className;   // the css; classes, will now have selectors
	                                             // card and expense-item in props.className

	return <div className={classes}>{props.children}</div>;
};

export default Card;
