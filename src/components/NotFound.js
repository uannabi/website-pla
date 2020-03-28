import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/img/error.svg';

const NotFound = () => (
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <img class="mx-auto d-block" style={{width:"350px"}} src={Image} alt="not found"/>  
                <center><Link to="/">Return to Home Page</Link></center>
            </div>
        </div>
    </div>
    
);
export default NotFound;