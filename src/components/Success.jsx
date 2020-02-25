import React, { Component } from 'react'
import Header from './Header';


export default class Success extends Component {
    style = {
        outer:{
            background:"#6495ED",
            height:"100vh"
        },
        successMsg:{
            minHeight: "70vh", /* These two lines are counted as one :-)       */
            display: "flex",
            marginLeft:"25%",
            alignItems: "center",
            color:"white"
        }
    }
    render() {
        return (
            <div style={this.style.outer}>
                <Header/>
                <div className="container">
                    <h1 style={this.style.successMsg}>Varification Successfull</h1>
                </div>
            </div>
        )
    }
}
