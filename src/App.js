import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom';
import Login from './Login';
import Homepage from './Homepage';
import Dashboard from './Dashboard';

export default class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path='/route/:id' exact component={Homepage} />
                    <Route exact path="/dashboard/:id" component={Dashboard}/>
                    <Redirect to="/404"/>
                </Switch>
            </Router>
        );
    }
}