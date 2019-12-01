import React from 'react';
import Wrapper from "./intro.style";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import  Header  from './../header/header'
import { CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { Animate }  from 'react-simple-animate';

export default function Intro(props) {
    setTimeout(() => {
        window.location.href = "http://localhost:3000/buyer"
      }, 3000);
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
                <Animate
                play={true} // set play true to start the animation
                duration={3} // how long is the animation duration
                delay={0.3} // how many delay seconds will apply before the animation start
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
                complete={{ display: 'none' }}
                easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
                >
                <img
                    style={{marginLeft: "-70px"}}
                    src="https://futebol-120387120312.s3.us-east-2.amazonaws.com/teams/7c025519-e83e-44d3-b1b4-d4c84a44e20d.jpg"></img>
               
                </Animate>
            </Card>
            </div>

        </Grid>

    </Wrapper>

  );
}