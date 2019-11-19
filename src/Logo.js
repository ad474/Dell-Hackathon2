import React, {Component} from 'react';
import Draggable from 'react-draggable';
import Logo from '@bit/komaltalwar.trial.logo';

export default class Logoo extends Component{
  render(){
    return(
<Draggable>
      <div className="pos">

      <Logo/>


      </div>
      </Draggable>
    );
  }
}
