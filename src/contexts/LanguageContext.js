// put in a separate file so that it is imported only into the components that need it
import React from 'react';

const context = React.createContext('english');

console.log(context);

export default context;
