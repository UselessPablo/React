import React from "react";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
const Notification = (props) => {
    const { open, message, onClick } = props;
  
   

    return (
                  
      <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={open}
            message={message}
            // onClick={onClick}
        >
                <Alert  variant="filled" severity="success" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
  );
};


export default Notification;