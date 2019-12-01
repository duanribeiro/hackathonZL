import React from 'react';
import Wrapper from "./sell.style";
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
import ImageUploader from 'react-images-upload';

import Typography from '@material-ui/core/Typography';

export default function Sell(props) {

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
                <ImageUploader
                withIcon={true}
                buttonText='Selecione a Imagem'
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                 />
                    <div
                    style={{
                        position: "absolute",
                        top: "80px",
                        left: "20px",
                        height: "100px",
                        width: "100px",
                        backgroundColor: "white",
                        borderRadius: "50%"
                    }}>
           
                    </div>
                    <br/><br/>
                    <CardContent>
                        <TextField
                        fullWidth
                        label="Nome Produto"
                        margin="normal"
                        variant="outlined"
                        />
                        <TextField
                        fullWidth
                        multiline
                        label="Descrição"
                        margin="normal"
                        variant="outlined"
                        />
                        <TextField
                        fullWidth
                        label="Preço"
                        margin="normal"
                        variant="outlined"
                        />
         
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to='/buyer'>
                    <Fab style={{backgroundColor: "darkblue", color: "white"}} variant="extended">
                        Voltar
                    </Fab>  
                    </Link>
                    <Button size="small" color="primary" onClick={() => window.alert('Informações Salva!')}>
                    Salvar
                    </Button>
                </CardActions>
                </Card>

        </Grid>

    </Wrapper>

  );
}