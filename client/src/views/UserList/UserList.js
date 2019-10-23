import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();
  
  const [users, setUsers] = useState({users:mockData, initial: mockData});
  const callback = (value) =>{
    var updatedList = users.initial;
    updatedList = updatedList.filter((user)=> user.name.toLowerCase().includes(value.toLowerCase()));
    setUsers({users:updatedList, initial: users.initial});
  };

  return (
    <div className={classes.root}>
      <UsersToolbar parentCallback={callback} />
      <div className={classes.content}>
        <UsersTable users={users.users} />
      </div>
    </div>
  );
};

export default UserList;
