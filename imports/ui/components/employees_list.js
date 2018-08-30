import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';
import { Employees } from '../../api/employees';
import { withTracker } from 'meteor/react-meteor-data';
import EmployeeDetail from './employees_detail';
 
const PAGE_VALUE = 20;
 
class EmployeeList extends Component{
  constructor(props){
    super(props);
    this.page = 1
  }
 
  onClickPage(){
    this.page+=1;
    Meteor.subscribe('employees', PAGE_VALUE * this.page);
  }
 
    render(){
    //this.props.employees => an array of employee objects
  //console.log(this.props.employees);
          return(
                <div>
                      <h2 className="text text-primary text-center"> My Employees </h2>
                      <div className="employee-list">
                            {this.props.employees.map((employee) =>
                                  <EmployeeDetail key={employee._id} employee={employee} />
                            )}
                      </div>
                      <button onClick= { this.onClickPage.bind(this) }
                      className="btn btn-primary">
                      Load more
                </button>
                </div>
          );
    };
};
 
export default withTracker(()=>{
  //set up the subscription
  Meteor.subscribe('employees', PAGE_VALUE);
  //return an object. Whatever is returned will
  //be sent to EmployeeList as props
  return {employees: Employees.find({}).fetch()};
}) (EmployeeList);