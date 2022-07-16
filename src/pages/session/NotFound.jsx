import FirstButton from "../../componants/common/button";
import Link from "@mui/material/Link";
import React, {Component} from "react";
import {withStyles} from "@mui/styles";

const styleSheet = () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img__container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '10px'
    }
})


class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.img__container}>
                </div>
            </div >
        )
    }
}
export default withStyles(styleSheet)(NotFound)