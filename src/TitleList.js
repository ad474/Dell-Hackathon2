import React, {Component} from 'react';
import Draggable from 'react-draggable';
import TitleList from '@bit/komaltalwar.trial.title-list';
import "./App.css";

export default class TitleListt extends Component{
  render(){
    return(
      <Draggable>
      <div className="titlelist pos">

        <TitleList
           title="Trending now"
           url="discover/movie?sort_by=popularity.desc&page=1"
        />


      </div>
      </Draggable>
    );
  }
}
