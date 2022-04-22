import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../../assets/admin/css/styles.css';
import '../../assets/admin/css/sb-admin-2.css';
import '../../assets/admin/css/sb-admin-2.min.css';
import '../../assets/admin/js/scripts.js';
import { Form, Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";

const MasterLayout = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (
        <div>
            <Navbar/>
            <div id="layoutSidenav_nav">
            <main>
                <div className="container-fluid px-4">
                    
                    <ol >
                        
                    </ol>
                    <div className="row">
                        <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-m font-weight-bold text-primary  mb-1">
                                                    Available</div>
                                                <div className=" h5 mb-0 font-weight-bold text-gray-800"></div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-m font-weight-bold text-success  mb-1">
                                                Active Check-In</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800"></div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4" style={{alignText:'center',}}>
                            <button className="btn btn-success btn-lg" style={{height: '99.2%', width: '100%',  }}  type="button" ><b>CHECK IN</b></button>    
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <button  className="btn btn-danger btn-lg" style={{height: '99.2%', width: '100%'}}  type="button" data-bs-toggle="modal" data-bs-target="#checkout"><b>CHECK OUT</b></button>
                                <div className="modal fade" id="checkout" tabindex="-1" aria-labelledby="checkout" aria-hidden="true">
                                    <div className="modal-dialog modal-sm">
                                        <div className="modal-content" >
                                        <div className="modal-header">
                                            <h4 className="modal-title" style={{textAlign: 'center', width: '100%'}}><b>CHECK OUT</b></h4>
                                        </div>
                                        <div className="modal-body form1">
                                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                <div className="form-check mb-1">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                    <label className="form-check-label" for="flexRadioDefault1">
                                                        Motorcycle
                                                    </label>
                                                </div>
                                                <div className ="form-check mb-1">
                                                    <input className ="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                    <label className ="form-check-label" for="flexRadioDefault1">
                                                        Car
                                                    </label>
                                                </div>
                                                <FormGroup className ="mb3" controlId="vehiclePlate">
                                                    <FormLabel></FormLabel>
                                                    <FormControl 
                                                        autoComplete="off"
                                                        required 
                                                        type="text" 
                                                        placeholder="VEHICLE PLATE"/>
                                                    <Form.Control.Feedback type="invalid">Please provide a valid input!</Form.Control.Feedback>
                                                </FormGroup>
                                                <FormGroup className ="mb-4" controlId="vehicleModel">
                                                    <FormLabel></FormLabel>
                                                    <FormControl 
                                                        autoComplete="off"
                                                        required
                                                        type="text" 
                                                        placeholder="VEHICLE MODEL"/>
                                                    <Form.Control.Feedback type="invalid">Please provide a valid input!</Form.Control.Feedback>
                                                </FormGroup>
                                                <FormGroup className="input-group mb3" controlId="contactNumber">
                                                        <Button variant="primary" type="button" id="button-addon1">+63</Button>
                                                    <FormControl 
                                                        autoComplete="off"
                                                        required
                                                        type="text"  
                                                        placeholder="CONTACT NUMBER" 
                                                        aria-label="Example text with button addon" 
                                                        aria-describedby="button-addon1"/>
                                                    <Form.Control.Feedback type="invalid">Please provide a valid input!</Form.Control.Feedback>
                                                </FormGroup>
                                                <FormGroup className="mb3" controlId="price">
                                                    <FormLabel></FormLabel>
                                                    <FormControl 
                                                        autoComplete="off"
                                                        required
                                                        type="text" 
                                                        placeholder="PRICE"/>
                                                    <Form.Control.Feedback type="invalid">Please provide a valid input!</Form.Control.Feedback>
                                                </FormGroup>
                                                <FormGroup className="mb3" controlId="receive">
                                                    <FormLabel></FormLabel>
                                                    <FormControl
                                                        autoComplete="off"
                                                        required 
                                                        type="text" 
                                                        placeholder="RECEIVED"/>
                                                    <Form.Control.Feedback type="invalid">Please provide a valid input!</Form.Control.Feedback>
                                                </FormGroup>
                                                <FormGroup className="mb-3" controlId="change">
                                                    <FormLabel></FormLabel>
                                                    <FormControl
                                                        autoComplete="off"
                                                        required 
                                                        type="text" 
                                                        placeholder="CHANGE"/>
                                                    <Form.Control.Feedback type="invalid">Please provide a valid input!</Form.Control.Feedback>
                                                </FormGroup>
                                                    <div className="modal-footer">
                                                        <Button type="submit" variant="primary" style={{width: '100%' }}>Save</Button>
                                                        <Button type="button" variant="secondary" data-bs-dismiss="modal" style={{width: '100%' }}>Cancel</Button>
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Customers</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="myTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Check-In</th>
                                        <th>Check-Out</th>
                                        <th>Type</th>
                                        <th>Vehicle Plate</th>
                                        <th>Vehicle Model</th>
                                        <th>Contact Number</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2022/04/16 12:00</td>
                                        <td>2022/04/16 15:00</td>
                                        <td>Car</td>
                                        <td>NCP EL05</td>
                                        <td>Mazda 3</td>
                                        <td>09876543211</td>
                                        <td>
                                        <Button type="button" variant="primary" data-bs-toggle="modal" data-bs-target="#customer" style={{width: '100%' }}>Edit</Button>
                                            <div className="modal fade" id="customer" tabindex="-1" aria-labelledby="customer" aria-hidden="true">
                                                <div className="modal-dialog modal-sm">
                                                    <div className="modal-content" >
                                                    <div className="modal-header">
                                                        <h4 className="modal-title" style={{textAlign: 'center', width: '100%'}}><b>CHECK IN / EDIT</b></h4>
                                                    </div>
                                                    <div className="modal-body">
                                                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                            <div className="form-check mb-2">
                                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                                <label className="form-check-label" for="flexRadioDefault1">
                                                                    Motorcycle
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-1">
                                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                                <label className="form-check-label" for="flexRadioDefault1">
                                                                    Car
                                                                </label>
                                                            </div>
                                                            <FormGroup className="mb3" controlId="vehiclePlate">
                                                                <FormLabel></FormLabel>
                                                                <FormControl
                                                                    autoComplete="off"
                                                                    required  
                                                                    type="text" 
                                                                    placeholder="VEHICLE PLATE"/>
                                                                <Form.Control.Feedback type="invalid">Please provide a valid input!</Form.Control.Feedback>
                                                            </FormGroup>
                                                            <FormGroup className="mb-4" controlId="vehicleModel">
                                                                <FormLabel></FormLabel>
                                                                <FormControl
                                                                    autoComplete="off"
                                                                    required  
                                                                    type="text"  
                                                                    placeholder="VEHICLE MODEL"/>
                                                                <Form.Control.Feedback type="invalid">Please provide a valid input!</Form.Control.Feedback>
                                                            </FormGroup>
                                                            <div className="input-group mb-3" controlId="contactNumber">
                                                                <Button className="btn btn-primary" type="button" id="button-addon1">+63</Button>
                                                                <FormControl
                                                                    autoComplete="off"
                                                                    required  
                                                                    type="text" 
                                                                    placeholder="CONTACT NUMBER" 
                                                                    aria-label="Example text with button addon" 
                                                                    aria-describedby="button-addon1"/>
                                                                <Form.Control.Feedback type="invalid">Please provide a valid input!</Form.Control.Feedback>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <Button type="submit" variant="primary" style={{width: '100%' }}>Save</Button>
                                                                <Button type="button" variant="secondary" data-bs-dismiss="modal" style={{width: '100%' }}>Cancel</Button>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Cashiers</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Cashier Name</th>
                                        <th>Contact Email</th>
                                        <th>Contact Number</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Username1</td>
                                        <td>John Doe</td>
                                        <td>john.doe@gmail.com</td>
                                        <td>09876543211</td>
                                        <td> 
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cashier">Edit</button>
                                            <button type="button" className="btn btn-danger" style={{marginLeft:'10px'}}>Delete</button>
                                            <div className="modal fade" id="cashier" tabindex="-1" aria-labelledby="cashier" aria-hidden="true">
                                                <div className="modal-dialog modal-sm" >
                                                    <div className="modal-content">
                                                        <div className="modal-header" >
                                                            <h4 className="modal-title" style={{width: '100%'}} ><b>EDIT / ADD CASHIER</b></h4>
                                                        </div>
                                                        <div className="modal-body">
                                                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                                <FormGroup className="mb-1" controlId="name">
                                                                    <FormLabel></FormLabel>
                                                                    <FormControl
                                                                        autoComplete="off"
                                                                        required  
                                                                        type="text" 
                                                                        placeholder="NAME"/>
                                                                    <Form.Control.Feedback type="invalid">Please provide a valid input!</Form.Control.Feedback>
                                                                </FormGroup>
                                                                <FormGroup className="mb-4">
                                                                    <FormLabel></FormLabel>
                                                                    <FormControl 
                                                                        autoComplete="off"
                                                                        required 
                                                                        type="text" 
                                                                        placeholder="CONTACT EMAIL"/>
                                                                    <Form.Control.Feedback type="invalid">Please provide a valid input!</Form.Control.Feedback>
                                                                </FormGroup>
                                                                <FormGroup className="input-group mb3">
                                                                    <Button variant="primary" type="button" id="button-addon1">+63</Button>
                                                                    <FormControl
                                                                        autoComplete="off"
                                                                        required  
                                                                        type="text" 
                                                                        placeholder="CONTACT NUMBER" 
                                                                        aria-describedby="button-addon1"/>
                                                                    <Form.Control.Feedback type="invalid">Please provide a valid input!</Form.Control.Feedback>
                                                                </FormGroup>
                                                                <FormGroup className="mb3">
                                                                    <FormLabel></FormLabel>
                                                                    <FormControl 
                                                                        autoComplete="off"
                                                                        required 
                                                                        type="text" 
                                                                        placeholder="USERNAME"/>
                                                                    <Form.Control.Feedback type="invalid">Please provide a valid input!</Form.Control.Feedback>
                                                                </FormGroup>
                                                                <FormGroup className="mb-4">
                                                                    <FormLabel></FormLabel>
                                                                    <FormControl
                                                                        autoComplete="off"
                                                                        required  
                                                                        type="text" 
                                                                        placeholder="PASSWORD"/>
                                                                    <Form.Control.Feedback type="invalid">Please provide a valid input!</Form.Control.Feedback>
                                                                </FormGroup>
                                                                <div className="modal-footer">
                                                                    <Button type="submit" variant="primary" style={{width: '100%' }}>Save</Button>
                                                                    <Button type="button" variant="secondary" data-bs-dismiss="modal" style={{width: '100%' }}>Cancel</Button>
                                                                </div>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
                <Footer/>
            </div>
        </div>
    );
}

export default MasterLayout;


