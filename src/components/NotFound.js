import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/img/error.svg';

const NotFound = () => (
    // <div>
    //     <img src={Image} style={{width: 400, height: 400,marginTop:"20px"}} />
    //     <center><Link to="/">Return to Home Page</Link></center>
    // </div>
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <img class="mx-auto d-block" style={{width:"350px"}} src={Image}/>  
                <center><Link to="/">Return to Home Page</Link></center>
            </div>
        </div>
    </div>
    
);
export default NotFound;