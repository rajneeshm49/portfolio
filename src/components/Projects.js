import React from "react";
import { PROJECTS, SIDE_PROJECTS } from "../data/projects";
import Project from "./Project";

const Projects = () => (
  <div>
    <h2>Highlighted Projects</h2>
    {PROJECTS.map((PROJECT) => (
      <Project project={PROJECT} />
    ))}
    <hr />
    <h2>Side Projects</h2>
    {SIDE_PROJECTS.map((PROJECT) => (
      <Project project={PROJECT} />
    ))}
  </div>
);
export default Projects;
