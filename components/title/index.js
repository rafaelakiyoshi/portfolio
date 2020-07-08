import React from "react";
import styles from './title.module.css';

const Title = props => {
  const { text } = props;
  return (
    <React.Fragment>
      <div className={styles.inline}>
        <div className={styles.divider}/>
        <h1 className={styles.title}>{text}</h1>
        <div className={styles.divider}/>
      </div>
    </React.Fragment>
  );
};

export default Title;