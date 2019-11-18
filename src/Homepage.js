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
             
             <div class="container">               
                <div class="row">
                    <div class="col-sm-6">
                    <div className="left_div">
                    <h2 align="center" className='heading_homepage'> Create your dashboard</h2>
                    <Link to="/html"><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/add-folder-1707028-1448949.png"className='image_div'/></Link>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="right_div">
                    <h2 align="center" className='heading_homepage'> Create your website </h2>
                    <Link to={`/dashboard/`+this.state.name}><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/add-folder-1707028-1448949.png"className='image_div'/ ></Link>
                    </div>
                </div>
                </div>              
                </div>
            
        );
    }
}