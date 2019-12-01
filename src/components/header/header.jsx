import React from 'react';
import Wrapper from "./header.style";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import StorefrontIcon from '@material-ui/icons/Storefront';
import StarIcon from '@material-ui/icons/Star';
import Login  from './../login/login'

export default function Header(props) {

  return (
    <Wrapper {...props}>
        <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        >
            <Grid item>
             
            </Grid>

            <Grid item>
                <Login/>
            </Grid>
       

        </Grid>
    </Wrapper>

  );
}