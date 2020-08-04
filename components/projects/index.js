import React, { useState } from "react";
import Title from "../title";
import { Browser } from "react-window-ui";
import ProjectCard from "../projectCard";
import { BrowserView } from "react-device-detect";
import projects from "./projects.json";
import styles from "./projects.module.css";

const Projects = () => {
  const [projectUrl, setProjectUrl] = useState(
    "https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai"
  );

  const [selected, selectProject] = useState("早い");

  return (
    <React.Fragment>
      <Title text="Projects" />
      <div className={styles.space}>
        <div className={styles.parent}>
          <div className={styles.projects}>
            {projects.map((project) => {
              return (
                <ProjectCard
                  selected={selected}
                  selectProject={selectProject}
                  setProjectUrl={setProjectUrl}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  projectUrl={project.projectUrl}
                />
              );
            })}
          </div>
          <BrowserView>
            <div className={styles.rigth}>
              <Browser
                className={styles.codeFrame}
                background="transparent"
                padding={0}
                border={0}
              >
                <div className={styles.code}>
                  {/* <iframe
                    style={{
                      border: "none",
                      overflow: "hidden",
                      width: "100%",
                      height: "50vh",
                      margin: 0,
                    }}
                    src={projectUrl}
                    title="W3Schools Free Online Web Tutorials"
                  /> */}
                </div>
              </Browser>
            </div>
            </BrowserView>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
