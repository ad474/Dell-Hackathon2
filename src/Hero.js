import React, {Component} from 'react';
import Draggable from 'react-draggable';
import Hero from  '@bit/komaltalwar.trial.hero';

export default class Heroo extends Component{
  render(){
    return(
      <Draggable>
      <div className="pos">

      <Hero
        title="Season 66 will be available soon!"
        description="Lorem ipsum dolor sit amet hey! id quam sapiente unde voluptatum alias vero debitis, magnam quis quod."
      />


      </div>
      </Draggable>
    );
  }
}
