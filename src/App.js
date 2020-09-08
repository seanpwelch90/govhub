import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Homepage from './components/layouts/homePage';
import Login from './components/login/login';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


class App extends Component {


  render () {
    return (
      <Router>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Homepage} />
      </Router>
    )
  }
  
}

export default App;
