import React, {Component} from 'react';
import './App.css';

export default class DashboardWorkspace extends Component{
    render(){
        return(
          <div contenteditable="true">
            <div class="fixoverflow">
                {this.props.rendercomponents}
            </div>
            </div>
        );
    }
}
