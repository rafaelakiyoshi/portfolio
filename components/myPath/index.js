import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from "@material-ui/lab/TimelineDot";
import styles from "./myPath.module.css";

export default function CustomizedTimeline() {
  return (
    <Timeline align="left" style={{ paddingLeft: "5%"}}>
      <TimelineItem style={{ minHeight: "120px" }}>
        <TimelineSeparator>
          <TimelineDot variant="outlined" className={styles.dot}>
            2018 - Now
          </TimelineDot>
          <TimelineConnector className={styles.connector} />
        </TimelineSeparator>
        <TimelineContent className={styles.title}>
          Full Stack Developer
          <p>Fluent.ai - Montreal, CA</p>
        </TimelineContent>
        <TimelineOppositeContent style={{ flex: 0, padding: 0 }} />
      </TimelineItem>
      <TimelineItem style={{ minHeight: "120px" }}>
        <TimelineSeparator>
        <TimelineDot variant="outlined" className={styles.dot}>
            2017 - 2018
          </TimelineDot>
          <TimelineConnector className={styles.connector} />
        </TimelineSeparator>
        <TimelineContent className={styles.title}>
          Full Stack Developer
          <p>Lexana - Brasilia, BR</p>
        </TimelineContent>
        <TimelineOppositeContent style={{ flex: 0, padding: 0 }} />
      </TimelineItem>
      <TimelineItem style={{ minHeight: "120px" }}>
        <TimelineSeparator>
        <TimelineDot variant="outlined" className={styles.dot}>
            2016 - 2017
          </TimelineDot>
          <TimelineConnector className={styles.connector} />
        </TimelineSeparator>
        <TimelineContent className={styles.title}>
          Project Manager
          <p>Legal Labs - Brasilia, BR</p>
        </TimelineContent>
        <TimelineOppositeContent style={{ flex: 0, padding: 0 }} />
      </TimelineItem>
      <TimelineItem style={{ minHeight: "120px" }}>
        <TimelineSeparator>
        <TimelineDot variant="outlined" className={styles.dot}>
            2017 - 2018
          </TimelineDot>
          <TimelineConnector className={styles.connector} />
        </TimelineSeparator>
        <TimelineContent className={styles.title}>
          Full Stack Developer
          <p>Legal Labs - Brasilia, BR</p>
        </TimelineContent>
        <TimelineOppositeContent style={{ flex: 0, padding: 0 }} />
      </TimelineItem>
      <TimelineItem style={{ minHeight: "120px" }}>
        <TimelineSeparator>
        <TimelineDot variant="outlined" className={styles.dot}>
            2013 - 2018
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent className={styles.title}>
          Software Engineering
          <p>University of Brasilia - Brasilia, BR</p>
        </TimelineContent>
        <TimelineOppositeContent style={{ flex: 0, padding: 0 }} />
      </TimelineItem>
    </Timeline>
  );
}
