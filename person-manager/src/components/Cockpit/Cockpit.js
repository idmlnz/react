import React, { useEffect, useRef , useContext} from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
	const toggleBtnRef = useRef(null); // pass null as initial value
    const authContext = useContext(AuthContext); // pass user defined AuthContext

    console.log('Cockpit context: ' + authContext.authenticated);

	/*
    take functions which does not take arguments, will be invoked for every
        render of cockpit
    */
	useEffect(() => {
		console.log("[Cockpit.js] useEffect");
		// http request ..
		/*
		setTimeout(() => {
			alert("Saved data to cloud");
        }, 1000);
        */

		toggleBtnRef.current.click();
		return () => {
			console.log("[Cockpit.js ] cleanup work in useEffect");
		}; // will be invoked when rendered and unmounted
	}, []); //  empty array will invoke useEffect() only once

	useEffect(() => {
		console.log("[Cockpit.js] 2nd useEffect");
		return () => {
			console.log("[Cockpit.js ] cleanup work in 2nd useEffect");
		};
	}); //  empty array will invoke useEffect() only once

	const assignedClasses = [];
	let btnClass = "";

	if (props.showPersons) {
		btnClass = classes.Red;
	}

	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red); // classes = ['red']
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold); // classes = ['red', 'bold']
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<h2 className={assignedClasses.join(" ")}>Welcome !!</h2>
			<button
				ref={toggleBtnRef}
				className={btnClass}
				onClick={props.clicked}
			>
				Toggle Persons
			</button>
            {/*
			<AuthContext.Consumer>
                { context =>
				<button onClick={context.login}> Log in </button>
                }
            </AuthContext.Consumer>
            */}
			<button onClick={authContext.login}> Log in </button>
		</div>
	);
};

// wrap functional component with React.memo if it needs not involved in direct
//      updates when the Parent is updated
export default React.memo(cockpit);
