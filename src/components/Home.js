import React, { Component } from 'react'
import axios from 'axios';
import {VENDOR_LOGIN} from './../endpoint';
import { message } from 'antd';

export default class Home extends Component {
    state = {
        username:"",
        password:"",
        step:1,
        name:"Tarek Ahmed",
        app_id:"1231231",
        app_secret:"123123123",
        doc:""
    }
    onChange = (event) => {
        this.setState({[event.target.name]:event.target.value});
    }
    loginSubmit = (e) =>{
        e.preventDefault();
        const config = {
            headers: {
            "Content-Type": "application/json"
            }
        };
        const {username,password} = this.state;
        const body = JSON.stringify({ "username":username, "password":password });
        axios.post(VENDOR_LOGIN,body,config)
            .then((res)=>{
                const {name,app_id,app_secret,doc} = res.data;
                this.setState({name,app_id,app_secret,doc})
                this.setState({step:2})
            })
            .catch((err)=>{
                message.error(err.response.data.error);
            })
    }
    render() {
        const {step} = this.state;
        switch(step){
            case 1:
                return (
                    <div className="wrapper">
                        <div className="container">
                            <h1>Welcome</h1>
                            <form className="form" onSubmit={this.loginSubmit}>
                                <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.onChange}/>
                                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                                <button type="submit" id="login-button" >Login</button>
                            </form>
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
                case 2:
                    return (
                        <div className="wrapper">
                            <div className="container">
                            <div class="card text-center bg-dark">
                                <div class="card-header">
                                <h1 className="text-white">Welcome {this.state.name}</h1>
                                </div>
                                    <div class="card-body">
                                    <h2 class="text-left text-white"><span class="badge badge-secondary">APP ID </span> {this.state.app_id}</h2>
                                    <h2 class="text-left text-white"><span class="badge badge-secondary">APP SECRET </span> {this.state.app_secret}</h2>
                                    <a href="#" class="btn btn-primary">See Doc</a>
                                    </div>
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
}
