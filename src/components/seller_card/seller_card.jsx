import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Wrapper from "./seller_card.style";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Ratings from 'react-ratings-declarative';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    margin: "10px 0"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "100px",
  },
  controls: {
    display: 'flex',
    margin: "0 0 0 5px",
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function SellerCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Wrapper {...props}>

        <Card className={classes.card}>
            <CardMedia
            className={classes.cover}
            image={props.image}
            />
        <div className={classes.details}>
            <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
                {props.title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
            {props.description}
            </Typography>
            <Chip color="primary" label="Empreendedor" style={{width: "80px", height: "15px", fontSize: "10px", display: props.show1}}/> 
            <Chip color="secondary" label="Novo Usuário" style={{marginLeft: "10px", width: "80px", height: "15px", fontSize: "10px", display: props.show}}/> 

            </CardContent>
            <div className={classes.controls}>
            <Ratings
            rating={props.stars}
            widgetRatedColors="yellow"
            widgetDimensions="20px"
            widgetSpacings="1px"
            >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
          <Typography style={{paddingLeft: "30px", fontWeight: "bold"}} variant="subtitle2" color="textSecondary">
          R${props.min_value} ~ R${props.max_value}
            </Typography>
   
          <CardActions disableSpacing>
   
      </CardActions>
            </div>
            
        </div>
                </Card>
    </Wrapper>

  );
}