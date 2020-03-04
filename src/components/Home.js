import React, { Component } from 'react'
import axios from 'axios';
import {VENDOR_LOGIN,VENDOR_PROFILE} from './../endpoint';
import { message,Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;


export default class Home extends Component {
    state = {
        username:"",
        password:"",
        step:1,
        name:"First Name",
        app_id:"",
        app_secret:"",
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
                localStorage.setItem("pla",res.data.token)
                this.setState({step:2})
            })
            .catch((err)=>{
                message.error(err.response.data.error);
            })
    }
    text = 
        `
            A dog is a type of domesticated animal.
            Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
        `;
    componentDidMount() {
        const token = localStorage.getItem("pla")
        if(token){
            this.setState({step:2})
        }
    }
        
    render() {
        const {step} = this.state;
        switch(step){
            case 1:
                return (
                    <div className="wrapper">
                        <div className="container">
                            <h1>Welcome</h1>
                            <form className="form">
                                <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.onChange}/>
                                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                                <button type="submit" id="login-button" onClick={this.loginSubmit}>Login</button>
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
                const config = {
                    headers: {
                    "Content-Type": "application/json"
                    }
                };
                const token = localStorage.getItem("pla")
                config.headers["Authorization"] = `Token ${token}`;

                axios.get(VENDOR_PROFILE,config)
                    .then((res)=>{
                        const {name,app_id,app_secret} = res.data
                        localStorage.setItem("plaappid",app_id  )
                        this.setState({name,app_id,app_secret})
                    })
                    .catch((err)=>{
                        message.error(err.response.data.error);
                    })
                return (
                    <div className="wrapper">
                        <div className="container">
                        <div className="card text-center bg-dark">
                            <div className="card-header">
                            <h1 className="text-white">Welcome {this.state.name}</h1>
                            </div>
                                <div className="card-body">
                                <h2 className="text-left text-white"><span className="badge badge-secondary">APP ID </span> <span className="badge badge-secondary">{this.state.app_id}</span></h2>
                                <h2 className="text-left text-white"><span className="badge badge-secondary">APP SECRET </span> <span className="badge badge-secondary">{this.state.app_secret}</span></h2>
                                <Collapse
                                    bordered={false}
                                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                    className="site-collapse-custom-collapse"
                                >
                                    <Panel header="SDK Installation doc" key="1" className="site-collapse-custom-panel">
                                        <p>{this.text}</p>
                                    </Panel>
                                </Collapse>
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
                default:
                    return <></>

        }
    }
}
