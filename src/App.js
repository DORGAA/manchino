import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateUser from "./components/model-profile.component";
import Users from "./components/models.component";
import ModelProfile from './components/model-profile.component';
import Models from './components/models.component';
import NavBAr from './components/nav-bar.component'


class App extends Component {
  
  state = {
    keyword: ''
  }
  
  changeKeyword(x){
    this.setState({keyword: x});
  }



  render() {
    return (
    <Router>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
      <div className="Manichino">
        <header>
             <NavBAr keyword={this.state.keyword} chan= {(x) => this.changeKeyword(x)} />
        </header>
  
       
  
  
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route exact path='/' component={() =>  <Models keyRecieved ={this.state.keyword}></Models> } />
                <Route path="/model-profile" component={ModelProfile} />
                <Route path="/models" component={Models} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
    )
  };
}

export default App;