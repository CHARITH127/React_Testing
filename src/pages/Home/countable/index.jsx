import React, {Component} from "react";
import Typography from "@mui/material/Typography";
import FirstButton from "../../../componants/common/button";

class Countable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decreasedCount() {
        this.setState({
            count: this.state.count - 1
        })
    }

    Reset() {
        this.setState({
            count: 0
        })
    }


    render() {
        return (
            <div>
                <Typography variant="h6" gutterBottom component="div">
                    Count : {this.state.count}
                </Typography>
                <div>
                    {/*<Button variant="contained" onClick={()=>{
                        this.incrementCount()
                    }} style={{marginLeft:'0.5rem'}}>Increased</Button>
                    <Button variant="contained" onClick={()=>{
                        this.decreasedCount()
                    }} style={{marginLeft:'0.5rem'}}>Decreased</Button>
                    <Button variant="contained" onClick={()=>{
                        this.Reset()
                    }} style={{marginLeft:'0.5rem'}}>Reset</Button>*/}
                    <FirstButton
                        label="Increase"
                        variant="contained"
                        color="primary"
                        onClick={()  => {
                            this.incrementCount()
                        }}
                    />
                    <FirstButton
                        label="Decreased"
                        variant="contained"
                        color="primary"
                        onClick={()  => {
                            this.decreasedCount()
                        }}
                        style={{marginLeft:'0.5rem'}}
                    />
                </div>
            </div>
        )

    }


}

export default Countable;