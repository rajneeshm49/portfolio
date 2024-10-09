import React, { Component } from "react";
import Projects from "./Projects";
import Profile from "../assets/profile.png";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";

class App extends Component {
  state = {
    showBio: false,
  };

  toggleShowBio = () => {
    this.setState({ showBio: !this.state.showBio });
  };

  render() {
    return (
      <div>
        <img src={Profile} alt="profile" class="profile" />
        <h1>Hello!</h1>
        <p>My name is Rajneesh</p>
        <p>{<Title />} </p>
        <p>
          With over a decade of experience, I specialize in architecting highly
          available and resilient solutions using Cloud services, and deploying
          them seamlessly using Continuous Integration and Deployment
          techniques. Whether it's crafting dynamic Ionic-Angular apps or
          automating workflows, I bring resilient, efficient solutions to the
          table, With a keen interest in CloudFormation. Iam keenly learning to
          be a Certified AWS Solutions Architect by the end of 2024. I thrive on
          building the future of tech. Beyond tech, I'm mastering German, enjoy
          running through nature, nurturing my indoor jungle of plants, and
          staying active through sports. Always chasing growth, in both code and
          life.
        </p>
        <p>I love architecting using Cloud Solutions</p>
        {this.state.showBio ? (
          <div>
            <p>Iam based out of Pune, India</p>
            <button onClick={this.toggleShowBio}>Read less</button>
          </div>
        ) : (
          <button onClick={this.toggleShowBio}>Read more</button>
        )}
        <hr />
        <Projects />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
