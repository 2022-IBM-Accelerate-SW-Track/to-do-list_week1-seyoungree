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
            Hi! I'm a rising sophomore at Columbia University studying CS.<br></br>
            Hobbies: coding, piano, broadway, baking <br></br>
            Here's a picture of a fish. On the Home page, you can add a to-do list. Bye!<br></br>
          </div>
        </div>
      </div>
    </div>
    )
  }
}