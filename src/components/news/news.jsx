import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import { Typography } from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

export default function News() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{marginLeft: "10px"}}>
      <IconButton color="primary" variant='outlined' style={{marginLeft: "180px"}} onClick={handleClickOpen}>
          <EventAvailableIcon style={{"color": "white"}} />
      </IconButton>
  
      <Dialog style={{width: "300px", margin: "auto"}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Notícias
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
           <b>17/02 </b>- Baile bailinho bailão nesse final de semana que vem !!
          </Typography>
          <br/>
          <Typography gutterBottom>
          <b>18/02</b> - Feira do rolo !!! Traga sua bugigangas para troca e venda!!.
          </Typography>

          <br/>
          <Typography gutterBottom>
          <b>11/03</b> - Semana de concientização da juventude !
          </Typography>
   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Voltar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}