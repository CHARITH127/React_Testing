import React, {Component} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";


class NavigationBar extends Component{
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar style={{backgroundColor:'#edbb91'}}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link style={{textDecoration:"none",color:"inherit"}} to={'/'}><Button color="inherit">Dashboard</Button></Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow:1}}>
                            <Link style={{textDecoration:"none",color:"inherit"}} to={'/item'}><Button color="inherit">Item</Button></Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow:16}} >
                            <Link style={{textDecoration:"none",color:"inherit"}} to={'/customer'}><Button color="inherit">Customer</Button></Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}

export default NavigationBar