import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import uuid from 'uuid';
import fire from './firebase';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));



const AdminNoSQL = () => {
  const classes = useStyles();
  const db = fire.firestore()

  let classesObject = [];
  const getAllClasses = async (event) =>{
    let snap = await db.collection('classes').get();
    classesObject = snap.docs.map(doc => doc.data());
    document.getElementById('classesdiv').innerHTML = JSON.stringify(classesObject);
  }
  let usersObject = [];
  const getAllUsers = async (event) =>{
    let snap = await db.collection('users').get();
    usersObject = snap.docs.map(doc => doc.data());
    document.getElementById('usersdiv').innerHTML = JSON.stringify(usersObject);
  }
  let assignmentResponsesObject = [];
  const getAllAssignmentResponses = async (event) => {
    let snap = await db.collection('assignment-responses').get();
    assignmentResponsesObject = snap.docs.map(doc => doc.data());
    document.getElementById('assignmentresponsesdiv').innerHTML = JSON.stringify(assignmentResponsesObject);
  }
  let schoolsObject = [];
  const getAllSchools = async (event) => {
    let snap = await db.collection('schools').get();
    schoolsObject = snap.docs.map(doc => doc.data());
    document.getElementById('schoolsdiv').innerHTML = JSON.stringify(schoolsObject);
  }
  let assignmentsObject = [];
  const getAllAssignments = async (event) => {
    let snap = await db.collection('assignments').get();
    assignmentsObject = snap.docs.map(doc => doc.data());
    document.getElementById('assignmentsdiv').innerHTML = JSON.stringify(assignmentsObject);
  }
  let studentsObject = [];
  const getAllStudents = async (event) => {
    let snap = await db.collection('students').get();
    studentsObject = snap.docs.map(doc => doc.data());
    document.getElementById('studentsdiv').innerHTML = JSON.stringify(studentsObject);
  }


  let classObject = [];
  const getClass = async (event) => {
    let classID = document.getElementById('getclassid').value;
    let doc = await db.collection('classes').doc(classID).get();
    classObject.push(doc.data())
    document.getElementById('classdiv').innerHTML = JSON.stringify(classObject);
  }

  let userObject = [];
  const getUser = async (event) => {
    let userID = document.getElementById('getuserid').value;
    let doc = await db.collection('users').doc(userID).get();
    userObject.push(doc.data())
    document.getElementById('userdiv').innerHTML = JSON.stringify(userObject);

  }
  let studentObject = [];
  const getStudent = async (event) => {
    let studentID = document.getElementById('getschoolid').value;
    let doc = await db.collection('students').doc(studentID).get();
    studentObject.push(doc.data())
    document.getElementById('studentdiv').innerHTML = JSON.stringify(studentObject);

  }
  let schoolObject = [];
  const getSchool = async (event) => {
    let schoolID = document.getElementById('getschoolid').value;
    let doc = await db.collection('schools').doc(schoolID).get();
    schoolObject.push(doc.data())
    document.getElementById('schooldiv').innerHTML = JSON.stringify(schoolObject);

  }
  let assignmentObject = [];
  const getAssignment = async (event) => {
    let assignmentid = document.getElementById('getassignmentid').value;
    let doc = await db.collection('assignments').doc(assignmentid).get();
    assignmentObject.push(doc.data())
    document.getElementById('assignmentdiv').innerHTML = JSON.stringify(assignmentObject);

  }
  let assignmentResponseObject = [];
  const getAssingmentResponse = async (event) => {
    let assignmentresponseid = document.getElementById('getassignmentresponseid').value;
    let doc = await db.collection('assignment-responses').doc(assignmentresponseid).get();
    assignmentResponseObject.push(doc.data())
    document.getElementById('assignmentresponsediv').innerHTML = JSON.stringify(assignmentResponseObject);
  }

  const addSchool = async (event) => {
    const name = document.getElementById('schoolname').value;
    const address = document.getElementById('schooladdress').value;
    let body = {
        name: name,
        address: address,
    }
    let addDoc = db.collection('schools').add(body).then(ref => {
      console.log('Added document with ID: ', ref.id);
    });
  }
  const addAssignment = async (event) => {

    const worksheetID = document.getElementById('worksheetname').value;
    const classID = document.getElementById('assignmentclassid').value;
    const imageLink = document.getElementById('assignmentimagelink').value;
    let body = {
        worksheetID: worksheetID,
        classID: classID,
        imageLink: imageLink
    }
    let addDoc = db.collection('assignments').add(body).then(ref => {
        console.log('Added document with ID: ', ref.id);
      });
  }
  const addAssignmentResponse = async (event) => {

    const score = document.getElementById('score').value;
    const assignmentID = document.getElementById('assignmentid2').value;
    const imageLink = document.getElementById('assignmentresponseimagelink').value;
    let body = {
        score: score,
        assignmentID: assignmentID,
        imageLink: imageLink
    }
    let addDoc = db.collection('assignment-responses').add(body).then(ref => {
        console.log('Added document with ID: ', ref.id);
      });
  }
  const addStudent = async (event) => {
      const classId = document.getElementById('studentclassid').value;
      const studentuserid = document.getElementById('studentuserid').value;
      let body = {
          classId: classId,
          userID: studentuserid,
      }
      let addDoc = db.collection('students').add(body).then(ref => {
          console.log('Added document with ID: ', ref.id);
        });
  }
  const addUser = async (event) => {

      const firstName = document.getElementById('firstname').value;
      const lastName = document.getElementById('lastname').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const schoolID = document.getElementById('schoolid').value;
      const classID = document.getElementById('classid').value;
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
      let addDoc = db.collection('users').add(body).then(ref => {
          console.log('Added document with ID: ', ref.id);
        });

  }
  const addClass = async (event) => {
      const instructorID = document.getElementById('instructorid').value;
      const schoolID = document.getElementById('schoolid').value;
      let body = {
          instructorID: instructorID,
          schoolID: schoolID,
      }
      let addDoc = db.collection('classes').add(body).then(ref => {
          console.log('Added document with ID: ', ref.id);
        });
  }

  const updateSchool = async (event) => {
    const schoolID = document.getElementById('schoolidU').value;
    const name = document.getElementById('schoolnameU').value;
    const address = document.getElementById('schooladdressU').value;
    let body = {
        name: name,
        address: address,
    }

      let setDoc = db.collection('schools').doc(schoolID).set(body);
  }
  const updateAssignment = async (event) => {
    const assignmentID = document.getElementById('assignmentidU').value;
    const worksheetID = document.getElementById('worksheetnameU').value;
    const classID = document.getElementById('assignmentclassidU').value;
    const imageLink = document.getElementById('assignmentimagelinkU').value;
    const id = assignmentID;
    let body = {
        worksheetID: worksheetID,
        classID: classID,
        imageLink: imageLink
    }
    let setDoc = db.collection('assignments').doc(assignmentID).set(body);
  }
  const updateAssignmentResponse = async (event) => {
    const assignmentResponseID = document.getElementById('assignmentresponseidU').value;
    const score = document.getElementById('scoreU').value;
    const assignmentID = document.getElementById('assignmentid2U').value;
    const imageLink = document.getElementById('assignmentresponseimagelinkU').value;
    const id = assignmentResponseID;
    let body = {
        score: score,
        assignmentID: assignmentID,
        imageLink: imageLink
    }
    let setDoc = db.collection('assignment-responses').doc(assignmentResponseID).set(body);

  }
  const updateStudent = async (event) => {
    const studentID = document.getElementById('studentidU').value;
      const classId = document.getElementById('studentclassidU').value;
      const studentuserid = document.getElementById('studentuseridU').value;
      const id = studentID;
      let body = {
          classId: classId,
          userID: studentuserid,
      }
      let setDoc = db.collection('students').doc(studentID).set(body);

  }
  const updateUser = async (event) => {
      const userID = document.getElementById('useridU').value;
      const firstName = document.getElementById('firstnameU').value;
      const lastName = document.getElementById('lastnameU').value;
      const email = document.getElementById('emailU').value;
      const password = document.getElementById('passwordU').value;
      const schoolID = document.getElementById('schoolidU3').value;
      const classID = document.getElementById('classidU').value;
      const instructorID = document.getElementById('instructoridU').value;
      const id = userID;
      let body = {
          firstName: firstName,
          lastname: lastName,
          email: email,
          password: password,
          classID: classID,
          instructorID: instructorID,
          schoolID: schoolID,
      }
      let setDoc = db.collection('users').doc(userID).set(body);

  }
  const updateClass = async (event) => {
      const classID = document.getElementById('classidU').value;
      const id = classID;
      const instructorID = document.getElementById('instructoridU').value;
      const schoolID = document.getElementById('schoolidU2').value;
      console.log(classID)
      let body = {
          instructorID: instructorID,
          schoolID: schoolID,
      }
      let setDoc = db.collection('classes').doc(classID).set(body);

  }

  const deleteUser = async (event) => {
    let userID = document.getElementById('getuserid-D').value;
    let deleteDoc = db.collection('users').doc(userID).delete();
  }
  const deleteClass = async (event) => {
    let classID = document.getElementById('getclassid-D').value;
    let deleteDoc = db.collection('classes').doc(classID).delete();
  }
  const deleteStudent = async (event) => {
    let studentID = document.getElementById('getstudentid-D').value;
    let deleteDoc = db.collection('students').doc(studentID).delete();
  }
  const deleteSchool = async (event) => {
    let schoolID = document.getElementById('getschoolid-D').value;
    let deleteDoc = db.collection('schools').doc(schoolID).delete();

  }
  const deleteAssignment = async (event) => {
    let assignmentid = document.getElementById('getassignmentid-D').value;
    let deleteDoc = db.collection('assignments').doc(assignmentid).delete();

  }
  const deleteAssingmentResponse = async (event) => {
    let assignmentid = document.getElementById('getassignmentresponseid-D').value;
    let deleteDoc = db.collection('assignment-responses').doc(assignmentid).delete();
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

export default AdminNoSQL;
