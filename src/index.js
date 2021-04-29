import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

//Client side rendered app: react (cra)
    // -> database which is Firebase
    // -> react-loading-skeleton 
    // -> tailwind

//Architecture-folder structure
    //src
        //-> components,
        //-> constans,
        //-> context,
        //-> Helpers,
        //-> Hooks
        //-> pages
        //-> lib (Firebase is going to live here)
        //-> services (Firebase functions in here)
        //-> styles (talwind's folder (app/talwind))