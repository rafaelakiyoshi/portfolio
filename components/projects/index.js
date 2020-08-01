import React, { useState } from "react";
import Title from "../title";
import { Browser } from "react-window-ui";
import ProjectCard from "../projectCard";
import CustomizedTimeline from "../myPath";
import projects from "./projects.json";
import styles from "./projects.module.css";

const Projects = () => {
  const [projectUrl, setProjectUrl] = useState(
    "https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai"
  );
  return (
    <React.Fragment>
      <Title text="Projects" />
      <div className={styles.space}>
        <div className={styles.parent}>
          <div className={styles.projects}>
            {projects.map(project => {
              return (
                <ProjectCard
                  setProjectUrl={setProjectUrl}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  projectUrl={project.projectUrl}
                />
              )
            })}
          </div>
          <div className={styles.rigth}>
            <Browser
              className={styles.codeFrame}
              background="transparent"
              padding={0}
              border={0}
            >
              <div className={styles.code}>
                <iframe
                  style={{
                    border: 0,
                    width: "100%",
                    height: "60vh",
                    margin: 0,
                  }}
                  src={projectUrl}
                  title="W3Schools Free Online Web Tutorials"
                />
              </div>
            </Browser>
          </div>
        </div>
      </div>

      <div className={styles.education}>
        <div className={styles.educationChild}>
          <Title text="Education" />
          <CustomizedTimeline />
        </div>
        <div className={styles.educationChild}>
          <Title text="Skills" />
          <div className={styles.technologies}>
            <img src="./nextjs-white-logo.svg" className={styles.skillIcon} />
            <img src="./react.svg" className={styles.skillIcon} />
            <img src="./swr.svg" className={styles.skillIcon} />
            <img src="./less.svg" className={styles.skillIcon} />
            <img src="./nextjs-white-logo.svg" className={styles.skillIcon} />
            <img src="./react.svg" className={styles.skillIcon} />
            <img src="./swr.svg" className={styles.skillIcon} />
            <img src="./less.svg" className={styles.skillIcon} />
            <img src="./nextjs-white-logo.svg" className={styles.skillIcon} />
            <img src="./react.svg" className={styles.skillIcon} />
            <img src="./swr.svg" className={styles.skillIcon} />
            <img src="./less.svg" className={styles.skillIcon} />
            <img src="./nextjs-white-logo.svg" className={styles.skillIcon} />
            <img src="./react.svg" className={styles.skillIcon} />
            <img src="./swr.svg" className={styles.skillIcon} />
            <img src="./less.svg" className={styles.skillIcon} />
            <img src="./nextjs-white-logo.svg" className={styles.skillIcon} />
            <img src="./react.svg" className={styles.skillIcon} />
            <img src="./swr.svg" className={styles.skillIcon} />
            <img src="./less.svg" className={styles.skillIcon} />
            <img src="./nextjs-white-logo.svg" className={styles.skillIcon} />
            <img src="./react.svg" className={styles.skillIcon} />
            <img src="./swr.svg" className={styles.skillIcon} />
            <img src="./less.svg" className={styles.skillIcon} />
            <img src="./nextjs-white-logo.svg" className={styles.skillIcon} />
            <img src="./react.svg" className={styles.skillIcon} />
            <img src="./swr.svg" className={styles.skillIcon} />
          </div>
          <Title text="Languages" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
