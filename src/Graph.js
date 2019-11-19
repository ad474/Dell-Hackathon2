//this.props.color

import React,{Component} from 'react';
import Draggable from 'react-draggable';
import { data1 } from './Data1.js';
import { data2 } from './Data2';
import { data3 } from './Data3';

import { VictoryBar } from 'victory';
import { VictoryChart } from 'victory';

import "./App.css";

export default class Graph extends Component{
    constructor(props){
        super(props);
        var x=this.props.color;
        console.log(x);

    }
    // setGraph(){
    //     if(this.props.color==='finance'){
    //         this.setState({graph:data1});
    //     }
    //     else if(this.props.color==='shipping'){
    //         this.setState({graph:data2});
    //     }
    //     else{
    //         this.setState({graph:data3});
    //     }
    //     console.log(this.state.graph);

    // }
    render(){
        if(this.props.color==="data1"){
            return(
                <Draggable>
                    <div class="bargraph pos">
                    <VictoryChart>
                        <VictoryBar
                            data={data1}
                            // data accessor for x values
                            x="quarter"
                            // data accessor for y values
                            y="earnings"
                        />
                    </VictoryChart>
                    {/* {this.state.graph}?? */}
                    </div>
                    </Draggable>
            );
        }
        else if (this.props.color==="data2"){
            return(
                <Draggable>
                    <div class="bargraph pos">
                    <VictoryChart>
                    <VictoryBar
                        data={data2}
                        // data accessor for x values
                        x="quarter"
                        // data accessor for y values
                        y="earnings"
                    />
                </VictoryChart>


                    {/* {this.state.graph}?? */}
                    </div>
                    </Draggable>
            );
        }
        else{
            return(
                <Draggable>
                    <div class="bargraph pos">
                    <VictoryChart>
                        <VictoryBar
                            data={data3}
                            // data accessor for x values
                            x="quarter"
                            // data accessor for y values
                            y="earnings"
                        />
                    </VictoryChart>
                    {/* {this.state.graph}?? */}
                    </div>
                </Draggable>
            );
        }
    }
}
