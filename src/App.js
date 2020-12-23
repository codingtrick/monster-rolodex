// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.components';
import {SearchBox } from './components/search-box/search-box.components';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monster : [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => (
      response.json()
    ))
    .then(users => this.setState({monster:users}));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value})
  };

  render(){

    const { monster, searchField}  = this.state;
    const FilterMonster = monster.filter(monster =>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
        placeholder="search monster" 
        handleChange ={this.handleChange} />

        <CardList monster={FilterMonster} /> 
      </div>
    );
  }
}

export default App;
