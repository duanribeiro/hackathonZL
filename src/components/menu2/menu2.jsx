import React from 'react';
import Wrapper from "./menu2.style";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import StorefrontIcon from '@material-ui/icons/Storefront';
import StarIcon from '@material-ui/icons/Star';
import Login  from './../login/login'
import Fab from '@material-ui/core/Fab';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Ratings from 'react-ratings-declarative';

export default function Menu2(props) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
      };

  return (
    <Wrapper {...props}>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        >
            <Grid item>
                <Link to='/buyer' style={{ textDecoration: 'none', color: 'white' }}>
                <Fab variant="extended" style={{ height: "30px", width: "100px"}}>
                    Voltar
                </Fab>  
                </Link>
                <IconButton onClick={() => window.open("https://api.whatsapp.com/send?phone=5511932037247&text=exemplo")}
                style={{marginLeft: "20px"}}>
                    <WhatsAppIcon style={{"color": "white"}} />
                </IconButton>
      <Fab style={{marginLeft: "20px", height: "30px", width: "100px"}}variant="outlined" onClick={handleClickOpen}>
        Avaliar
      </Fab>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Avaliar
        </DialogTitle>
        <DialogContent dividers>
            <Ratings
            rating={3.403}
            widgetDimensions="40px"
            widgetSpacings="15px"
        >
             <Ratings.Widget />
             <Ratings.Widget />
             <Ratings.Widget />
             <Ratings.Widget />
            <Ratings.Widget />
        </Ratings>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>


                
            </Grid>
        </Grid>
    </Wrapper>

  );
}