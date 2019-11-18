import React, {Component} from 'react';
import './App.css';
 
export default class DashboardWorkspace extends Component{
    render(){
        return(
            <div class="fixoverflow">
                <p>{this.props.rendercomponents}</p>
            </div>
        );
    }
}