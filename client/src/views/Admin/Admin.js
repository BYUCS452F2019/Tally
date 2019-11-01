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

  let classesObject = [];
  const getAllClasses = async (event) => {
    const response = await fetch('https://tally2.azurewebsites.net/api/Classes', {method: 'GET'});
    console.log(response)
    classesObject = await response.json();
    console.log(JSON.stringify(classesObject));
    document.getElementById('classesdiv').innerHTML = JSON.stringify(classesObject);
  }
  let usersObject = [];
  const getAllUsers = async () => {
      const response = await fetch('https://tally2.azurewebsites.net/api/users', {method: 'GET'});
      console.log(response)
      usersObject = await response.json();
      console.log(JSON.stringify(usersObject));
      document.getElementById('usersdiv').innerHTML = JSON.stringify(usersObject);
  }
  let assignmentResponsesObject = [];
  const getAllAssignmentResponses = async (event) => {
    const response = await fetch('https://tally2.azurewebsites.net/api/AssignmentResponses/',{mehtod: 'GET'});
    console.log(response)
    assignmentResponsesObject = await response.json();
    console.log(JSON.stringify(assignmentResponsesObject));
    document.getElementById('assignmentresponsesdiv').innerHTML = JSON.stringify(assignmentResponsesObject);
  }
  let schoolsObject = [];
  const getAllSchools = async (event) => {
    const response = await fetch('https://tally2.azurewebsites.net/api/Schools/',{mehtod: 'GET'});
    console.log(response)
    schoolsObject = await response.json();
    console.log(JSON.stringify(schoolsObject));
    document.getElementById('schoolsdiv').innerHTML = JSON.stringify(schoolsObject);
  }
  let assignmentsObject = [];
  const getAllAssignments = async (event) => {
    const response = await fetch('https://tally2.azurewebsites.net/api/Assignments/',{mehtod: 'GET'});
    console.log(response)
    assignmentsObject = await response.json();
    console.log(JSON.stringify(assignmentsObject));
    document.getElementById('assignmentsdiv').innerHTML = JSON.stringify(assignmentsObject);
  }
  let studentsObject = [];
  const getAllStudents = async (event) => {
    const response = await fetch('https://tally2.azurewebsites.net/api/Students/',{mehtod: 'GET'});
    console.log(response)
    studentsObject = await response.json();
    console.log(JSON.stringify(studentsObject));
    document.getElementById('studentsdiv').innerHTML = JSON.stringify(studentsObject);
  }

  let userObject = [];
  const getUser = async (event) => {
    let userID = document.getElementById('getuserid').value;
    const response = await fetch('https://tally2.azurewebsites.net/api/Users/' + userID,{mehtod: 'GET'});
    console.log(response)
    userObject = await response.json();
    console.log(JSON.stringify(userObject));
    document.getElementById('userdiv').innerHTML = JSON.stringify(userObject);

  }
  let classObject = [];
  const getClass = async (event) => {
    let classID = document.getElementById('getclassid').value;
    console.log(classID);
    const response = await fetch('https://tally2.azurewebsites.net/api/Classes/' + classID,{mehtod: 'GET'});
    console.log(response)
    classObject = await response.json();
    console.log(JSON.stringify(classObject));
    document.getElementById('classdiv').innerHTML = JSON.stringify(classObject);
  }
  let studentObject = [];
  const getStudent = async (event) => {
    let studentID = document.getElementById('getschoolid').value;
    const response = await fetch('https://tally2.azurewebsites.net/api/Students/' + studentID,{mehtod: 'GET'});
    console.log(response)
    studentObject = await response.json();
    console.log(JSON.stringify(studentObject));
    document.getElementById('studentdiv').innerHTML = JSON.stringify(studentObject);

  }
  let schoolObject = [];
  const getSchool = async (event) => {
    let schoolID = document.getElementById('getschoolid').value;
    const response = await fetch('https://tally2.azurewebsites.net/api/Schools/' + schoolID,{mehtod: 'GET'});
    console.log(response)
    schoolObject = await response.json();
    console.log(JSON.stringify(schoolObject));
    document.getElementById('schooldiv').innerHTML = JSON.stringify(schoolObject);

  }
  let assignmentObject = [];
  const getAssignment = async (event) => {
    let assignmentid = document.getElementById('getassignmentid').value;
    const response = await fetch('https://tally2.azurewebsites.net/api/Assignments/' + assignmentid,{mehtod: 'GET'});
    console.log(response)
    assignmentObject = await response.json();
    console.log(JSON.stringify(assignmentObject));
    document.getElementById('assignmentdiv').innerHTML = JSON.stringify(assignmentObject);

  }
  let assignmentResponseObject = [];
  const getAssingmentResponse = async (event) => {
    let assignmentresponseid = document.getElementById('getassignmentresponseid').value;
    const response = await fetch('https://tally2.azurewebsites.net/api/AssignmentResponses/' + assignmentresponseid,{mehtod: 'GET'});
    console.log(response)
    assignmentResponseObject = await response.json();
    console.log(JSON.stringify(assignmentResponseObject));
    document.getElementById('assignmentresponsediv').innerHTML = JSON.stringify(assignmentResponseObject);
  }

  const addSchool = async (event) => {
    const name = document.getElementById('schoolname').value;
    const address = document.getElementById('schooladdress').value;
    let body = {
        schoolID: 0,
        name: name,
        address: address,
    }
    try {
      const response = await fetch(baseurl + 'Schools', {
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
  const addAssignment = async (event) => {

    const worksheetID = document.getElementById('worksheetname').value;
    const classID = document.getElementById('assignmentclassid').value;
    const imageLink = document.getElementById('assignmentimagelink').value;
    let body = {
        assignmentID: 0,
        worksheetID: worksheetID,
        classID: classID,
        imageLink: imageLink
    }
    try {
      const response = await fetch(baseurl + 'Assignments', {
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
  const addAssignmentResponse = async (event) => {

    const score = document.getElementById('score').value;
    const assignmentID = document.getElementById('assignmentid2').value;
    const imageLink = document.getElementById('assignmentresponseimagelink').value;
    let body = {
        assignmentResponseID: 0,
        score: score,
        assignmentID: assignmentID,
        imageLink: imageLink
    }
    try {
      const response = await fetch(baseurl + 'AssignmentResponses', {
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
  const addStudent = async (event) => {
      const classId = parseInt(document.getElementById('studentclassid').value);
      const studentuserid = parseInt(document.getElementById('studentuserid').value);
      let body = {
          studentID: 0,
          classId: classId,
          userID: studentuserid,
      }
      try {
        const response = await fetch(baseurl + 'Students', {
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
  const addUser = async (event) => {

      const firstName = document.getElementById('firstname').value;
      const lastName = document.getElementById('lastname').value;
      const email = document.getElementById('email').value;
      const phoneNumber = document.getElementById('phonenumber').value;
      const password = document.getElementById('password').value;
      const schoolID = document.getElementById('schoolid').value;
      const classID = document.getElementById('classid').value;
      const instructorID = document.getElementById('instructorid').value;
      let body = {
          userID: 0,
          firstName: firstName,
          lastname: lastName,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
          classID: classID,
          instructorID: instructorID,
          schoolID: schoolID,
      }
      try {
        const response = await fetch(baseurl + 'Users', {
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
  const addClass = async (event) => {
      const instructorID = parseInt(document.getElementById('instructorid').value);
      const schoolID = parseInt(document.getElementById('schoolid').value);
      let body = {
          classID: 0,
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

  const updateSchool = async (event) => {
    const schoolID = document.getElementById('schoolidU').value;
    const name = document.getElementById('schoolnameU').value;
    const address = document.getElementById('schooladdressU').value;
    const id = parseInt(schoolID);
    let body = {
        schoolID: id,
        name: name,
        address: address,
    }
    console.log(body)
    console.log(schoolID)
    try {
      const response = await fetch(baseurl + 'Schools/' + schoolID, {
        method: 'PUT', // or 'PUT'
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
  const updateAssignment = async (event) => {
    const assignmentID = document.getElementById('assignmentidU').value;
    const worksheetID = parseInt(document.getElementById('worksheetnameU').value);
    const classID = parseInt(document.getElementById('assignmentclassidU').value);
    const imageLink = document.getElementById('assignmentimagelinkU').value;
    const id = parseInt(assignmentID);
    let body = {
        assignmentID: id,
        worksheetID: worksheetID,
        classID: classID,
        imageLink: imageLink
    }
    try {
      const response = await fetch(baseurl + 'Assignments/' + assignmentID, {
        method: 'PUT', // or 'PUT'
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
  const updateAssignmentResponse = async (event) => {
    const assignmentResponseID = document.getElementById('assignmentresponseidU').value;
    const score = parseInt(document.getElementById('scoreU').value);
    const assignmentID = parseInt(document.getElementById('assignmentid2U').value);
    const imageLink = document.getElementById('assignmentresponseimagelinkU').value;
    const id = parseInt(assignmentResponseID);
    let body = {
        assignmentResponseID: id,
        score: score,
        assignmentID: assignmentID,
        imageLink: imageLink
    }
    try {
      const response = await fetch(baseurl + 'AssignmentResponses/' + assignmentResponseID, {
        method: 'PUT', // or 'PUT'
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
  const updateStudent = async (event) => {
    const studentID = document.getElementById('studentidU').value;
      const classId = parseInt(document.getElementById('studentclassidU').value);
      const studentuserid = parseInt(document.getElementById('studentuseridU').value);
      const id = parseInt(studentID);
      let body = {
          studentID: id,
          classId: classId,
          userID: studentuserid,
      }
      try {
        const response = await fetch(baseurl + 'Students/' + studentID, {
          method: 'PUT', // or 'PUT'
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
  const updateUser = async (event) => {
      const userID = document.getElementById('useridU').value;
      const firstName = document.getElementById('firstnameU').value;
      const lastName = document.getElementById('lastnameU').value;
      const email = document.getElementById('emailU').value;
      const phoneNumber = document.getElementById('phonenumberU').value;
      const password = document.getElementById('passwordU').value;
      const schoolID = parseInt(document.getElementById('schoolidU3').value);
      const classID = parseInt(document.getElementById('classidU').value);
      const instructorID = parseInt(document.getElementById('instructoridU').value);
      const id = parseInt(userID);
      let body = {
          userID: id,
          firstName: firstName,
          lastname: lastName,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
          classID: classID,
          instructorID: instructorID,
          schoolID: schoolID,
      }
      try {
        const response = await fetch(baseurl + 'Users/' + userID, {
          method: 'PUT', // or 'PUT'
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
  const updateClass = async (event) => {
      const classID = document.getElementById('classidU').value;
      const id = parseInt(classID);
      const instructorID = parseInt(document.getElementById('instructoridU').value);
      const schoolID = parseInt(document.getElementById('schoolidU2').value);
      console.log(classID)
      let body = {
          classID: id,
          instructorID: instructorID,
          schoolID: schoolID,
      }
      console.log(body)
      try {
        const response = await fetch(baseurl + 'Classes/' + classID, {
          method: 'PUT', // or 'PUT'
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

  const deleteUser = async (event) => {
    let userID = document.getElementById('getuserid-D').value;
    const response = await fetch('https://tally2.azurewebsites.net/api/Users/' + userID,{method: 'DELETE'});
    console.log(response)
    console.log('deleting user')
    let responseJSON = await response.json();
    console.log(JSON.stringify(responseJSON));
  }
  const deleteClass = async (event) => {
    let classID = document.getElementById('getclassid-D').value;
    console.log(classID);
    const response = await fetch('https://tally2.azurewebsites.net/api/Classes/' + classID,{method: 'DELETE'});
    console.log(response)
    let responseJSON = await response.json();
    console.log(JSON.stringify(responseJSON));
  }
  const deleteStudent = async (event) => {
    let studentID = document.getElementById('getstudentid-D').value;
    const response = await fetch('https://tally2.azurewebsites.net/api/Students/' + studentID,{method: 'DELETE'});
    console.log(response)
    let responseJSON = await response.json();
    console.log(JSON.stringify(responseJSON));
  }
  const deleteSchool = async (event) => {
    let schoolID = document.getElementById('getschoolid-D').value;
    const response = await fetch('https://tally2.azurewebsites.net/api/Schools/' + schoolID,{method: 'DELETE'});
    console.log(response)
    let responseJSON = await response.json();
    console.log(JSON.stringify(responseJSON));

  }
  const deleteAssignment = async (event) => {
    let assignmentid = document.getElementById('getassignmentid-D').value;
    const response = await fetch('https://tally2.azurewebsites.net/api/Assignments/' + assignmentid,{method: 'DELETE'});
    console.log(response)
    let responseJSON = await response.json();
    console.log(JSON.stringify(responseJSON));

  }
  const deleteAssingmentResponse = async (event) => {
    let assignmentid = document.getElementById('getassignmentresponseid-D').value;
    const response = await fetch('https://tally2.azurewebsites.net/api/AssignmentResponses/' + assignmentid,{method: 'DELETE'});
    console.log(response)
    let responseJSON = await response.json();
    console.log(JSON.stringify(responseJSON));
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
        <TextField autoFocus margin="dense" id="studentuserid" label="User ID" type="userID" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => addStudent()}> 
            Add Student
        </Button>
        <br></br>
        <br></br>
        <TextField autoFocus margin="dense" id="schoolname" label="School Name" type="schoolname" fullWidth/>
        <TextField autoFocus margin="dense" id="schooladdress" label="School Address" type="schooladdress" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => addSchool()}> 
            Add School
        </Button>
        <br></br>
        <br></br>
        <TextField autoFocus margin="dense" id="worksheetname" label="Worksheet Name" type="worksheetname" fullWidth/>
        <TextField autoFocus margin="dense" id="assignmentclassid" label="Class ID" type="classID" fullWidth/>
        <TextField autoFocus margin="dense" id="assignmentimagelink" label="Image Link" type="imagelink" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => addAssignment()}> 
            Add Assignment
        </Button>
        <br></br>
        <br></br>
        <TextField autoFocus margin="dense" id="score" label="score" type="score" fullWidth/>
        <TextField autoFocus margin="dense" id="assignmentid2" label="Assignment ID" type="assignmentid" fullWidth/>
        <TextField autoFocus margin="dense" id="assignmentresponseimagelink" label="Image Link" type="imagelink" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => addAssignmentResponse()}> 
            Add Assignment Response
        </Button>
        <br></br>
       {
        /* *************************************
        // Get Specific 
        ************************************* */
        }
        <TextField autoFocus margin="dense" id="getclassid" label="ClassID" type="ClassID" fullWidth/>
        <Button color="primary" variant="contained" onClick={event => getClass()}> 
            Get Class 
        </Button>
        <div id="classdiv">{classObject}</div>

        <TextField autoFocus margin="dense" id="getassignmentid" label="AssignmentID" type="AssignmentID" fullWidth/>
        <Button color="primary" variant="contained" onClick={event => getAssignment()}> 
            Get Assignment 
        </Button>
        <div id="assignmentdiv">{assignmentObject}</div>

        <TextField autoFocus margin="dense" id="getassignmentresponseid" label="AssignmentResponseID" type="AssignmentResponseID" fullWidth/>
        <Button color="primary" variant="contained" onClick={event => getAssingmentResponse()}> 
            Get Assignment Response 
        </Button>
        <div id="assignmentresponsediv">{assignmentResponseObject}</div>

        <TextField autoFocus margin="dense" id="getstudentid" label="Student ID" type="studentID" fullWidth/>
        <Button color="primary" variant="contained" onClick={event => getStudent()}> 
            Get Student 
        </Button>
        <div id="studentdiv">{studentObject}</div>

        <TextField autoFocus margin="dense" id="getuserid" label="User ID" type="userID" fullWidth/>
        <Button color="primary" variant="contained" onClick={event => getUser()}> 
            Get User 
        </Button>
        <div id="userdiv">{userObject}</div>

        <TextField autoFocus margin="dense" id="getschoolid" label="SchoolID" type="SchoolID" fullWidth/>
        <Button color="primary" variant="contained" onClick={event => getSchool()}> 
            Get School 
        </Button>
        <div id="schooldiv">{assignmentObject}</div>
        
        {
        /* *************************************getassignmentresponseid
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
        <div id="assignmentsdiv">{assignmentsObject}</div>
        <br></br>
        <Button color="primary" variant="contained" onClick={(event)=>{getAllAssignmentResponses();}}> 
            Get All Assignment Responses
        </Button>
        <div id="assignmentresponsesdiv">{assignmentResponsesObject}</div>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => getAllStudents()}> 
            Get All Students
        </Button>
        <div id="studentsdiv">{studentsObject}</div>
        <br></br>

        {
        /* *************************************
        // Update
        ************************************* */
        }       
        <br></br>
        <TextField autoFocus margin="dense" id="classidU" label="Class ID" type="response" fullWidth/>
        <TextField autoFocus margin="dense" id="schoolidU2" label="SchoolID" type="schoolID" fullWidth/>
        <TextField autoFocus margin="dense" id="instructoridU" label="InstructorID" type="instructorID" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => updateClass()}> 
            update Class
        </Button>
        <br></br>
        <br></br>
        <TextField autoFocus margin="dense" id="useridU" label="User ID" type="response" fullWidth/>
        <TextField autoFocus margin="dense" id="firstnameU" label="First name" type="First Name" fullWidth />
        <TextField autoFocus margin="dense" id="lastnameU" label="Last Name" type="Last Name" fullWidth/>
        <TextField autoFocus margin="dense" id="emailU" label="Email" type="email" fullWidth/>
        <TextField autoFocus margin="dense" id="phonenumberU" label="Phone Number" type="phone" fullWidth/>
        <TextField autoFocus margin="dense" id="passwordU" label="Password" type="password" fullWidth />
        <TextField autoFocus margin="dense" id="schoolidU3" label="SchoolID" type="schoolID" fullWidth/>
        <TextField autoFocus margin="dense" id="classidU" label="ClassID" type="classID" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => updateUser()}> 
            Update User
        </Button>
        <br></br>
        <TextField autoFocus margin="dense" id="studentidU" label="Student ID" type="response" fullWidth/>
        <TextField autoFocus margin="dense" id="studentclassidU" label="Class ID" type="schoolID" fullWidth/>
        <TextField autoFocus margin="dense" id="studentuseridU" label="User ID" type="userID" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => updateStudent()}> 
            Update Student
        </Button>
        <br></br>
        <br></br>
        <TextField autoFocus margin="dense" id="schoolidU" label="School ID" type="response" fullWidth/>
        <TextField autoFocus margin="dense" id="schoolnameU" label="School Name" type="schoolname" fullWidth/>
        <TextField autoFocus margin="dense" id="schooladdressU" label="School Address" type="schooladdress" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => updateSchool()}> 
            Update School
        </Button>
        <br></br>
        <br></br>
        <TextField autoFocus margin="dense" id="assignmentidU" label="Assignment ID" type="response" fullWidth/>
        <TextField autoFocus margin="dense" id="worksheetnameU" label="Worksheet Name" type="worksheetname" fullWidth/>
        <TextField autoFocus margin="dense" id="assignmentclassidU" label="Class ID" type="classID" fullWidth/>
        <TextField autoFocus margin="dense" id="assignmentimagelinkU" label="Image Link" type="imagelink" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => updateAssignment()}> 
            Update Assignment
        </Button>
        <br></br>
        <br></br>
        <TextField autoFocus margin="dense" id="assignmentresponseidU" label="Assignment Response ID" type="response" fullWidth/>
        <TextField autoFocus margin="dense" id="scoreU" label="score" type="score" fullWidth/>
        <TextField autoFocus margin="dense" id="assignmentid2U" label="Assignment ID" type="assignmentid" fullWidth/>
        <TextField autoFocus margin="dense" id="assignmentresponseimagelinkU" label="Image Link" type="imagelink" fullWidth/>
        <br></br>
        <Button color="primary" variant="contained" onClick={event => updateAssignmentResponse()}> 
            Update Assignment Response
        </Button>
        <br></br>

        {
        /* *************************************
        // Delete Specific 
        ************************************* */
        }
        <TextField autoFocus margin="dense" id="getclassid-D" label="ClassID" type="ClassID" fullWidth/>
        <Button color="primary" variant="contained" onClick={event => deleteClass()}> 
        Delete Class 
        </Button>

        <TextField autoFocus margin="dense" id="getassignmentid-D" label="AssignmentID" type="AssignmentID" fullWidth/>
        <Button color="primary" variant="contained" onClick={event => deleteAssignment()}> 
        Delete Assignment 
        </Button>

        <TextField autoFocus margin="dense" id="getassignmentresponseid-D" label="AssignmentResponseID" type="AssignmentResponseID" fullWidth/>
        <Button color="primary" variant="contained" onClick={event => deleteAssingmentResponse()}> 
        Delete Assignment Response 
        </Button>

        <TextField autoFocus margin="dense" id="getuserid-D" label="User ID" type="userID" fullWidth/>
        <Button color="primary" variant="contained" onClick={event => deleteUser()}> 
        Delete User 
        </Button>

        <TextField autoFocus margin="dense" id="getstudentid-D" label="Student ID" type="userID" fullWidth/>
        <Button color="primary" variant="contained" onClick={event => deleteStudent()}> 
            Delete Student 
        </Button>

        <TextField autoFocus margin="dense" id="getschoolid-D" label="SchoolID" type="SchoolID" fullWidth/>
        <Button color="primary" variant="contained" onClick={event => deleteSchool()}> 
        Delete School 
        </Button>
      
    </div>
  );
};

export default Admin;
