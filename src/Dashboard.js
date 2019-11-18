import React,{Component} from 'react';
import GraphPrompt from './GraphPrompt';
import Graph from './Graph';
import DashboardWorkspace from './DashboardWorkspace';
import Greeting from './Greeting';
import '../node_modules/react-vis/dist/style.css';
import LineGraph from './LineGraph';
import Navigation from '@bit/komaltalwar.trial.navigation';
import TitleList from '@bit/komaltalwar.trial.title-list';
import Item from '@bit/komaltalwar.trial.item';
import Logo from '@bit/komaltalwar.trial.logo';
import UserProfile from '@bit/komaltalwar.trial.user-profile';
import HeroButton from '@bit/komaltalwar.trial.hero-button';
import ListToggle from '@bit/komaltalwar.trial.list-toggle';
import Hero from  '@bit/komaltalwar.trial.hero';
// import Draggable from 'react-draggable';

// import { data } from './Data1.js';
import "./App.css";

export default class Dashboard extends Component{
    constructor(props){
        console.clear();
        super(props);
        const {id} = props.match.params;
        this.state = {
            componentsArray:[],
            buttonprompt:false,
            fieldVal: "",
            name:id
        }

        console.log("HERE"+id);

        this.onUpdate=this.onUpdate.bind(this);
        this.bclick = this.bclick.bind(this);
        this.greetclick= this.greetclick.bind(this);
    }
    onUpdate = (val) => {
        console.log(val);
        this.setState({
          fieldVal: val
        })
        this.setState({
            buttonprompt:false
        });
         this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Graph color={val}/>
            )
        });
        console.log(this.state.componentsArray);
    };
    bclick(){
        this.setState({
            buttonprompt:true
        });
        // this.setState({
        //     componentsArray: this.state.componentsArray.concat(
        //         <Button/>
        //     )
        // });
        // console.log(this.state.componentsArray);
    }
    greetclick(){
        this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Greeting name={this.state.name} />
            )
        });
        console.log(this.state.componentsArray);
    }

    render(){

        return(
            <div className="fixoverflow">
                <div className="sidebar">
                    <button onClick={this.bclick}>Graph</button>
                    <button onClick={this.greetclick}>Greeting</button>
                    <br/>
                </div>
                {this.state.buttonprompt ?
                    <GraphPrompt onUpdate={this.onUpdate} />:
                    null
                }
                <DashboardWorkspace rendercomponents={this.state.componentsArray}/>
                <Navigation
   links={[
     { label: 'Browse', href: 'http://browse.to.somewhere' },
     { label: 'My List', href: '/my-list' },
     { label: 'Top Picks', href: '/top' },
     { label: 'Recent', href: '/recent' }
   ]}
/>
<TitleList
   title="Trending now"
   url="discover/movie?sort_by=popularity.desc&page=1"
/>
<Item
  title='Demo List Item'
  rating={6}
  overview='This demo item brought you by the Bit team'
  backdrop='http://image.tmdb.org/t/p/original/aok7IhrbA83josNz9Dqh8tNA0Ao.jpg'
/>
<Logo />
<UserProfile
   username={"Ela loveface"}
/>
<HeroButton text="I'm a Hero!" primary />
<ListToggle />
<Hero
  title="Season 66 will be available soon!"
  description="Lorem ipsum dolor sit amet hey! id quam sapiente unde voluptatum alias vero debitis, magnam quis quod."
/>
            </div>
        );
    }
}
