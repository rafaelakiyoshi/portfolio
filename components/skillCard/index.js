import styles from "./skillCard.module.css";

const SkillCard = props => {
  const { skillSVG, skillName } = props;
  return (
    <div className={styles.skillCard}>
      <img src={`./${skillSVG}.svg`} className={styles.skillIcon} />
      <h1 className={styles.skillName}><stron>{skillName}</stron></h1>
    </div>
  );
};

export default SkillCard;