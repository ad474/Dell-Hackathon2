import React, {Component} from 'react';
import Draggable from 'react-draggable';
import ListToggle from '@bit/komaltalwar.trial.list-toggle';

export default class ListTogglee extends Component{
  render(){
    return(
      <Draggable>
      <div className="pos">
        <ListToggle />
      </div>
      </Draggable>
    );
  }
}
