//import React, { Component } from "react";
import React, { PureComponent } from "react";
import Person from "./Person/Person";

//class Persons extends Component {
class Persons extends PureComponent {
	/*
    static getDerivedPropsFromState(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }
    */

	/*
    componentWillReceiveProps() {
        console.log('[Persons.js] componentWillReceiveProps', props);
    }
    */

	/*
   componentWillUpdate() {
        console.log('[Persons.js] componentWillReceiveProps', props);
   }
   */

	// if no changes in props, do not render Persons component (performance)
	// optimization of stateful component
	/*shouldComponentUpdate(nextProps, nextState) {
		console.log("[Persons.js] shouldComponentUpdate");
        if (nextProps.persons !== this.props.persons ||
            nextProps.changed != this.props.children ||
            nextProps.clicked != this.props.clicked)  {
			return true;
		} else {
			return false;
		}
    }
    */

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("[Persons.js] getSnapshotBeforeUpdate");
		return { message: "snapshot" };
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("[Persons.js] componentDidUpdate");
		console.log(snapshot);
	}

	// Add any code when component is removed
	componentWillUnmount() {
		console.log("[Persons.js] componentWillUnmount");
	}

	render() {
		console.log("[Person.js] is rendering....");
		return this.props.persons.map((person, index) => {
			return (
				<Person
					click={() => this.props.clicked(index)}
					name={person.name}
					age={person.age}
					key={person.id}
					changed={(event) => this.props.changed(event, person.id)}
				/>
			);
		});
	}
}

export default Persons;
