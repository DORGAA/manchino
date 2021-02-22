// ** create-user.component.js ** //
import { Link, useLocation } from "react-router-dom";

import React, { Component } from 'react';
import './model-profile.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import  { useReducer, useState } from 'react';


const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }

//notes stars raiting
const StyledRating = withStyles({
    iconFilled: {
      color: "#ff6d75"
    },
    iconHover: {
      color: "#ff3d47"
    }
  })(Rating);
  
  const customIcons = {
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: "Dissatisfied"
    }
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired
  };
  
 
  
const ModelProfile = () => {

    //comment code
    
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
  
    const handleSubmit = event => {
      event.preventDefault();
      setSubmitting(true);
  
      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    }
  
    const handleChange = event => {
      setFormData({
        name: event.target.name,
        value: event.target.value,
      });
    }


    let user = useLocation().userProfile;
       //if user is undefined then redirect to home page 'models'
        if(user === undefined){
            window.location.href="/";
        } else {
               //else show model profile

            return (
                       
     <div className="page-content page-container" id="page-content">
        <div className="padding">
            <div className="row container d-flex justify-content-center">
                <div className="col-xl-6 col-md-12">
                    <div className="card user-card-full">
                        <div className="row m-l-0 m-r-0">
                            <div className="col-sm-4 bg-c-lite-green user-profile">
                                <div className="card-block  text-center text-white">
                                    <div className="m-b-25"> <img height='100px' width='100px' src={'https://i.mdel.net/i/db/'+user.image} alt={user.name} className="img-radius" /> </div>
                                    <h6 className="f-w-600">{user.name}</h6>
                                    <p>{user.type}</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="card-block">
                                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <p className="m-b-10 f-w-600">Email</p>
                                            <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <p className="m-b-10 f-w-600">Phone</p>
                                            <h6 className="text-muted f-w-400">98979989898</h6>
                                        </div>
                                    </div>
                                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                                    <div className="row">
                                    <form action="/api" method="POST">
                                    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Notes</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
        />
      </Box>
      <hr/>
      <div className="commentForm panel panel-default">
          <div className="panel-body">
          {submitting &&
        <div>Submtting Form...</div>
        }
        <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
            <form className="form" onSubmit={handleSubmit}>
              <input className="form-control" type="text" placeholder="Your name" name="Said " onChange={handleChange}  /><br/>
            </form>
          </div>
        </div>
    </div>
                                    </form>
                                    </div>
                                    <ul className="social-link list-unstyled m-t-40 m-b-10">
                                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            )
        }
        
    
}


export default ModelProfile
