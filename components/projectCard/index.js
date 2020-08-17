import { motion, useCycle } from "framer-motion";
import styles from "./projectCard.module.css";
const screenContent = "< />";
const ProjectCard = (props) => {
  const {
    title,
    description,
    selected,
    setProjectUrl,
    projectUrl,
    selectProject,
  } = props;
  const selectedClass =
    selected === title
      ? { border: "2px solid  #ce822b", backgroundColor: "#4e4e4e" }
      : { border: "0px solid  #444", background: "#2a2a2a;" };
  const translateY = selected !== title ? -15 : 0;

  const clickProjectHandler = () => {
    selectProject(title);
    setProjectUrl(projectUrl);
  };
  return (
    <motion.div
      whileHover={{
        translateY,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.95, transition: { duration: 0.05 } }}
    >
      <div style={{ ...selectedClass }} className={styles.project} onClick={() => clickProjectHandler()}>

        <div className={styles.customIcon}>
          <div className={styles.screen}>{screenContent}</div>
          <div className={styles.keyboard}/>
        </div>

        {/* <div className={styles.github}>
          <img src="./github.svg" className={styles.githubIcon} />
        </div> */}
        <h1 className={styles.cardTitle}>{title}</h1>
        <p>{description}</p>
        {/* <div className={styles.technologies}>
          {technologies.map((technology) => {
            return (
              <img src={`./${technology}.svg`} className={styles.technology} />
            );
          })}
        </div> */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
