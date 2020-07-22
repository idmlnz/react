// name the HOC with 'With'

import React from 'react';
import { withTheme } from 'styled-components';

/*
const withClass = props => (
    <div className={props.classes}> {props.children}
    </div>
);
*/

/*
   WrappedComponent has to be uppercase coz it  will be a referenced to a component
   className is an argument to component u r wrappinga and is arbitrary name

   This  HOC  has purpose adding extra to the component; ex., as in this case
     adding a div with css class around any element
*/

//distribute the props in key value pair of the wrapped component
const withClass = (WrappedComponent, className) => {
    return props => ( // this is functional component  
        <div className={className}>
            <WrappedComponent  {...props} />  
        </div>) }; 

export default withClass;

/*
 This is a normal function and  in line 5 of App.js it is in lowercase coz it is 
 */