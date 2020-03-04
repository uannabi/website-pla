import React, { Component } from 'react';
import axios from 'axios';
import {PHONE_NUMBER} from './../endpoint';
import {Button} from "react-bootstrap";
import {message,Select} from 'antd'
const {Option} = Select;

export default class PhoneNumber extends Component {
    style = {
        outer:{
            background:"#6495ED",
            height:"100vh"
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
        const phone_number = "880"+a+b+c+d+e+f+g+h+i+j;
        const config = {
            headers: {
            "Content-Type": "application/json"
            }
        };
        const body = JSON.stringify({ "phone_number":phone_number, "vendor":localStorage.getItem("plaappid") });
        axios.post(PHONE_NUMBER,body,config)
            .then(res=>{
                console.log(res.data.message)
                this.props.history.push('/otp',{phone_number})
            })
            .catch(err=>{
                message.error(err.response.data.error);
            })
    }
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div style={this.style.rowDigit} className="row-fluid">
                        <Select defaultValue="BD" size="large" className="country-dropdown col-3">
                            <Option value="BD">+880</Option>
                        </Select>
                        <input className="col-md-auto digits" name="a" value={this.state.a} type="number" onChange={this.onChange} autoFocus onKeyPress={()=>this.refs.b.focus()} maxLength="1"/>
                        <input maxLength="1" ref="b" className="col-md-auto digits" name="b" value={this.state.b} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.c.focus()}/>
                        <input maxLength="1" ref="c" className="col-md-auto digits" name="c" value={this.state.c} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.d.focus()}/>
                        <input maxLength="1" ref="d" className="col-md-auto digits" name="d" value={this.state.d} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.e.focus()}/>
                        <input maxLength="1" ref="e" className="col-md-auto digits" name="e" value={this.state.e} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.f.focus()}/>
                        <input maxLength="1" ref="f" className="col-md-auto digits" name="f" value={this.state.f} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.g.focus()}/>
                        <input maxLength="1" ref="g" className="col-md-auto digits" name="g" value={this.state.g} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.h.focus()}/>
                        <input maxLength="1" ref="h" className="col-md-auto digits" name="h" value={this.state.h} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.i.focus()}/>
                        <input maxLength="1" ref="i" className="col-md-auto digits" name="i" value={this.state.i} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.j.focus()}/>
                        <input maxLength="1" ref="j" className="col-md-auto digits" name="j" value={this.state.j} type="number" onChange={this.onChange}/>
                    </div>
                    <div className="text-center" style={{margin:"10px"}}>
                        <Button variant="success" onClick={this.sendOTP}>Send OTP</Button>
                    </div>

                    <div className="container-fluid">
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
                <ul className="bg-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}
