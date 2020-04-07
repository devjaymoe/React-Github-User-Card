import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { user: {} }
  }

  componentDidMount(){
    axios
      .get(`https://api.github.com/users/devjaymoe`)
      .then(response => {
        //console.log(response.data)
        this.setState({
          user: response.data
        });
      })
      .catch(error => {
        console.log('Error:', error)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
          <UserCard user={this.state.user}/>
      </div>
    );
  }
}

export default App;
