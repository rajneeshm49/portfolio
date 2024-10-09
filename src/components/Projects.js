import React from "react";
import PROJECTS from "../data/projects";
import Project from "./Project";

const Projects = () => (
  <div>
    <h2>Highlighted Projects</h2>
    {PROJECTS.map((PROJECT) => (
      <Project project={PROJECT} />
    ))}
  </div>
);

export default Projects;
