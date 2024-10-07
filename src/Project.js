import React, { Component } from "react";

class Project extends Component {
  render() {
    const { id, title, description, image, link } = this.props.project;
    return (
      <div key={id} style={{ display: "inline-block", width: 300, margin: 10 }}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="project_link"
        >
          <h3>{title}</h3>
        </a>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="project_link"
        >
          <img src={image} alt="profile" style={{ width: 200, height: 120 }} />
        </a>
        <p>{description}</p>
      </div>
    );
  }
}

export default Project;
