import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import {OTP} from './../endpoint';
import axios from 'axios';
import { Progress ,message,Input} from 'antd';

export default class Otp extends Component {
        style = {
            digits:{
                width:"7%",marginRight:"2%",height:"50px"
            },
        timer:{
            marginLeft:"50px"
        }
    }
    state = {
        a : "",
        b : "",
        c : "",
        d : "",
        timer:60
    }
    onChange = event => {
        this.setState({[event.target.name]:event.target.value})
    }
    confirmOTP = () => {
        const {a,b,c,d} = this.state;
        const otp = a+b+c+d;
        const config = {
            headers: {
            "Content-Type": "application/json"
            }
        };
        const body = JSON.stringify({ "phone_number":this.props.location.phone_number, "vendor":localStorage.getItem('plaappid'),"otp":otp });
        axios.post(OTP,body,config)
            .then(res=>{
                localStorage.setItem("Token",res.data.Token)
                this.props.history.push('/success')
            })
            .catch(err=>{
                message.error(err.response.data.error);
            })
    }
    componentDidMount(){
        this.tick = setInterval(() => {
            this.setState({timer: this.state.timer-1});
        }, 1000);
    }
    componentWillMount (){
        clearInterval(this.tick);
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row" style={{display: "flex",alignItems: "center",width: "100%",alignContent:"center",marginLeft:"33%",marginTop:"100px"}}>
                        <input style={this.style.digits} name="a" value={this.state.a} type="number" maxLength="1" onChange={this.onChange} autoFocus onKeyPress={()=>this.refs.b.focus()}/>
                        <input ref="b" style={this.style.digits} name="b" value={this.state.b} type="number" maxLength="1" onChange={this.onChange} onKeyPress={()=>this.refs.c.focus()}/>
                        <input ref="c" style={this.style.digits} name="c" value={this.state.c} type="number" maxLength="1" onChange={this.onChange} onKeyPress={()=>this.refs.d.focus()}/>
                        <input ref="d" style={this.style.digits} name="d" value={this.state.d} type="number" maxLength="1" onChange={this.onChange}/>
                    </div>
                    <div className="text-center" style={{margin:"10px"}}>
                        <Button variant="success" onClick={this.confirmOTP}>Confirm OTP</Button>
                    </div>
                    <h5 style={{color:"white"}} className="text-center">
                        Tap to continue to accept ada Reach Privacy Policy .
                    </h5>
                </div>   
                <div className="container">
                <Progress
                    type="circle" 
                    percent={this.state.timer}
                    width={80}
                    format={percent => `${percent}`}
                    strokeColor={{
                    '0%': 'red',
                    '100%': 'green',
                    }} 
                />
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
// import React, { Component } from 'react';
// import Header from './Header';
// import {Button} from "react-bootstrap";
// import {OTP} from './../endpoint';
// import axios from 'axios';
// import { Progress ,message} from 'antd';

// export default class Otp extends Component {
//     style = {
//         outer:{
//             background:"#6495ED",
//             height:"100vh"
//         },
//         rowDigit:{
//           marginLeft:"42%",  
//           marginRight:"50px",
//           marginTop:"50px"
//         },
//         digits:{
//             width:"7%",marginRight:"2%",height:"50px"
//         },
//         timer:{
//             marginLeft:"50px"
//         }
//     }
//     state = {
//         a : "",
//         b : "",
//         c : "",
//         d : "",
//         timer:60
//     }
//     onChange = event => {
//         this.setState({[event.target.name]:event.target.value})
//     }
//     confirmOTP = () => {
//         const {a,b,c,d} = this.state;
//         const otp = a+b+c+d;
//         const config = {
//             headers: {
//             "Content-Type": "application/json"
//             }
//         };
//         const body = JSON.stringify({ "phone_number":"+8801933049097", "vendor":"1","otp":otp });
//         axios.post(OTP,body,config)
//             .then(res=>{
//                 localStorage.setItem("Token",res.data.Token)
//                 this.props.history.push('/success')
//             })
//             .catch(err=>{
//                 message.error(err.response.data.error);
//             })
//     }
//     componentDidMount(){
//         this.tick = setInterval(() => {
//             this.setState({timer: this.state.timer-1});
//         }, 1000);
//     }
//     componentWillMount (){
//         clearInterval(this.tick);
//     }

//     render() {
//         return (
//                 <div style={this.style.outer}>
//                     <Header/>
//                     <div className="container">
//                         <Progress
//                             className="float-right" 
//                             style={this.style.timer} 
//                             type="circle" 
//                             percent={this.state.timer}
//                             width={80}
//                             format={percent => `${percent}`}
//                             strokeColor={{
//                                 '0%': 'red',
//                                 '100%': 'green',
//                             }} 
//                         />
//                     </div>
//                     <div className="container">
//                         <div style={this.style.rowDigit} className="row">
//                             <input style={this.style.digits} name="a" value={this.state.a} type="text" maxLength="1" onChange={this.onChange} autoFocus onKeyPress={()=>this.refs.b.focus()}/>
//                             <input ref="b" style={this.style.digits} name="b" value={this.state.b} type="text" maxLength="1" onChange={this.onChange} onKeyPress={()=>this.refs.c.focus()}/>
//                             <input ref="c" style={this.style.digits} name="c" value={this.state.c} type="text" maxLength="1" onChange={this.onChange} onKeyPress={()=>this.refs.d.focus()}/>
//                             <input ref="d" style={this.style.digits} name="d" value={this.state.d} type="text" maxLength="1" onChange={this.onChange}/>
//                         </div>
//                         <div className="text-center" style={{margin:"10px"}}>
//                             <Button variant="success" onClick={this.confirmOTP}>Confirm OTP</Button>
//                         </div>

//                         <h5 style={{color:"white"}} className="text-center">
//                             Tap to continue to accept ada Reach Privacy Policy .
//                         </h5>
//                     </div>
//                 </div>
//         )
//     }
// }
