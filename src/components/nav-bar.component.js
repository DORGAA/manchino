import React, { Component } from 'react';
import axios from 'axios';
import './nav-bar.css';


export default class NavBAr extends Component {


  
   
    render() {

        
        return (
        <nav className="navbar">
        <div className="container-fluid">
        <div className="navbar-header">
         
                <a className="navbar-brand" href="#" to="/models"><span className="fa fa-home"></span><span className="link"> Models</span></a>
          </div>
        <div className="navbar-brand " id="collapse-1">
             

              <form className="navbar-form navbar-right">
                          <div className="form-group">
                              <input type="text" className="form-control" placeholder="Search"  onChange={e => {
           
            this.props.chan(e.target.value);
          }}
          
          ></input>
                          </div>
                          <button type="submit" className="btn"></button>
                    </form>

        </div>
      </div>
    </nav> 
    
    );

    }
}