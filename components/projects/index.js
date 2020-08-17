import React, { useState } from "react";
import Title from "../title";
import { Browser } from "react-window-ui";
import ProjectCard from "../projectCard";
import { BrowserView } from "react-device-detect";
import projects from "./projects.json";
import styles from "./projects.module.css";
import Carousel from "react-multi-carousel";

const Projects = () => {
  const [projectUrl, setProjectUrl] = useState(
    "https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai"
  );
  const [selected, selectProject] = useState("早い");

  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1720 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1720, min: 1300 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 1000, min: 0 },
      items: 2
    }
  };

  return (
    <React.Fragment>
      <Title text="Projects" />
      <div className={styles.space}>
        <div className={styles.parent}>
          <Carousel className={styles.projects} style={{height: "220px !important"}} responsive={responsive}>
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
          </Carousel>
          {/* <div className={styles.projects}>
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
          </div> */}
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
