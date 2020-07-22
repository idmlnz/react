import React, { Component } from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
	/* another way to use ref in react 16.3 is
            using constructor
    */
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef(); // newer approach
	}

	// use as "static contextType" to access the context in methods
	static contextType = AuthContext;

	componentDidMount() {
		// this will be executed after render()
		/*this.inputElement.focus();  OLDER APPROACH */
		// the last element will be focused since it is the last element that has been rendered
		//     and componnetDidMount will be executed and hence the focus
		this.inputElementRef.current.focus();

		console.log(this.context.authenticated); // made possible by line 21
	}

	/*
        ref like key is a special prop that can be passed in any component detected and understood
        by react
     */

	/*
        context api is only accessed in jsx NOT in class methods

        in React 16.6 added way to access context in methods
     */
	render() {
		console.log("[Person.js is rendering!!");
		return (
			<Aux>
				{/*
				<AuthContext.Consumer>
					{(context) =>
						context.authenticated ? (
							<p>Authenticated!</p>
						) : (
							<p>Please log in </p>
						)
					}
				</AuthContext.Consumer>
			   */
                }

					{this.context.authenticated ? (
						<p>Authenticated!</p>
					) : (
						<p>Please log in </p>
					)}

				<p onClick={this.props.click}>
					I'm {this.props.name} and I am {this.props.age} years old!
				</p>
				<p key="i2"> {this.props.children} </p>
				<input
					key="i3"
					/*ref={ (inputEl) => { this.inputElement = inputEl } }   OLDER APPROACH */

					/* inputEl is a reference to the input element where we put the ref on
                                                                                                                ref can be used in any element
                                                                                                                this approach will only work on class based not in FUNCTIONAL component
                                                                                                  */
					ref={this.inputElementRef} // newer approach
					type="text"
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Aux>
		);
	}
}

/*
 Set the prop and the type for this component  to use and will throw error or warning if passed in incorrect prop
   can be added in functional component also 
 */
Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
