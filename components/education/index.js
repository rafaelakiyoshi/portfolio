import React from "react";
import Title from "../title";
import CustomizedTimeline from "../myPath";
import styles from "./education.module.css";

const Education = () => {
  return (
    <div className={styles.education}>
      <div className={styles.educationChild}>
        <Title text="Path" />
        <CustomizedTimeline />
      </div>
      <div className={styles.educationChild}>
        <Title text="Skills" />
        <div className={styles.technologies}>
          <img src="./javascript.svg" className={styles.skillIcon} />
          <img src="./react.svg" className={styles.skillIcon} />
          <img src="./next.svg" className={styles.skillIcon} />
          <img src="./node.svg" className={styles.skillIcon} />
          <img src="./mongodb.svg" className={styles.skillIconSmall} />
          <img src="./git.svg" className={styles.skillIcon} />
          <img src="./graphql.svg" className={styles.skillIcon} />
          <img src="./jest.svg" className={styles.skillIcon} />
          <img src="./less.svg" className={styles.skillIcon} />
          <img src="./linux.svg" className={styles.skillIcon} />
          <img src="./mysql.svg" className={styles.skillIcon} />
          <img src="./npm.svg" className={styles.skillIcon} />
          <img src="./postman.svg" className={styles.skillIcon} />
          <img src="./redux.svg" className={styles.skillIcon} />
          <img src="./vue.svg" className={styles.skillIcon} />
          <img src="./typescript.svg" className={styles.skillIcon} />
          <img src="./docker.svg" className={styles.skillIcon} />
          <img src="./ant-design.svg" className={styles.skillIcon} />
          <img src="./firebase.svg" className={styles.skillIcon} />
        </div>
        <Title text="Languages" />
        <div className={styles.languages}>
          <div className={styles.language}>
            <h3>Portuguese</h3>
            .............
            <h4>Native Speaker</h4>
          </div>
          <br />
          <div className={styles.language}>
            <h3>English</h3>
            .............
            <h4>Fluent</h4>
          </div>
          <br />
          <div className={styles.language}>
            <h3>French</h3>
            .............
            <h4>Fluent</h4>
          </div>
          <br />
          <div className={styles.language}>
            <h3>Japanese</h3>
            .............
            <h4>Beguinner</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
