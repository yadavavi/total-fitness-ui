import React, {Component} from 'react';
import{ BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Signup from './components/Signup';
import Navbar from './components/CustomNavbar';
import Foot from './components/Foot';
import Login from './components/Login';
import GymLocation from './components/GymLocation';


class App extends Component {



  render(){
    let user= {
       
       Name: "Avinash",
       Age:24,
    };
  return (
   <Router>
    <div>
      <Navbar />
      
      <Route exact path="/" component={Home} />
      <Route  path="/about" component={About}/>
      <Route  path="/news" component={News}/>
      <Route  path="/signup" component={Signup}/>
      <Route path="/login" render={(props)=>(<Login user={user}{...props}/>)}/>
      <Route path="/gymlocation" component={GymLocation}/>
      
      <Foot/>
        
    </div>
    </Router>
  );
}
}

export default App;
