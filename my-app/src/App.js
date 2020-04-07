import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import UserFollowers from './components/UserFollowers';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { user: {}, followers: [] }
  }

  componentDidMount(){
    axios
      .get(`https://api.github.com/users/devjaymoe`)
      .then(response => {
        this.setState({
          user: response.data
        });
      })
      .catch(error => {
        console.log('Error:', error)
      })
    axios.get('https://api.github.com/users/devjaymoe/followers')
      .then(response => {
          //console.log('in followers', response.data)
        this.setState({
          followers: response.data
        })
      })
      .catch(error => {
        console.log('The follower data was not recieved:', error)
      })

  }


  render() {
    //console.log(this.state.followers)
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <UserCard user={this.state.user}/>
        <UserFollowers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
