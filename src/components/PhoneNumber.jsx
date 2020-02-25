import React, { Component } from 'react';
import axios from 'axios';
import {PHONE_NUMBER} from './../endpoint';
import Header from './Header';
import {Button} from "react-bootstrap";

export default class PhoneNumber extends Component {
    style = {
        outer:{
            background:"#6495ED",
            height:"100vh"
        },
        rowDigit:{
          marginLeft:"50px",  
          marginRight:"50px",
          marginTop:"50px"
        },
        digits:{
            width:"7%",marginRight:"2%",height:"50px"
        }
    }
    state = {
        a : "",
        b : "",
        c : "",
        d : "",
        e : "",
        f : "",
        g : "",
        h : "",
        i : "",
        j : ""
    }
    onChange = event => {
        this.setState({[event.target.name]:event.target.value})
    }
    sendOTP = () => {
        const {a,b,c,d,e,f,g,h,i,j} = this.state;
        const phone_number = "+880"+a+b+c+d+e+f+g+h+i+j;
        const config = {
            headers: {
            "Content-Type": "application/json"
            }
        };
        const body = JSON.stringify({ "phone_number":phone_number, "vendor":"1" });
        axios.post(PHONE_NUMBER,body,config)
        this.props.history.push('/otp',{phone_number})
    }
    render() {
        return (
            <div style={this.style.outer}>
                <Header/>
                <div className="container">
                    <div style={this.style.rowDigit} className="row">
                        <input style={this.style.digits} name="a" value={this.state.a} type="text" maxLength="1" onChange={this.onChange} autoFocus onKeyPress={()=>this.refs.b.focus()}/>
                        <input ref="b" style={this.style.digits} name="b" value={this.state.b} type="text" maxLength="1" onChange={this.onChange} onKeyPress={()=>this.refs.c.focus()}/>
                        <input ref="c" style={this.style.digits} name="c" value={this.state.c} type="text" maxLength="1" onChange={this.onChange} onKeyPress={()=>this.refs.d.focus()}/>
                        <input ref="d" style={this.style.digits} name="d" value={this.state.d} type="text" maxLength="1" onChange={this.onChange} onKeyPress={()=>this.refs.e.focus()}/>
                        <input ref="e" style={this.style.digits} name="e" value={this.state.e} type="text" maxLength="1" onChange={this.onChange} onKeyPress={()=>this.refs.f.focus()}/>
                        <input ref="f" style={this.style.digits} name="f" value={this.state.f} type="text" maxLength="1" onChange={this.onChange} onKeyPress={()=>this.refs.g.focus()}/>
                        <input ref="g" style={this.style.digits} name="g" value={this.state.g} type="text" maxLength="1" onChange={this.onChange} onKeyPress={()=>this.refs.h.focus()}/>
                        <input ref="h" style={this.style.digits} name="h" value={this.state.h} type="text" maxLength="1" onChange={this.onChange} onKeyPress={()=>this.refs.i.focus()}/>
                        <input ref="i" style={this.style.digits} name="i" value={this.state.i} type="text" maxLength="1" onChange={this.onChange} onKeyPress={()=>this.refs.j.focus()}/>
                        <input ref="j" style={this.style.digits} name="j" value={this.state.j} type="text" maxLength="1" onChange={this.onChange}/>
                    </div>
                    <div className="text-center" style={{margin:"10px"}}>
                        <Button variant="success" onClick={this.sendOTP}>Send OTP</Button>
                    </div>

                    <h5 style={{color:"white"}}>
                        Uses Password less Authentication,
                        An ada Reach Product to help you sign in. You don’t
                        need to remember username/email or password
                        anymore . An SMS or Text confirmation be may be
                        sent to verify your number. Massage and data rates
                        may apply. Learn more about us.
                    </h5>
                </div>
                
            </div>
        )
    }
}
