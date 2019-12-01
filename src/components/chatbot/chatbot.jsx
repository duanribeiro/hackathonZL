import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import React from 'react';
import Wrapper from "./chatbot.style";
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

export default function Chat(props) {
    const steps = [
        {
            id: '1',
            message: 'Qual seu nome amigo?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'como posso te ajudar?',
            trigger: '4',
          },
          {
            id: '4',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message: 'Qual o seu sexo?',
            trigger: '6'
        
          },
          {
           
            id: '6',
            options: [
              { value: 'homem', label: 'homem', trigger: '7'  },
              { value: 'mulher', label: 'mulher', trigger: '7'  },
            ]
        },
    
    {
      id: '7',
      message: 'Voçe é Empreendedor ou Consumidor?',
      trigger: '8'
  
    },
    
        {
           
            id: '8',
            options: [
              { value: 'empreendedor', label: 'empreendedor', trigger: '9'  },
              { value: 'consulmidor', label: 'consumidor', trigger: '9'  },
            ]
        },{
            id: '9',
            message: 'Para gerar uma maior renda,voçe pode optar em fazer o cadastro em nossa plataforma digital',
            
        
          }
      ];
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
              
                     <img
                    style={{height: "150px", width: "100%"}}
                    src="https://us.123rf.com/450wm/fedbul/fedbul1802/fedbul180200031/95440807-burgundy-red-textured-glitter-background-shiny-sparkly-backdrop.jpg?ver=6"
                    title="Contemplative Reptile"
                    />
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
                    style={{marginLeft: "10px", height: "50px", width: "50px",}}
                    color="primary" aria-label="add">
                    <KeyboardBackspaceIcon/>
                    </Fab>

                    </Link>
              
                    <CardContent style={{height: "10px"}}>
                   
                    <ChatBot steps={steps} />

                    </CardContent>
                </CardActionArea>
               
                </Card>

        </Grid>

    </Wrapper>

  );
}