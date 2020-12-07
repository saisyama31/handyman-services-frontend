import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import book from './book';
import navbar from './navbar'
import profile from './profile'
import Passchange from './passchange'


//import './style2.css';

import {Route, BrowserRouter as Router , Switch } from 'react-router-dom';
import passchange from './passchange';

class App extends Component{
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Signup" component={Signup}/>
            <Route exact path="/book" component={book} />
            <Route exact path="/navbar" component={navbar} />
            <Route exact path="/profile" component={profile}/>
            <Route exact path="/passchange" component={Passchange}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
