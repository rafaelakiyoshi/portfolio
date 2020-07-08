import React from "react";
import Title from "../title";
import styles from './projects.module.css';

const Projects = () => {
  return (
    <React.Fragment>
      <Title text="Projects" />
      <div className={styles.space} />
      <Title text="Education" />
      <div className={styles.space} />
      <Title text="Skills" />
      <div className={styles.space} />
    </React.Fragment>
  );
};

export default Projects;