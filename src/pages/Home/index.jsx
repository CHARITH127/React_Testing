import React, {Component, Fragment} from "react"
import Greeting from "./Greeting";
import Countable from "./countable";
import Divider from "@mui/material/Divider";
import Card from "../Home/cardSection/card";
import NavigationBar from "./navBar/navbar.jsx";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                {/*<Greeting name = "React"/>
                <Divider variant="middle" />
                <Countable/>*/}
                <NavigationBar/>
                <Card/>

            </Fragment>

        );
     }
}

export default HomePage