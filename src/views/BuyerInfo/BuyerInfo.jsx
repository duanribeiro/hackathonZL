import React from 'react';
import Wrapper from "./buyer_info.style";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom'
import SearchBar from 'material-ui-search-bar'
import SellerCardInfo from './../../components/seller_info_card/seller_card_info'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Menu2 from './../../components/menu2/menu2'

export default function BuyerInfo(props) {
    const avatar = props.history.location['pathname'].split('/').pop(-1)

  return (
    <Wrapper {...props}>
         
        <div className="root">

        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
            <Card className="cellphone">

                <h2 style={{marginLeft: "5%"}}>Perfil</h2>

                <SellerCardInfo
                image={`https://www.w3schools.com/w3images/avatar${avatar}.png`}
                title='Brigadeiro do 2PAC'
                description='Av. Brigadeiro Luiz Antonio, 985'
                min_value="10"
                max_value="30"
                stars={2}
                />
                <br/><br/>
                <Menu2/>
            
            </Card>
            </Grid>
        </div>


    </Wrapper>

  );
}