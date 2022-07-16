import {Component} from "react";
import {styleSheet} from "./style"
import {withStyles} from "@mui/styles";

class Login extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const  {classes} = this.props
        return (
            <div className={classes.container}>
                <div className={classes.title_container}></div>
                <div className={classes.form_container}></div>
                <div className={classes.button_container}></div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Login)