import React from 'react';
import Wrapper from "./select.style";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import  Header  from './../header/header'
import { CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom'

export default function Select(props) {

  return (
    <Wrapper {...props}>
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        > 
            <div className="root">
                <Card className="cellphone">
                    <Link to={'/buyer'}>
                        <Button
                        style={{
                            backgroundImage: `url(https://futebol-120387120312.s3.us-east-2.amazonaws.com/teams/option_1.jpg)`,
                            width: "100%",
                            height: "145px",
                            margin: "200px 0 0 0"
                        }}
                        />
                    </Link>
           
                    <Link to={'/'}>
                        <Button
                        variant='outlined'
                        style={{
                            backgroundImage: `url(https://futebol-120387120312.s3.us-east-2.amazonaws.com/teams/option_2.jpg)`,
                            width: "100%",
                            height: "145px",
                            margin: "20px 0 0 0"
                        }}
                        />
                    </Link>
                </Card>
            </div>

        </Grid>

    </Wrapper>

  );
}