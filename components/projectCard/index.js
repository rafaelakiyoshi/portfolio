import { motion } from "framer-motion";
import styles from "./projectCard.module.css";

const ProjectCard = (props) => {
  const { title, description, technologies, setProjectUrl, projectUrl } = props;
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.05 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.05 } }}
    >
      <div className={styles.project} onClick={() => setProjectUrl(projectUrl)}>
        <div className={styles.github}>
          <img src="./github.svg" className={styles.githubIcon} />
        </div>
        <h1 className="kanji">{title}</h1>
        <p>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((technology) => {
            return (
              <img src={`./${technology}.svg`} className={styles.technology} />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
