import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import uuid from 'uuid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));


const Admin = () => {
  const classes = useStyles();
  const baseurl = 'https://tally2.azurewebsites.net/api/';
  const [open, setOpen] = React.useState(false);
  let assignmentObject;
  let schoolsObject;
  let AssignmentsObject;
  let AssignmentResponsesObject;

  let classesObject = [];
  const getAllClasses = async (event) => {
    const response = await fetch('https://tally2.azurewebsites.net/api/Classes', {method: 'GET'});
    console.log(response)
    classesObject = await response.json();
    console.log(JSON.stringify(classesObject));
    document.getElementById('classesdiv').innerHTML = JSON.stringify(classesObject);
  }

  let classObject = [];
  const getClass = async (event) => {
    let classID = document.getElementById('classid').value;
    const response = await fetch('https://tally2.azurewebsites.net/api/Classes/' + classID,{mehtod: 'GET'});
    console.log(response)
    classObject = await response.json();
    console.log(JSON.stringify(classObject));
    document.getElementById('classdiv').innerHTML = JSON.stringify(classObject);
  }

  const getSchool = async (event) => {

  }
  const addSchool = async (event) => {

  }

  const getAssignment = async (event) => {

}
const addAssignment = async (event) => {

}
const getAssingmentResponse = async (event) => {

}
const addAssignmentResponse = async (event) => {

}
const getAllSchools = async (event) => {

}
const addStudent = async (event) => {
    const studentID = parseInt(document.getElementById('studentclassid').value);
    const studentschoolID = parseInt(document.getElementById('studentschoolid').value);
    const schoolID = parseInt(document.getElementById('studentid').value);
    let body = {
        studentID: studentID,
        instructorID: studentschoolID,
        schoolID: schoolID,
    }
    try {
      const response = await fetch(baseurl + 'Classes', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      console.log('Success:', JSON.stringify(json));
    } catch (error) {
      console.error('Error:', error);
    }
}
const getAllAssignmentResponses = async (event) => {

}
const addUser = async (event) => {

    const firstName = document.getElementById('instructorid').value;
    const lastName = document.getElementById('instructorid').value;
    const email = document.getElementById('instructorid').value;
    const phoneNumber = document.getElementById('instructorid').value;
    const password = document.getElementById('instructorid').value;
    const schoolID = document.getElementById('instructorid').value;
    const classID = document.getElementById('instructorid').value;
    const instructorID = document.getElementById('instructorid').value;
    let body = {
        firstName: firstName,
        lastname: lastName,
        email: email,
        password: password,
        classID: classID,
        instructorID: instructorID,
        schoolID: schoolID,
    }
    try {
      const response = await fetch(baseurl + 'Classes', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      console.log('Success:', JSON.stringify(json));
    } catch (error) {
      console.error('Error:', error);
    }

}
const getAllAssignments = async (event) => {

}


  const addClass = async (event) => {
    const classID = parseInt(document.getElementById('classid2').value);
    const instructorID = parseInt(document.getElementById('instructorid').value);
    const schoolID = parseInt(document.getElementById('schoolid').value);
    let body = {
        classID: classID,
        instructorID: instructorID,
        schoolID: schoolID,
    }
    try {
      const response = await fetch(baseurl + 'Classes', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      }, {});
      const json = await response.json();
      console.log('Success:', JSON.stringify(json));
    } catch (error) {
      console.error('Error:', error);
    }
  }

  let usersObject = [];
  const getAllUsers = async () => {
    const response = await fetch('https://tally2.azurewebsites.net/api/users', {method: 'GET'});
    console.log(response)
    usersObject = await response.json();
    console.log(JSON.stringify(usersObject));
    document.getElementById('usersdiv').innerHTML = JSON.stringify(usersObject);
  }
  return (
    <div className={classes.root}>
        {
        /* *************************************
        // Add 
        ************************************* */
        }       
        <br></br>
        <TextField autoFocus margin="dense" id="schoolid" label="SchoolID" type="schoolID" fullWidth/>
        <TextField autoFocus margin="dense" id="classid2" label="ClassID" type="classID" fullWidth/>
        <TextField autoFocus margin="dense" id="instructorid" label="InstructorID" type="instructorID" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => addClass()}> 
            Add Class
        </Button>
        <br></br>
        <br></br>
        <TextField autoFocus margin="dense" id="firstname" label="First name" type="First Name" fullWidth />
        <TextField autoFocus margin="dense" id="lastname" label="Last Name" type="Last Name" fullWidth/>
        <TextField autoFocus margin="dense" id="email" label="Email" type="email" fullWidth/>
        <TextField autoFocus margin="dense" id="phonenumber" label="Phone Number" type="phone" fullWidth/>
        <TextField autoFocus margin="dense" id="password" label="Password" type="password" fullWidth />
        <TextField autoFocus margin="dense" id="schoolid" label="SchoolID" type="schoolID" fullWidth/>
        <TextField autoFocus margin="dense" id="classid" label="ClassID" type="classID" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => addUser()}> 
            Add User
        </Button>
        <br></br>
        <TextField autoFocus margin="dense" id="studentclassid" label="Class ID" type="schoolID" fullWidth/>
        <TextField autoFocus margin="dense" id="studentschoolid" label="School ID" type="schoolID" fullWidth/>
        <TextField autoFocus margin="dense" id="studentid" label="Student ID" type="studentID" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => addStudent()}> 
            Add Student
        </Button>
        <br></br>
        <br></br>
        <TextField autoFocus margin="dense" id="schoolid" label="School ID" type="schoolID" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => addSchool()}> 
            Add School
        </Button>
        <br></br>
        <br></br>
        <TextField autoFocus margin="dense" id="assignmentid" label="Assignment ID" type="AssignmentID" fullWidth/>
        <TextField autoFocus margin="dense" id="worksheetname" label="Worksheet Name" type="worksheetname" fullWidth/>
        <TextField autoFocus margin="dense" id="assignmentclassid" label="Class ID" type="classID" fullWidth/>
        <TextField autoFocus margin="dense" id="assignmentimagelink" label="Image Link" type="imagelink" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => addSchool()}> 
            Add Assignment
        </Button>
        <br></br>
        <br></br>
        <TextField autoFocus margin="dense" id="assignmentresponseid" label="Assignment Response ID" type="AssignmentID" fullWidth/>
        <TextField autoFocus margin="dense" id="score" label="score" type="score" fullWidth/>
        <TextField autoFocus margin="dense" id="assignmentid2" label="Assignment ID" type="assignmentid" fullWidth/>
        <TextField autoFocus margin="dense" id="assignmentresponseimagelink" label="Image Link" type="imagelink" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => addSchool()}> 
            Add Assignment
        </Button>
        <br></br>
       {
        /* *************************************
        // Get Specific
        ************************************* */
        }
        <TextField autoFocus margin="dense" id="classid" label="ClassID" type="ClassID" fullWidth/>
        <Button color="primary" variant="contained" onClick={event => getClass()}> 
            Get Class 
        </Button>
        <div id="classdiv">{classObject}</div>

        <TextField autoFocus margin="dense" id="classid" label="ClassID" type="ClassID" fullWidth/>
        <Button color="primary" variant="contained" onClick={event => getAssignment()}> 
            Get Assignment 
        </Button>
        <div id="assignmentdiv">{assignmentObject}</div>
        
        {
        /* *************************************
        // Get All
        ************************************* */
        }
        <br></br>
        <Button color="primary" variant="contained" onClick={event => getAllClasses()}> 
            Get All Classes
        </Button>
        <div id="classesdiv">{classesObject}</div>
        <br></br>
        <Button color="primary" variant="contained" onClick={(event)=>{getAllUsers();}}> 
            Get All Users 
        </Button>
        <div id="usersdiv">{usersObject}</div>
        <br></br>
        <Button color="primary" variant="contained" onClick={(event)=>{getAllSchools();}}> 
            Get All Schools 
        </Button>
        <div id="schoolsdiv">{schoolsObject}</div>
        <br></br>
        <Button color="primary" variant="contained" onClick={(event)=>{getAllAssignments();}}> 
            Get All Assignments
        </Button>
        <div id="assignmentsdiv">{AssignmentsObject}</div>
        <br></br>
        <Button color="primary" variant="contained" onClick={(event)=>{getAllAssignmentResponses();}}> 
            Get All Assignment Responses
        </Button>
        <div id="assignmentresponsesdiv">{AssignmentResponsesObject}</div>

      
    </div>
  );
};

export default Admin;
