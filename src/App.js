import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Profile from "../src/assets/profile.jpeg";

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
        <p>My name is Rajneesh Mishra and Iam a Software Engineer</p>
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
