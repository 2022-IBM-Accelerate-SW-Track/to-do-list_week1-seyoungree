import React, { Component } from 'react';
import "./About.css";
import fish_pic from "../assets/fish_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={fish_pic}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Seyoung Ree</div>
          <div className="brief_description">
            bye
          </div>
        </div>
      </div>
    </div>
    )
  }
}