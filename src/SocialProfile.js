import React, { Component } from "react";

class SocialProfile extends Component {
  render() {
    const { link, image } = this.props.socialProfile;
    console.log(link);
    return (
      <span>
        <a href={link} target="_blank" rel="noreferrer">
          <img
            src={image}
            alt="social-profile"
            style={{ width: 35, height: 35, margin: 10 }}
          />
        </a>
      </span>
    );
  }
}

export default SocialProfile;
