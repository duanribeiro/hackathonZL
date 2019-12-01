import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import React from 'react';
import Wrapper from "./profile.style";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import  Header  from './../header/header'
import { CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import ChatBot from 'react-simple-chatbot';

import Typography from '@material-ui/core/Typography';

export default function Profile(props) {
  
  return (
    <Wrapper {...props}>
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        > 
            <Card className="cellphone">
                <CardActionArea>
                    <div
                    style={{
                        position: "absolute",
                        top: "80px",
                        left: "250px",
                        height: "100px",
                        width: "100px",
                        backgroundColor: "white",
                        borderRadius: "50%"
                    }}>
                    <img
                    style={{height: "100px", width: "100px", borderRadius: "50%"}}
                    src="https://www.w3schools.com/w3images/avatar2.png"
                    />
                    </div>
                    <Link to='/buyer'>
                    <Fab 
                    style={{marginLeft: "10px", marginTop: "10px", height: "50px", width: "50px",}}
                    color="primary" aria-label="add">
                    <KeyboardBackspaceIcon/>
                    </Fab>
                    </Link>

                    <CardContent style={{height: "10px"}}>
                      <TextField
                      fullwidth
                      label="Nome"
                      rowsMax="4"
                      margin="normal"
                      /> <br/>
                      <TextField
                      fullwidth
                      label="Endereço"
                      rowsMax="4"
                      margin="normal"
                      /><br/>
                      <TextField
                      fullwidth
                      label="Telefone"
                      rowsMax="4"
                      margin="normal"
                      /><br/>

                      <TextField
                      style={{width: "350px"}}
                      fullwidth
                      label="Descrição"
                      multiline
                      rowsMax="4"
                      margin="normal"
                      />
                   
                    </CardContent>
                </CardActionArea>
               
                </Card>

        </Grid>

    </Wrapper>

  );
}