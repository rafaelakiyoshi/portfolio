import styles from "./projectCard.module.css";
const ProjectCard = (props) => {
  const { title, description, technologies, setProjectUrl } = props;
  return (
    <div className={styles.project} onClick={() => setProjectUrl("https://www.google.com")}>
      <div className={styles.github}>
        <img src="./github.svg" className={styles.githubIcon} />
      </div>
      <h1 className="kanji">{title}</h1>
      <p>{description}</p>
      <div className={styles.technologies}>
        {technologies.map(technology => {
          return (
            <img src={`./${technology}.svg`} className={styles.technology} />
          )
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
