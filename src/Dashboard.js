import React,{Component} from 'react';
import GraphPrompt from './GraphPrompt';
import Graph from './Graph';
import DashboardWorkspace from './DashboardWorkspace';
import Greeting from './Greeting';
import '../node_modules/react-vis/dist/style.css';
import LineGraph from './LineGraph';


// import Draggable from 'react-draggable';

// import { data } from './Data1.js';
import "./App.css";

export default class Dashboard extends Component{
    constructor(props){
        console.clear();
        super(props);
        const {id} = props.match.params;
        this.state = {
            componentsArray:[],
            buttonprompt:false,
            fieldVal: "",
            name:id
        }
        
        console.log("HERE"+id);
        
        this.onUpdate=this.onUpdate.bind(this);
        this.bclick = this.bclick.bind(this);
        this.greetclick= this.greetclick.bind(this);
    }
    onUpdate = (val) => {
        console.log(val);
        this.setState({
          fieldVal: val
        })
        this.setState({
            buttonprompt:false
        });
         this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Graph color={val}/>
            )
        });
        console.log(this.state.componentsArray);
    };
    bclick(){
        this.setState({
            buttonprompt:true
        });
        // this.setState({
        //     componentsArray: this.state.componentsArray.concat(
        //         <Button/>
        //     )
        // });
        // console.log(this.state.componentsArray);
    }
    greetclick(){
        this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Greeting name={this.state.name} />
            )
        });
        console.log(this.state.componentsArray);
    }
    
    render(){
                
        return(
            <div className="fixoverflow">
                <div className="sidebar">
                    <button onClick={this.bclick}>Graph</button>
                    <button onClick={this.greetclick}>Greeting</button>
                    <br/>
                </div>
                {this.state.buttonprompt ?
                    <GraphPrompt onUpdate={this.onUpdate} />:
                    null
                }
                <DashboardWorkspace rendercomponents={this.state.componentsArray}/>
                <LineGraph />
            </div> 
        );
    }
}