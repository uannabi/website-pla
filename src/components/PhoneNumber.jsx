import React, { Component } from 'react';
import axios from 'axios';
import {PHONE_NUMBER} from './../endpoint';
import Header from './Header';
import {Button} from "react-bootstrap";
import {Input, message,Select} from 'antd'
const {Option} = Select;

export default class PhoneNumber extends Component {
    style = {
        outer:{
            background:"#6495ED",
            height:"100vh"
        },
        rowDigit:{
          marginLeft:"50px",  
          marginTop:"50px"
        },
        digits:{
            width:"7%",
            marginRight:"2%",
            height:"50px"
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
        const body = JSON.stringify({ "phone_number":phone_number, "vendor":"1" });
        // console.log(phone_number)
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
                    <div style={this.style.rowDigit} className="row">
                        <div className="col-lg-3">
                            <Select defaultValue="BD" size="large" style={{width:"120px",height:"30px",marginTop:"5px",float:"right"}}>
                                <Option value="BD">+880</Option>
                            </Select>
                        </div>
                        <div className="col col-lg-9">
                        <Input maxLength="1" style={this.style.digits} name="a" value={this.state.a} type="number" onChange={this.onChange} autoFocus onKeyPress={()=>this.refs.b.focus()}/>
                        <Input maxLength="1" ref="b" style={this.style.digits} name="b" value={this.state.b} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.c.focus()}/>
                        <Input maxLength="1" ref="c" style={this.style.digits} name="c" value={this.state.c} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.d.focus()}/>
                        <Input maxLength="1" ref="d" style={this.style.digits} name="d" value={this.state.d} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.e.focus()}/>
                        <Input maxLength="1" ref="e" style={this.style.digits} name="e" value={this.state.e} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.f.focus()}/>
                        <Input maxLength="1" ref="f" style={this.style.digits} name="f" value={this.state.f} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.g.focus()}/>
                        <Input maxLength="1" ref="g" style={this.style.digits} name="g" value={this.state.g} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.h.focus()}/>
                        <Input maxLength="1" ref="h" style={this.style.digits} name="h" value={this.state.h} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.i.focus()}/>
                        <Input maxLength="1" ref="i" style={this.style.digits} name="i" value={this.state.i} type="number" onChange={this.onChange} onKeyPress={()=>this.refs.j.focus()}/>
                        <Input maxLength="1" ref="j" style={this.style.digits} name="j" value={this.state.j} type="number" onChange={this.onChange}/>
                        </div>
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
