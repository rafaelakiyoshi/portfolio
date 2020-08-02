import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { motion } from "framer-motion";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <motion.div
        animate={{ y: -10 }}
        transition={{ duration: 1, yoyo: Infinity }}
      >
        <h1 className={styles.kanji}>秋吉</h1>
      </motion.div>
      <h1 className={styles.myName}>Rafael Akiyoshi</h1>
      <p className={styles.myDesc}>Software Engineer</p>
      <div className={styles.iconsList}>
        <a href="https://github.com/rafaelakiyoshi">
          <GitHubIcon style={{ fontSize: 20 }} className={styles.logo} />
        </a>
        <a href="https://www.linkedin.com/in/rafaelakiyoshi/">
          <LinkedInIcon style={{ fontSize: 25 }} className={styles.logo} />
        </a>
      </div>
    </div>
  );
};

export default About;
