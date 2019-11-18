import React,{Component} from 'react';
//import Homepage from './Homepage';

export default class GraphPrompt extends Component{
    // update = (e) => {
    //     this.props.onUpdate(e);
    // };
    // update(val){
    //     this.props.onUpdate(val);
    // }
    render(){
        return(
            <div class="buttonprompt">
                Choose the color 
                <button onClick={()=>this.props.onUpdate("data1")}>Finance</button>
                <button onClick={()=>this.props.onUpdate("data2")}>Shipping</button>
                <button onClick={()=>this.props.onUpdate("data3")}>Sales</button>
            </div>
        );
    }
}
