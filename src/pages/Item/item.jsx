import React, {Component, Fragment} from "react";
import NavBar from "../../NavBar/navBar";
import './itemStyles.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class Item extends Component{
    constructor(props) {
        super(props);

        this.state = {
            item:{
                itemCode:"",
                description:"",
                unitPrice:"",
                qtyOnHand:""
            },
            items:[]
        }
    }

    saveItem = () =>{
        let items =  this.state.items
        let item =  this.state.item
        items.push(item)
        this.clearState()
        this.setState(items)
    }

    clearState = ()=>{
        this.setState({
            item:{
                itemCode:"",
                description:"",
                unitPrice:"",
                qtyOnHand:""
            },
        })
    }

    render() {
        return(
            <Fragment>
                <NavBar/>
                <div className='itemContext'>
                    <div className='itemTextFieldContext'>
                        <TextField style={{marginRight:'3rem',width:'45rem'}} className='textField' id="itemCode" label="Item Code" variant="outlined"
                                   value={this.state.item.itemCode}
                                   onChange={(e)=>{
                                       let item = this.state.item
                                       item.itemCode = e.target.value
                                       this.setState(item)
                                   }}
                        />
                        <TextField style={{marginRight:'3rem',width:'45rem'}} className='textField' id="itemDescription" label="Item Description" variant="outlined"
                                   value={this.state.item.description}
                                   onChange={(e)=>{
                                       let item = this.state.item
                                       item.description = e.target.value
                                       this.setState(item)
                                   }}
                        />
                        <TextField style={{marginRight:'3rem',width:'45rem'}} className='textField' id="unitPrice" label="Item unit Price" variant="outlined"
                                   value={this.state.item.unitPrice}
                                   onChange={(e)=>{
                                       let item = this.state.item
                                       item.unitPrice = e.target.value
                                       this.setState(item)
                                   }}
                        />
                        <TextField style={{marginRight:'3rem',width:'45rem'}} className='textField' id="itemQty" label="Item Qty" variant="outlined"
                                   value={this.state.item.qtyOnHand}
                                   onChange={(e)=>{
                                       let item = this.state.item
                                       item.qtyOnHand = e.target.value
                                       this.setState(item)
                                   }}
                        />
                    </div>

                    <div>
                        <Button onClick={()=>{{this.saveItem()}}} variant="contained">Save</Button>
                    </div>
                </div>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Item Code</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">unit Price</TableCell>
                                <TableCell align="right">Qty OnHand</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.items.map((row) => (
                                <TableRow
                                    key={row.itemCode}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">{row.itemCode}</TableCell>
                                    <TableCell align="right">{row.description}</TableCell>
                                    <TableCell align="right">{row.unitPrice}</TableCell>
                                    <TableCell align="right">{row.qtyOnHand}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Fragment>
        )
    }

}

export default Item
