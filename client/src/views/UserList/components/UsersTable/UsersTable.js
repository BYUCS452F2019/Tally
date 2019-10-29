import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import uuid from "uuid";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';

import { getInitials } from 'helpers';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const UsersTable = props => {
  const { className, users, ...rest } = props;
  let userInfo;
  let userID;
  const baseurl = 'https://tally2.azurewebsites.net/api/';
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const addUser = async (event) => {
    //fetch the endpoint and send the student
    console.log('sent this User: ', userInfo)

    let userID = uuid();
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phonenumber').value;
    let password = document.getElementById('password').value;
    let schoolID = document.getElementById('schoolid').value;
    let classID = document.getElementById('classid').value;

    try {
      const response = await fetch(baseurl + 'Users', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({
          userID: userID,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
          schoolID: schoolID,
          classID: classID,
        }), // data can be `string` or {object}!
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

  const getUser = async (event, id) => {
    userID = document.getElementById('userid').value;
    const response = await fetch('https://tally2.azurewebsites.net/api/Users/' + userID,{method: 'GET'});
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  const handleClickOpenUser = () => {
    setOpen(true);
  };

  const handleCloseUser = () => {
    setOpen(false);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
        {
        /* *************************************
        // Dialog Pop Up
        ************************************* */
        }
        <Button color="primary" variant="contained" onClick={handleClickOpenUser}> 
            Add User 
        </Button>
        <Dialog open={open} onClose={handleCloseUser} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the information below to add a user
          </DialogContentText>
          <TextField autoFocus margin="dense" id="firstname" label="First name" type="First Name" fullWidth />
          <TextField autoFocus margin="dense" id="lastname" label="Last Name" type="Last Name" fullWidth/>
          <TextField autoFocus margin="dense" id="email" label="Email" type="email" fullWidth/>
          <TextField autoFocus margin="dense" id="phonenumber" label="Phone Number" type="phone" fullWidth/>
          <TextField autoFocus margin="dense" id="password" label="Password" type="password" fullWidth />
          <TextField autoFocus margin="dense" id="schoolid" label="SchoolID" type="schoolID" fullWidth/>
          <TextField autoFocus margin="dense" id="classid" label="ClassID" type="classID" fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUser} color="primary">
            Cancel
          </Button>
          <Button onClick={event => addUser()} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      {
      /* *************************************
      // Page Content
      ************************************* */
      }
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>

                  <TableCell>Name</TableCell>
                  <TableCell>Grade</TableCell>
                  <TableCell>Level</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.slice(0, rowsPerPage).map(user => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={user.id}
                    selected={selectedUsers.indexOf(user.id) !== -1}
                    onClick={event => getUser(event, user.id)}
                    >
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.grade}</TableCell>
                    <TableCell>{user.level}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={users.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default UsersTable;
