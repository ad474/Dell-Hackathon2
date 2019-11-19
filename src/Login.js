import React, {Component} from 'react';
import "./logint.css";
import {Link} from 'react-router-dom';

export default class Login extends Component{
    state={term:''};
    onInputChange=(event) =>{
        this.setState({term:event.target.value});
    };
    render(){
        return(
                <div className="bg">
                    <div className="signin">
                        <h1 className = 'siLbl'>Sign In</h1>
                        <br/> <br/>
                        <label className = 'lbl'>Username</label>
                        {' '}
                        <input type = 'text' value={this.state.term} style={{color:"black"}} onChange={this.onInputChange}/>
                        <br/> <br/>
                        <label className = 'lbl'>Password</label>
                        {' '}
                        <input type = 'password' style={{color:"black"}}/>
                        <br/> <br/><br/>
                        <Link to={`route/`+this.state.term}><button className="myButton">Login</button></Link>
                        {/* <Link to="/homepage/ankita" params={{ testvalue: "hello" }}>Login</Link> */}
                        <br/>
                        {/* <button className = 'siBtn' onClick={this.buttonclick}> Sign In </button> */}
                    </div>
                </div>
        );
    }
}
