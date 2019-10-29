import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));


const Dashboard = () => {
  const classes = useStyles();
  const baseurl = 'https://tally2.azurewebsites.net/api/';
  const [open, setOpen] = React.useState(false);

  const getClass = async (event) => {
    let classID = document.getElementById('classid').value;
    const response = await fetch('https://tally2.azurewebsites.net/api/Classes/' + classID,{method: 'GET'});
    console.log(response)
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));
  }

  const addClass = async (event) => {
    //fetch the endpoint and send the student
    console.log('sent this class: ', classID)
    let classID = document.getElementById('classid').value;
    try {
      const response = await fetch(baseurl + 'Classes', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(classID), // data can be `string` or {object}!
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
  


  const handleClickOpenClass = () => {
    setOpen(true);
  };

  const handleCloseClass = () => {
    setOpen(false);
  };

  const practice = async () => {
    const response = await fetch('https://tally2.azurewebsites.net/api/users', {method: 'GET'});
    console.log(response)
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));
  }

  return (
    <div className={classes.root}>
      {
        /* *************************************
        // Dialog Pop Up
        ************************************* */
        }
        <Button color="primary" variant="contained" onClick={handleClickOpenClass}> 
            Get Class 
        </Button>
        <Button color="primary" variant="contained" onClick={(event)=>{   
              practice();
          }}> 
            practice 
        </Button>
        <Dialog open={open} onClose={handleCloseClass} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Get Class</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the information below to get a Class
          </DialogContentText>
          <TextField
            autoFocus margin="dense" id="name" label="ClassID" type="ClassID" fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseClass} color="primary">
            Cancel
          </Button>
          <Button onClick={event => getClass()} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalUsers />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TasksProgress />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalProfit />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestSales />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <UsersByDevice />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <LatestProducts />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestOrders />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
