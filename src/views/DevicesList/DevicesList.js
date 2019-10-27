import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { DevicesToolbar, DevicesTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const DevicesList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <DevicesToolbar />
      <div className={classes.content}>
        <DevicesTable users={users} />
      </div>
    </div>
  );
};

export default DevicesList;
