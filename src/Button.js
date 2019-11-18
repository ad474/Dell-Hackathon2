import React,{Component} from 'react';
import Draggable from 'react-draggable';
import "./App.css";

export default class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            color:this.props.color
        }
        console.log(this.state.color);
        
    }
    render(){
        return(
            <div >
                <Draggable>
                <button className="importedbutton pos" contenteditable style={{backgroundColor:""+this.state.color+""}}> Hello world</button>
                </Draggable>
            </div>
        );
    }
}