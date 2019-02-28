import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import { Route } from 'react-router-dom';


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
        <Route exact path='/' render={
          props => <FriendsList {...props} friends={this.state.friends}
        /> }
      />
        <Route exact path='/addfriend' render={Props => (
          <AddFriendForm {...Props} 
          newFriend={this.state.newFriend}
          changeHandler={this.changeHandler}
          addFriend={this.state.addFriend}
          />
        )}
        />
      </>
    );
  }
  }
export default App;
