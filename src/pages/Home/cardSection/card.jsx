import React, {Component} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import seraCar from "../../../assests/image/seraCar.jpg"

class SaleCart extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props
        return(
            <div className={classes.container}>
                <Card  sx={{ maxWidth: 345 , marginLeft:'4rem'}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={seraCar}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card  sx={{ maxWidth: 345 , marginLeft:'4rem'}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={seraCar}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card  sx={{ maxWidth: 345 , marginLeft:'4rem'}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={seraCar}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>

        )
    }
}

export default withStyles(styleSheet)(SaleCart)