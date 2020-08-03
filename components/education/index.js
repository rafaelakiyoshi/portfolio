import React from "react";
import Title from "../title";
import CustomizedTimeline from "../myPath";
import SkillCard from "../skillCard";
import styles from "./education.module.css";

const Education = () => {
  return (
    <div className={styles.education}>
      <div className={styles.educationChild}>
        <Title text="Path" />
        <CustomizedTimeline />
        <img
        src="./planet2.svg"
        style={{
          width: "300px",
          height: "200px",
          position: "absolute",
          left: 0,
          bottom: -2000
        }}
      />
      </div>
      <div className={styles.educationChild}>
        <Title text="Skills" />
        <div className={styles.technologies}>
          <SkillCard skillSVG="javascript" skillName="JavaScript"/>
          <SkillCard skillSVG="react" skillName="React"/>
          <SkillCard skillSVG="next" skillName="Next.js"/>
          <SkillCard skillSVG="node" skillName="Node.js"/>
          <SkillCard skillSVG="mongodb" skillName="MongoDB"/>
          <SkillCard skillSVG="git" skillName="Git"/>
          <SkillCard skillSVG="graphql" skillName="GraphQL"/>
          <SkillCard skillSVG="jest" skillName="Jest"/>
          <SkillCard skillSVG="less" skillName="Less"/>
          <SkillCard skillSVG="linux" skillName="Linux"/>
          <SkillCard skillSVG="mysql" skillName="MySQL"/>
          <SkillCard skillSVG="npm" skillName="NPM"/>
          <SkillCard skillSVG="postman" skillName="Postman"/>
          <SkillCard skillSVG="redux" skillName="Redux"/>
          <SkillCard skillSVG="vue" skillName="Vue"/>
          <SkillCard skillSVG="typescript" skillName="TypeScript"/>
          <SkillCard skillSVG="docker" skillName="Docker"/>
          <SkillCard skillSVG="ant-design" skillName="Ant Design"/>
          <SkillCard skillSVG="firebase" skillName="Firebase"/>
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
