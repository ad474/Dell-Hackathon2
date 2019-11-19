import React, {Component} from 'react';
import Draggable from 'react-draggable';
import Item from '@bit/komaltalwar.trial.item';

export default class Itemm extends Component{
  render(){
    return(
      <Draggable>
      <div className="pos">

      <Item
        title='Demo List Item'
        rating={6}
        overview='This demo item brought you by the Bit team'
        backdrop='http://image.tmdb.org/t/p/original/aok7IhrbA83josNz9Dqh8tNA0Ao.jpg'
      />


      </div>
      </Draggable>
    );
  }
}
