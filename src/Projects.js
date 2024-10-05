import React, { Component } from "react";
import PROJECTS from "./data/projects";
import Project from "./Project";

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        {PROJECTS.map((PROJECT) => (
          <Project project={PROJECT} />
        ))}
      </div>
    );
  }
}

export default Projects;
