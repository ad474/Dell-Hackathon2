import React,{Component} from 'react';
import GraphPrompt from './GraphPrompt';
import Graph from './Graph';
import DashboardWorkspace from './DashboardWorkspace';
import Greeting from './Greeting';
import '../node_modules/react-vis/dist/style.css';
import LineGraph from './LineGraph';
import Navigation from './Navigation';
import TitleList from './TitleList';
import Item from './Item';
import Logo from './Logo';
import UserProfile from './UserProfile';
import HeroButton from './HeroButton';
// import ListToggle from './ListToggle';
import Hero from  './Hero';
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

        this.greetclick= this.greetclick.bind(this);
        this.navigation= this.navigation.bind(this);
        this.titlelist= this.titlelist.bind(this);
        this.item= this.item.bind(this);
        this.logo= this.logo.bind(this);
        this.userprofile= this.userprofile.bind(this);
        this.herobutton= this.herobutton.bind(this);
        // this.listtoggle= this.listtoggle.bind(this);
        this.hero= this.hero.bind(this);
    }
    // onUpdate = (val) => {
    //     console.log(val);
    //     this.setState({
    //       fieldVal: val
    //     })
    //     this.setState({
    //         buttonprompt:false
    //     });
    //      this.setState({
    //         componentsArray: this.state.componentsArray.concat(
    //             <Graph color={val}/>
    //         )
    //     });
    //     console.log(this.state.componentsArray);
    // };
    // bclick(){
    //     this.setState({
    //         buttonprompt:true
    //     });
    //     // this.setState({
    //     //     componentsArray: this.state.componentsArray.concat(
    //     //         <Button/>
    //     //     )
    //     // });
    //     // console.log(this.state.componentsArray);
    // }
    greetclick(){
        this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Greeting name={this.state.name} />
            )
        });
        console.log(this.state.componentsArray);
    }
    navigation(){
      this.setState({
          componentsArray: this.state.componentsArray.concat(
            <Navigation/>
          )
      });
    }
    titlelist(){
      this.setState({
          componentsArray: this.state.componentsArray.concat(
            <TitleList/>
          )
      });
    }
    item(){
      this.setState({
          componentsArray: this.state.componentsArray.concat(
            <Item/>
          )
      });
    }
    logo(){
      this.setState({
          componentsArray: this.state.componentsArray.concat(
            <Logo/>
          )
      });
    }
    userprofile(){
      this.setState({
          componentsArray: this.state.componentsArray.concat(
            <UserProfile name={this.state.name}/>
          )
      });
    }
    herobutton(){
      this.setState({
          componentsArray: this.state.componentsArray.concat(
            <HeroButton/>
          )
      });
    }
    // listtoggle(){
    //   this.setState({
    //       componentsArray: this.state.componentsArray.concat(
    //         <ListToggle />
    //       )
    //   });
    // }
    hero(){
      this.setState({
          componentsArray: this.state.componentsArray.concat(
            <Hero/>
          )
      });
    }
    render(){

        return(
            <div className="fixoverflow">
                <div className="sidebar">

                    <button className="dbuttons" onClick={this.greetclick}>Greeting</button>
                    <button className="dbuttons" onClick={this.navigation}>Navigation</button>
                    <button className="dbuttons" onClick={this.titlelist}>Title List</button>
                    <button className="dbuttons" onClick={this.item}>Item</button>
                    <br/>
                    <button className="dbuttons" onClick={this.logo}>Logo</button>
                    <button className="dbuttons" onClick={this.userprofile}>User Profile</button>
                    <button className="dbuttons" onClick={this.herobutton}>Hero Button</button>
                    <button className="dbuttons" onClick={this.hero}>Hero</button>
                    <br/>
                </div>
                {this.state.buttonprompt ?
                    <GraphPrompt onUpdate={this.onUpdate} />:
                    null
                }
                <DashboardWorkspace rendercomponents={this.state.componentsArray}/>
            </div>
        );
    }
}
