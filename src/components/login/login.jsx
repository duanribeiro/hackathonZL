import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Login() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{"color": "white", fontSize: "18px"}} variant="inherit"  onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog style={{width: "300px", margin: "auto"}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="user"
            label="Usuário"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Senha"
            type='password'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Voltar
          </Button>
          <Button onClick={handleClose} color="primary">
            Logar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}