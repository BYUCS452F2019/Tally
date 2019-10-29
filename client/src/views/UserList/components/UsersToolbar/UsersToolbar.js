import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const UsersToolbar =  props => {
    const {parentCallback, className, ...rest } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const baseurl = 'https://tally2.azurewebsites.net/api/';


    const getStudent = async (event) => {
        let studentID = document.getElementById('studentid').value;
        const response = await fetch('https://tally2.azurewebsites.net/api/Students/' + studentID,{method: 'GET'});
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));
    }

    const addStudent = async (event) => {
      let studentID = document.getElementById('studentid').value;
      try {
        const response = await fetch(baseurl + 'Students', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(studentID), 
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

    const handleClickOpenStudent = () => {
      setOpen(true);
    };

    const handleCloseStudent = () => {
      setOpen(false);
    };
    


  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button color="primary"
          variant="contained" onClick={handleClickOpenStudent}>
          Add Student
        </Button>
        <Dialog open={open} onClose={handleCloseStudent} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Student</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill in the information below to add a student
            </DialogContentText>
            <TextField autoFocus margin="dense" id="studentid" label="Student ID" type="id" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseStudent} color="primary">
              Cancel
            </Button>
            <Button onClick={event => addStudent()} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search student"
          onChange={(event)=>{   
              parentCallback(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
