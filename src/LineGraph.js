import React,{Component} from 'react';
import {XYPlot, LineSeries,VerticalGridLines, HorizontalGridLines,XAxis,YAxis} from 'react-vis';
import Draggable from 'react-draggable';
import '../node_modules/react-vis/dist/style.css';

import { data4 } from './Data4';

export default class LineGraph extends Component{
    render(){
        return(
            <Draggable>
                <XYPlot height={300} width={300}>
                        <VerticalGridLines />
                        <HorizontalGridLines/>
                        <XAxis />
                        <YAxis/>
                    <LineSeries data={data4} />
                    </XYPlot>
            </Draggable>
                    
        );
}
}