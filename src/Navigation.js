import React, {Component} from 'react';
import Draggable from 'react-draggable';
import Navigation from '@bit/komaltalwar.trial.navigation';

export default class Navigationn extends Component{
  render(){
    return(
      <Draggable>
      <div className="pos">

        <Navigation
          links={[
           { label: 'Browse', href: 'http://browse.to.somewhere' },
           { label: 'My List', href: '/my-list' },
           { label: 'Top Picks', href: '/top' },
           { label: 'Recent', href: '/recent' }
          ]}
        />


      </div>
      </Draggable>
    );
  }
}
