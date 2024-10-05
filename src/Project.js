import React, { Component } from "react";

class Project extends Component {
  render() {
    const { id, title, description, image, link } = this.props.project;
    return (
      <div key={id} style={{ display: "inline-block", width: 300, margin: 10 }}>
        <h3>{title}</h3>
        <img src={image} alt="profile" style={{ width: 200, height: 120 }} />
        <p>{description}</p>
        <a href={link} target="_blank">
          link
        </a>
      </div>
    );
  }
}

export default Project;
