import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";

class App extends Component {
	constructor(props) {
		super(props);
		console.log("[App.js constructor");
	}

	state = {
		persons: [
			{ id: "id1", name: "Sahara", age: 35 },
			{ id: "id2", name: "Daniel", age: 4 },
			{ id: "id3", name: "Joshua", age: 1 },
		],
		otherState: "some other value",
		showPersons: false,
		showCockpit: true,
		changeCounter: 0,
		authenticated: false,
	};

	static getDerivedStateFromProps(props, state) {
		console.log("[apps.js] getDerivedStateFromProps", props);
		return state;
	}

	componentDidMount() {
		console.log("[App.js] componentDidMount");
	}

	shouldComponentUpdate(nextProp, nextState) {
		console.log("[Apps.js] shouldComponentUpdate");
		return true;
	}

	componentDidUpdate() {
		console.log("[App.js] componentDidMount");
	}

	/*
    componentWillMount() {
        console.log('[App.js] componentWillMount');
    }
    */

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex],
		};

		// const person = Object.assign({}, this.state.persons[personIndex]);

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		/* since changeCounter is dependent on prev state  it should be recoded 
        this.setState({ 
            persons: persons, // not dependent on previous state
            changeCounter: this.state.changeCounter + 1
        });
        */

		/* recommended way of updating state dependent on prev state; i.e., 
              changeCounter   
        */
		this.setState((prevState, props) => {
			return {
				persons: persons,
				changeCounter: prevState.changeCounter + 1,
			};
		});
	};

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	loginHandler = () => {
		this.setState({ authenticated: true });
	};

	render() {
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
					isAuthenticated={this.state.authenticated}
				/>
			);
		}

		return (
			<Aux>
				<button
					onClick={() => {
						this.setState({ showCockpit: false });
					}}
				>
					Remove Cockpit
				</button>

                {/* wrap the component that needs the authentication component */}
                <AuthContext.Provider value={{ 
                    authenticated: this.state.authenticated ,
                    login: this.loginHandler
                }}>
					{this.state.showCockpit ? (
						<Cockpit
							title={this.props.appTitle}
							showPersons={this.state.persons}
							personsLength={this.state.persons.length}
							clicked={this.togglePersonsHandler}
						/>
					) : null}
					{persons}
				</AuthContext.Provider>
			</Aux>
		);
	}
}

export default withClass(App, classes.App);
