import React from 'react'
import { FaceLabContext } from '../../context/Context';
import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

const AlertMessage = () => {
    const { alert, setAlert } = FaceLabContext();
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
    }

    setAlert({open : false});
  };
  return (
    <div className='alert'>
        <Snackbar open={alert.open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.type}>
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default AlertMessage