import React,{Component} from 'react';
import DashboardWorkspace from './HTMLWorkspace';
import ButtonPrompt from './ButtonPrompt';
import Button from './Button';
import Draggable from 'react-draggable';
import LineGraph from './LineGraph';
import GraphPrompt from './GraphPrompt';
import Graph from './Graph';


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
            name:id,
            graphprompt:false
        }
        
        this.onUpdate=this.onUpdate.bind(this);
        this.bclick = this.bclick.bind(this);
        this.h1click= this.h1click.bind(this);
        this.h2click= this.h2click.bind(this);
        this.h3click= this.h3click.bind(this);
        this.labelclick= this.labelclick.bind(this);
        this.inputclick= this.inputclick.bind(this);
        this.passwordclick= this.passwordclick.bind(this);
        this.paraclick= this.paraclick.bind(this);
        this.graphclick= this.graphclick.bind(this);
        this.lgraphclick= this.lgraphclick.bind(this);
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
                <Button color={val}/>
            )
        });
        console.log(this.state.componentsArray);
    };
    bclick(){
        this.setState({
            buttonprompt:true
        });
    }
    h1click(){
        this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Draggable>
                    <h1 className="htmlh1 pos">Loren Ipsum</h1>
                </Draggable>
            )
        });
    }
    h2click(){
        this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Draggable>
                    <h1 className="htmlh2 pos">Loren Ipsum</h1>
                </Draggable>
            )
        });
    }
    h3click(){
        this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Draggable>
                    <h1 className="htmlh3 pos">Loren Ipsum</h1>
                </Draggable>
            )
        });
    }

    labelclick(){
        this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Draggable>
                    <h3 className="hlabel">Label</h3>
                    {/* <label className="hlabel">Label</label> */}
                </Draggable>
            )
        });
    }

    inputclick(){
        this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Draggable>
                    <input type="text"></input>
                    {/* <label className="hlabel">Label</label> */}
                </Draggable>
            )
        });
    }

    passwordclick(){
        this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Draggable>
                    <input type="password"></input>
                    {/* <label className="hlabel">Label</label> */}
                </Draggable>
            )
        });
    }

    paraclick(){
        this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Draggable>
                    <div className="resize" contenteditable="true">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula fringilla dictum. Sed quis auctor nunc. Cras et turpis semper, tincidunt nulla at, laoreet diam. </p>
                    </div>
                    {/* <label className="hlabel">Label</label> */}
                </Draggable>
            )
        });
    }
    graphclick(){
        console.log("Here");
        this.setState({
            graphprompt:true
        });
    }
    onUpdatee = (val) => {
        console.log(val);
        this.setState({
          fieldVal: val
        })
        this.setState({
            graphprompt:false
        });
         this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Graph color={val}/>
            )
        });
        console.log(this.state.componentsArray);
    };

    lgraphclick(){
        this.setState({
            componentsArray: this.state.componentsArray.concat(
                <LineGraph/>
            )
        });
    }
    
    render(){
        return(
            <div className="fixoverflow">
                <div className="sidebar">
                    <p class="sp">Choose the component you want to add</p>
                    <hr style={{color:"white"}}></hr>
                    <button className="importedbutton" color="white" style={{color:"black"}} onClick={this.bclick}>Button</button>
                    <br/>
                    <button className="shtml shtmlh1"  onClick={this.h1click}>Heading 1</button>
                    <br/>
                    <button className="shtml shtmlh2"  onClick={this.h2click}>Heading 2</button>
                    <br/>
                    <button className="shtml shtmlh3"  onClick={this.h3click}>Heading 3</button>
                    <br/>
                    <button className="shtml" onClick={this.labelclick}>Label</button>
                    <br/>
                    <button className="shtml" onClick={this.inputclick}>Input field</button>
                    <br/>
                    <button className="shtml mb" onClick={this.passwordclick}>Password</button>
                    <br/>
                    <button className="shtml" onClick={this.paraclick}>Paragraph</button>
                    <br/>
                    <button className="" style={{color:"black"}} onClick={this.graphclick}>Bar Graph</button>
                    <br/>
                    <button className="" style={{color:"black"}} onClick={this.lgraphclick}>Line graph</button>
                    <br/>
                </div>
                {this.state.buttonprompt ?
                    <ButtonPrompt onUpdate={this.onUpdate} />:
                    null
                }
                {this.state.graphprompt ?
                    <GraphPrompt onUpdate={this.onUpdatee} />:
                    null
                }
                <DashboardWorkspace rendercomponents={this.state.componentsArray}/>
                
            </div> 
        );
    }
}