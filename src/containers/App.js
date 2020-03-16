import React, {Fragment} from 'react';
import { Component } from 'react';
import {robots} from '../robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchField: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <Fragment>
                <div className='tc'>
                    <h1>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            </Fragment>
        )
    }
}

export default App;