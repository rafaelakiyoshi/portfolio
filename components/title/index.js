import React from "react";
import styles from './title.module.css';

const Title = props => {
  const { text } = props;
  return (
    <React.Fragment>
      <div className={styles.inline}>
        <div className={styles.dividerLeft}/>
        <h1 className={styles.title}>{text}</h1>
        <div className={styles.dividerRigth}/>
      </div>
    </React.Fragment>
  );
};

export default Title;