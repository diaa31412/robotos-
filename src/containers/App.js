import React,{Component} from 'react';
import {connect} from 'react-redux';
import SearchBox from '../components/searchbox.js';
import CardList from '../components/cardlist.js';
import {robots} from './robots.js';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import {setSearchField, requestRobotos} from '../action.js';



const mapStatetoProps =state =>{
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobotos.robots,
    isPending: state.requestRobotos.isPending,
    error: state.requestRobotos.error
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
     onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
     onRequestRobotos: () => dispatch(requestRobotos())
   }
}

class App extends Component{


componentDidMount(){
  this.props.onRequestRobotos();


  }



  render(){
    const {searchField,onSearchChange,robots , isPendding}=this.props;
    const filterRobots=robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

     if (isPendding === false){
       return <h1>Loading...</h1>
     }else{
        return(
          <div className="tc">
            <h1 className="f2">RobotosFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
              <ErrorBoundry>
                <CardList robots={filterRobots}/>
              </ErrorBoundry>
            </Scroll>
          </div>
        );
    }
  }

}

export default connect(mapStatetoProps,mapDispatchToProps)(App);
