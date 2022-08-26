import React, {Component, Fragment} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

class NavBar extends Component{
    constructor(props) {
        super(props);

    }


    render() {
        return(
            <Fragment>
                <Box sx={{ flexGrow: 1 }}>
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
            </Fragment>
        )
    }
}

export default NavBar