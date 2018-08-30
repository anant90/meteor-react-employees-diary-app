//only executed on the server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/api/employees'
import {image, helpers} from 'faker';
 
Meteor.startup(() => {
    //check if data already exists
    //count the number of records in database
    const numberRecords = Employees.find({}).count();
    //filter options are specified in find, here no filter is required
    console.log(numberRecords);
    if(!numberRecords){
          //generate the records using faker
        _.times(5000, ()=>{
          const {name, email, phone} = helpers.createCard();
 
          Employees.insert({
            name, email, phone,
            avatar: image.avatar()
          }); //name, email,... equivalent to name:name, email:email,...
        });
 
    }
 
    Meteor.publish('employees', function(page_value){   //receives the argument page_value
    return Employees.find({}, {limit: page_value});
    });
});