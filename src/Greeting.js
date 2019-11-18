import React,{Component} from 'react';
import Draggable from 'react-draggable';
import "./App.css";

export default class Greeting extends Component{
    render(){
        return(
            <Draggable>
                <div className="greeting">
                    <h1 className="g1">Hi {this.props.name}</h1>
                    <br></br>
                    <h1 className="g2"> Welcome to your dashboard</h1>
                    
                    
                </div>
            </Draggable>
            
        );
    }
}
