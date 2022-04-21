import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../../assets/admin/css/styles.css';
import '../../assets/admin/css/sb-admin-2.css';
import '../../assets/admin/css/sb-admin-2.min.css';
import '../../assets/admin/js/scripts.js';
import { Link } from "react-router-dom";



const MasterLayout = () => {
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
                                            <div class="col-auto">
                                                <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-m font-weight-bold text-success  mb-1">
                                                Active Check-In</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4" style={{alignText:'center'}}>
                                <Link  className="btn btn-success btn-lg" to="#" style={{height: '99.2%', width: '100%', }}  type="button"><b>CHECK IN</b></Link>    
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                            <Link  className="btn btn-danger btn-lg" to="#" style={{height: '99.2%', width: '100%'}}  type="button"><b>CHECK OUT</b></Link> 
                        </div>
                    </div>

                    <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Customers</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                                        <td>Montero Sport</td>
                                        <td>09876543211</td>
                                        <td>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#customer">Edit</button>
                                        <button type="button" class="btn btn-danger" style={{marginLeft:'10px'}}>Delete</button>
                                            <div class="modal fade" id="customer" tabindex="-1" aria-labelledby="customer" aria-hidden="true">
                                                <div class="modal-dialog modal-sm">
                                                    <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h4 className="modal-title">CHECK IN / EDIT</h4>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form>
                                                        <div class="form-check mb-1">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                            <label class="form-check-label" for="flexRadioDefault1">
                                                                Motorcycle
                                                            </label>
                                                        </div>
                                                        <div class="form-check mb-1">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                            <label class="form-check-label" for="flexRadioDefault1">
                                                                Car
                                                            </label>
                                                        </div>

                                                        <div class="mb-1">
                                                            <label class="form-label"></label>
                                                            <input type="text" class="form-control"  placeholder="VEHICLE PLATE"/>
                                                        </div>
                                                        <div class="mb-1">
                                                            <label class="form-label"></label>
                                                            <input type="text" class="form-control"  placeholder="VEHICLE MODEL"/>
                                                        </div>
                                                        <div class="mb-1">
                                                            <label class="form-label"></label>
                                                            <input type="text" class="form-control" placeholder="CONTACT NUMBER"/>
                                                        </div>

                                                        </form>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                        <button type="button" class="btn btn-primary">Save</button>
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
                                        <td>Montero Sport</td>
                                        <td>09876543211</td>
                                        <td> 
                                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cashier">Edit</button>
                                            <button type="button" class="btn btn-danger" style={{marginLeft:'10px'}}>Delete</button>
                                            <div class="modal fade" id="cashier" tabindex="-1" aria-labelledby="cashier" aria-hidden="true">
                                                <div class="modal-dialog modal-sm">
                                                    <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h4 className="modal-title">EDIT / ADD CASHIER</h4>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form>
                                                        <div class="form-check mb-1">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                            <label class="form-check-label" for="flexRadioDefault1">
                                                                Motorcycle
                                                            </label>
                                                        </div>
                                                        <div class="form-check mb-1">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                            <label class="form-check-label" for="flexRadioDefault1">
                                                                Car
                                                            </label>
                                                        </div>

                                                        <div class="mb-1">
                                                            <label class="form-label"></label>
                                                            <input type="text" class="form-control"  placeholder="VEHICLE PLATE"/>
                                                        </div>
                                                        <div class="mb-1">
                                                            <label class="form-label"></label>
                                                            <input type="text" class="form-control"  placeholder="VEHICLE MODEL"/>
                                                        </div>
                                                        <div class="mb-1">
                                                            <label class="form-label"></label>
                                                            <input type="text" class="form-control" placeholder="CONTACT NUMBER"/>
                                                        </div>
                                                        <div class="mb-1">
                                                            <label class="form-label"></label>
                                                            <input type="text" class="form-control" placeholder="CONTACT NUMBER"/>
                                                        </div>
                                                        <div class="mb-1">
                                                            <label class="form-label"></label>
                                                            <input type="text" class="form-control" placeholder="CONTACT NUMBER"/>
                                                        </div>

                                                        </form>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                        <button type="button" class="btn btn-primary">Save</button>
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


