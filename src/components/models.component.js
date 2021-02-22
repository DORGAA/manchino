import React, { Component } from 'react';
import axios from 'axios';
import './models.css';
import ModelProfile from './model-profile.component';
import { Link } from "react-router-dom";

export default class Models extends Component {
   
  

    BASEURL = 'https://api.models.com/prosearch/sitesearch19-json.html?mdcsearch='

    componentDidMount(){
      this.getUsers();
    }
      

      state = {
        users: [],
        isLoading: true,
        errors: null
      };
    
      valueRecieved = this.props.keyRecieved;
      

      getUsers() {
       
        
        axios
          .get(this.BASEURL+this.valueRecieved)
          .then(response =>
            response.data.people.map(user => ({
              slug: `${user.slug}`,
              name: `${user.name}`,
              type: `${user.type}`,
              image: `${user.image}`
            }))
          )
          .then(users => {
            this.setState({
              users,
              isLoading: false
            });
          })
          .catch(error => this.setState({ error, isLoading: false }));
      }
    
      
    
      render() {
        const { isLoading, users } = this.state;
        return (
            
            <div className="container">
                      <div className="row">
                        <div className="col">
              {!isLoading ? (
                users.map(user => {
                  const { slug, name, type, image } = user;
                  return (
                    
                            <div className="card user-card">
                                <div className="card-header" key={name}>
                                    <h5>{slug}</h5>
                                </div>
                                <div className="card-block">
                                    <div className="user-image">
                            
                                        <img src={'https://i.mdel.net/i/db/'+image} alt={name} className="img-radius"   ></img>
                                    </div>
                                    <Link to={{ pathname: '/model-profile', userProfile: user }} > <h6 className="f-w-600 m-t-25 m-b-10" >{name}</h6></Link>
                                    
                                    <p className="text-muted">Active | Male | Born 23.05.1992</p>
                                    <hr>
                                    </hr>
                                    <p className="text-muted m-t-15">Activity Level: 87%</p>
                                    <ul className="list-unstyled activity-leval">
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                    <div className="bg-c-green counter-block m-t-10 p-20">
                                        <div className="row">
                                            <div className="col-4"> 
                                               <i className="fa fa-comment"></i><p>1256</p>
                                            </div>
                                            <div className="col-4"> 
                                               <i className="fa fa-user"></i><p>8562</p>
                                            </div>
                                            <div className="col-4"> 
                                               <i className="fa fa-suitcase"></i><p>189</p></div>
                                            </div>
                                    </div>
                                    <p className="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <hr></hr>
                                    <div className="row justify-content-center user-social-link">
                                                 <div className="col-auto"><a href="#!"><i className="fa fa-facebook text-facebook"></i></a></div>
                                                 <div className="col-auto"><a href="#!"><i className="fa fa-twitter text-twitter"></i></a></div>
                                                 <div className="col-auto"><a href="#!"><i className="fa fa-dribbble text-dribbble"></i></a></div>
                                    </div>
                                </div>
                            </div>
                      
                  );
                })
              ) : (
                <p>Loading...</p>
              )}  
                     </div>
                    </div>
                  </div>
        );
      
    }
}