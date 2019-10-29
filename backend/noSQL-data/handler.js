'use strict';
//const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();
const studentTable = process.env.STUDENT_DATA_TABLE;
const uuid = require('uuid/v4');

function response(statusCode, message){
  console.log(message)
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  }
}


// *****************************************************
// Student CRUD
// *****************************************************

// Create a post
module.exports.postStudentData = async (event, context, callback) => {
  const reqBody = JSON.parse(event.body);

  if(!reqBody.userid || !reqBody.classid){
    return callback(null, response(400, {error: 'Student must belong to a class and a user'}))
  }

  const student = {
    studentID: uuid(),
    userID: reqBody.userid,
    classID: reqBody.classid,
  }

  return db.put({
    TableName: studentTable,
    Item: student
  }).promise().then(() => {
    callback(null, response(201, student))
  }).catch(err => response(null, response(err.statusCode, err)));
};

// Get a student
module.exports.getStudentData = (event, context, callback) => {
  const studentID = event.pathParameters.studentID;
  console.log('studentID: ', studentID)
  const params = {
    Key: {
      studentID: studentID
    },
    TableName: studentTable
  }

  return db.get(params).promise()
    .then(res => {
      if(res.Item) callback(null, response(200, res.Item))
      else callback(null, response(404, {error: 'Student not found'}))
    }).catch(err => response(null, response(err.statusCode, err)));

};

// Update a Student
module.exports.updateStudentData = async (event, context, callback) => {
  const studentID = event.pathParameters.studentID;
  const body = JSON.parse(event.body);

  const paramName = body.paramName;
  const paramValue = body.paramValue;
  const updateExp = "set " + paramName + " = :v";
  console.log('parmValue', paramValue);
  const params = {
    Key: {
      studentID: studentID
    },
    TableName: studentTable,
    ConditionExpression: 'attribute_exists(studentID)',
    UpdateExpression: updateExp,
    ExpressionAttributeValues: {
      ':v': paramValue
    },
    ReturnValue: 'ALL_NEW'
  }

  return db.update(params)
    .promise()
    .then(res => {
      callback(null, response(200, res))
    })
    .catch(err => callback(null, response(err.statusCode, err)));

}

// Delete Student
module.exports.deleteStudentData = async (event, context, callback) => {
  const studentID = event.pathParameters.studentID;
  
  const params = {
    Key: {
      studentID: studentID
    },
    TableName: studentTable
  }

  return db.delete(params)
    .promise()
    .then(() => {
      callback(null, response(200, { message: 'Student deleted successfully'} ))
    })
    .catch(err => callback(null, response(err.statusCode, err)));
}


// *****************************************************
// Class CRUD
// *****************************************************


module.exports.postClassData = async (event, context, callback) => {
  const body = event.body;

  const class_ = {
    classID = uuid(),
    gradeLevel = body.gradeLevel,
    schoolID = body.schoolID,
    instructorID = body.instructorID,
    students = body.students,
  }



}
