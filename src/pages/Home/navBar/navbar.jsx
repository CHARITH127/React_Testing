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
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            DashBoard
                        </Typography>
                        <Link to="login">
                            <Button color="inherit">Item</Button>
                        </Link>
                        <Button color="inherit">Customer</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}

export default NavigationBar