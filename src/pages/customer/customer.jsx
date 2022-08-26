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

class Customer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            customer:{
                nic:"",
                name:"",
                gender:"",
                mail:""
            },
            customers:[]
        }
    }

    saveCustomer = () =>{
        let customers =  this.state.customers
        let customer =  this.state.customer
        customers.push(customer)
        this.clearState()
        this.setState(customers)
    }

    clearState = ()=>{
        this.setState({
            customer:{
                nic:"",
                name:"",
                gender:"",
                mail:""
            },
        })
    }

    render() {
        return(
            <Fragment>
                <NavBar/>
                <div className='itemContext'>
                    <div className='itemTextFieldContext'>
                        <TextField style={{marginRight:'3rem',width:'45rem'}} className='textField' id="itemCode" label="NIC" variant="outlined"
                                   value={this.state.customer.nic}
                                   onChange={(e)=>{
                                       let customer = this.state.customer
                                       customer.nic = e.target.value
                                       this.setState(customer)
                                   }}
                        />
                        <TextField style={{marginRight:'3rem',width:'45rem'}} className='textField' id="itemDescription" label="Name" variant="outlined"
                                   value={this.state.customer.name}
                                   onChange={(e)=>{
                                       let customer = this.state.customer
                                       customer.name = e.target.value
                                       this.setState(customer)
                                   }}
                        />
                        <TextField style={{marginRight:'3rem',width:'45rem'}} className='textField' id="unitPrice" label="Gender" variant="outlined"
                                   value={this.state.customer.gender}
                                   onChange={(e)=>{
                                       let customer = this.state.customer
                                       customer.gender = e.target.value
                                       this.setState(customer)
                                   }}
                        />
                        <TextField style={{marginRight:'3rem',width:'45rem'}} className='textField' id="itemQty" label="Email" variant="outlined"
                                   value={this.state.customer.mail}
                                   onChange={(e)=>{
                                       let customer = this.state.customer
                                       customer.mail = e.target.value
                                       this.setState(customer)
                                   }}
                        />
                    </div>

                    <div>
                        <Button onClick={()=>{{this.saveCustomer()}}} variant="contained">Save</Button>
                    </div>
                </div>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nic</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Gender</TableCell>
                                <TableCell align="right">Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.customers.map((row) => (
                                <TableRow
                                    key={row.nic}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">{row.nic}</TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.gender}</TableCell>
                                    <TableCell align="right">{row.mail}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Fragment>
        )
    }

}

export default Customer
