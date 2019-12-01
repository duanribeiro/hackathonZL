import React from 'react';
import Wrapper from "./buyer.style";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom'
import SearchBar from 'material-ui-search-bar'
import SellerCard from './../../components/seller_card/seller_card'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import News from './../../components/news/news'

import Menu from './../../components/menu/menu'

export default function Buyer(props) {

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
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
            <img
            style={{margin: "10px 10 0px 40%", borderRadius: "50%", width: "60px", height: "60px"}}
            src="https://futebol-120387120312.s3.us-east-2.amazonaws.com/teams/1234.jpg"></img>

            <News/>
            </Grid>

                <SearchBar
                    placeholder='Buscar'
                    style={{
                        margin: '0 auto',
                    }}
                    />
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/buyer_info/2pac'>
                <SellerCard
                image={"data:image/jpeg;base64,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"}
                title='Brigadeiro do 2PAC'
                description='Av. Brigadeiro Luiz Antonio, 985'
                min_value="10"
                max_value="30"
                stars={2}
                show="None"
                />
                </Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/buyer_info/3'>
                <SellerCard
                image={"https://www.w3schools.com/w3images/avatar3.png"}
                title='Playstation 2'
                description='Av. Rogerio Filipino, 25'
                min_value="150"
                max_value="250"
                stars={1}
                show="None"
                show1="None"
                />
                 </Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/buyer_info/2'>
                    <SellerCard
                    image={"https://cdn2.iconfinder.com/data/icons/old-people-face-avatar-1/500/old_49-512.png"}
                    title='Saco Cimento 12Kg'
                    description='Av. Carapicuiba, 12-A'
                    min_value="18"
                    max_value="43"
                    stars={4}
                    />
                </Link>
               
                <Menu/>

                </Card>
                
            </Grid>
        </div>


    </Wrapper>

  );
}