import React,{Component} from 'react';
//import Homepage from './Homepage';

export default class GraphPrompt extends Component{
    render(){
        return(
            <div className="buttonprompt">
                <p className="bpp">Choose the color </p>
                <button className="pb" onClick={()=>this.props.onUpdate("#008ae6")}>Blue</button>
                <br/>
                <button className="pb" onClick={()=>this.props.onUpdate("#8cd98c")}>Green</button>
                <br/>
                <button className="pb" onClick={()=>this.props.onUpdate("#e6e600")}>Yellow</button>
                <br/>
                <button className="pb" onClick={()=>this.props.onUpdate("#ff471a")}>Red</button>
                <br/>
                <button className="pb" onClick={()=>this.props.onUpdate("#990099")}>Purple</button>
                <br/>
                <button className="pb" onClick={()=>this.props.onUpdate("#e6e6e6")}>White</button>
            </div>
        );
    }
}
