import React from 'react';
import Wrapper from "./menu.style";
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
import ChatIcon from '@material-ui/icons/Chat';


export default function Menu(props) {

  return (
    <Wrapper {...props}>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        >
            <div style={{marginTop: "120px"}}/>
            <Grid  item>
            <Link style={{
                marginLeft: "-10px",
                textDecoration: 'none',
                color: 'white'
             }}
                 to='/seller'>
                <Fab variant="extended" style={{width: "120px"}}>
                    <BookmarkBorderIcon  />
                    Anuncie
                </Fab>
            </Link>
              
            </Grid>

            <Grid item>
                <Link style={{ textDecoration: 'none', color: 'white' }} to={'/profile'}>
                <Fab variant="extended">
                    <PersonIcon/>
                    Perfil
                </Fab>
                </Link>
            </Grid>
            <Grid item>
                <Link style={{ textDecoration: 'none', color: 'white' }} to={'/chat'}>
                <Fab variant="extended">
                    <ChatIcon/>
                    Chat
                </Fab>
                </Link>
            </Grid>
        </Grid>
    </Wrapper>

  );
}