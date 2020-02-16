import React, { Component }from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
        console.log('1');
    }

    componentDidMount() {
        this.setState({ robots: robots});
        console.log('2');
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        console.log('3');
        return (
            <div className='tc'>
            <h1 className='f2'>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={ filteredRobots } />
            </div>
        );

    }
}
   

export default App;