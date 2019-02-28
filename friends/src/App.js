import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      error: ''
    }
  }

  componentDidMount () {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({friends: res.data});
      })
      .catch(err => {
        this.setState({error: err });
      })
  }
  render() {
    return (
      <>
        <FriendsList
        friends={this.state.friends} />
      </>
    );
  }
  }
export default App;
