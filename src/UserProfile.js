import React, {Component} from 'react';
import Draggable from 'react-draggable';
import UserProfile from '@bit/komaltalwar.trial.user-profile';

export default class UserProfilee extends Component{
  render(){
    return(
      <Draggable>
      <div className="pos">

        <UserProfile
           username={""+this.props.name}
        />


      </div>
      </Draggable>
    );
  }
}
