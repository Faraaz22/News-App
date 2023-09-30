import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React,{Component} from 'react';

export default class App extends Component {
  apiKey = '938ab22941474281a91cc7d4f4168bce';
  render(){
  return (
    <div>
      <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/">
             <News pageSize={6} category='general' apiKey = {this.apiKey} key= "general"/>
          </Route>
          <Route exact path="/general">
             <News pageSize={6} category='general' apiKey = {this.apiKey} key= "general"/>
          </Route>
          <Route exact path="/buisness">
          <News pageSize={6} category='buisness' apiKey = {this.apiKey} key= "buisness"/>
          </Route>
          <Route exact path="/health">
          <News pageSize={6} category='health' apiKey = {this.apiKey} key= "health"/>
          </Route>
          <Route exact path="/entertainment">
          <News pageSize={6} category='entertainment' apiKey = {this.apiKey} key= "entertainment"/>
          </Route>
          <Route exact path="/sports">
          <News pageSize={6} category='sports' apiKey = {this.apiKey} key= "sports"/>
          </Route>
          <Route exact path="/technology">
          <News pageSize={6} category='technology' apiKey = {this.apiKey} key= "technology"/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
  }
}




