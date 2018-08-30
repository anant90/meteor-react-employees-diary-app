//Code executes only at the client side
//Any JavaScript code here will automatically run for us
import { Meteor } from 'meteor/meteor';
//Importing React libraries
import React from 'react';
import ReactDOM from 'react-dom';
 
import EmployeeList from '../imports/ui/components/employees_list';
//Importing the html file
import './main.html';
 
//Creating a React component
const App = () =>{
  return(
    <div> 
      <EmployeeList /> 
    </div>
  );
};
 
//After App loads into the browser, render my app to the DOM
Meteor.startup(() => {
  //Next lines says App component to be rendered at class container in main.html
  ReactDOM.render(<App/>, document.querySelector('.container'));
});