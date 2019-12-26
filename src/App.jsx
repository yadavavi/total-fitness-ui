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
import Dashboard  from './components/Dashboard';
import Editform from './components/Editform';


class App extends Component {
constructor(){
  super();
  this.state={
    loggedInStatus: "Not Logged In",
    user:{

    }
  }
}
handleLogin = () =>{
  this.setState({
    loggedInStatus: "Logged In"
  })
}


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
      <Route  exact 
              path="/signup" 
              render={props => (<Signup {...props}
              handleLogin={this.handleLogin}/>)}/>
      <Route path="/login" render={(props)=>(<Login {...props}/>)}/>
      <Route path="/gymlocation" component={GymLocation}/>
      <Route path="/editform/user/:userId" component={Editform}/>
      <Route  exact 
              path="/dashboard" 
              render={props=>(<Dashboard {...props} 
              loggedInStatus={this.state.loggedInStatus}/>)}/>
      
      <Foot/>
        
    </div>
    </Router>
  );
}
}

export default App;
