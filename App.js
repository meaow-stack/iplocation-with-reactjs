import React from "react";
import IpComponent from './IpComponent';
import 'bootstrap/dist/css/bootstrap.css';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBInputGroup,
    MDBInput,
    MDBBtn,
} from 'mdb-react-ui-kit';
import "./App.css";


const loc = () => {
    return (
        <>
            <div className="body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <IpComponent />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <MDBFooter bgColor="light" className="text-center text-lg-left mt-5">
                        <MDBContainer className="p-4">
                            <MDBRow>
                                <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
                                    <h5 className="text-uppercase">The Weather App</h5>
                                    <p>
                                        Sayantan Mukherjee@Copyright
                                    </p>
                                </MDBCol>
                                <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
                                    <h5 className="text-uppercase">For Errors email at
                                        <a href="mailto:sayantanmukherjee@gmail.com"> Email</a>
                                    </h5>
                                    <p>
                                        For Any query
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>

                        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                            &copy; {new Date().getFullYear()} Copyright:{'Sayantan'}
                            <a className="text-dark" href="https://mdbootstrap.com/">
                                MDBootstrap.com
                            </a>
                        </div>
                    </MDBFooter>
                </div>
            </div>
        </>
    );
};

export default loc;
