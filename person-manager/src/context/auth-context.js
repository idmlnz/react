import React  from 'react';

/*
authContext can be an object, array, string number ext as a context value
which can be accessed from different  components
*/
const authContext = React.createContext({
    authenticated:false,
    login: () => {}  // added only for auto completion
});

export default authContext;