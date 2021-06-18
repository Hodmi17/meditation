
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MeditationTracker from './MeditationTracker';
import List from './List'
import Home from './Home';
function App() {
  return (
      <Router>
      
        <div class="flex-container">
    <h1 class="logo"><a href="Home">Meditation</a></h1>
    <ul class="navigation">
      <li><a href="Home">Home</a></li>
      <li><a href="MeditationTracker">Meditation Tracker</a></li>
      <li><a href="List">List</a></li>
     
     
    </ul> 
   
    </div>
      < Route path = '/Home' component = {Home}/>
      < Route path = '/List' component = {List}/>
      < Route path = '/MeditationTracker'  component = {MeditationTracker}/>
      
      </Router>
    );
  }

export default App;
