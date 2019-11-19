import React, {Component} from 'react';
import Draggable from 'react-draggable';
import HeroButton from '@bit/komaltalwar.trial.hero-button';

export default class HeroButtonn extends Component{
  render(){
    return(
      <Draggable>
      <div className="pos">

        <HeroButton text="I'm a Hero!" primary />


      </div>
      </Draggable>
    );
  }
}
