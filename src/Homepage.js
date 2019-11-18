import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Homepage extends Component{
    constructor(props){
        super(props);
        const {id} = props.match.params;
        console.log(id) ;
        this.state={
            name:id
        }
    }
    render(){
        return(
            <div>
                <Link to={`/dashboard/`+this.state.name}>Dashboard</Link>
                <Link to="/html">HTML Page</Link>
            </div>
        );
    }
}