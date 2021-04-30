import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';


ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
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