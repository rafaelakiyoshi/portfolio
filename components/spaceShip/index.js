import styles from "./spaceShip.module.css";

const SpaceShip = () => {
  return (
    <>
      <div className={styles.sun}></div>
      <div className={`${styles.spaceshipBody} ${styles.primaryShipColor}`}>
        <div className={styles.tailFin}></div>
        <div className={styles.fuelContainer}></div>
        <div className={`${styles.noseCone} ${styles.primaryShipColor}`}></div>
        <div class={styles.windShield}></div>
        <i className={`${styles.faBatteryFull} ${styles.fa} ${styles.door}`}></i>
        <div className={`${styles.leg} ${styles.left}`}></div>
        <div className={`${styles.leg} ${styles.left}`}></div>
        <div className={`${styles.navLight} ${styles.flashing}`}></div>
        <div className={styles.windowContainer}>
          <div className={`${styles.window} ${styles.left}`}></div>
          <div className={`${styles.window} ${styles.middle}`}></div>
          <div className={`${styles.window} ${styles.right}`}></div>
        </div>
        <div className={styles.engineStack}>
          <div className={`${styles.nozzle} ${styles.upper}`}></div>
          <div className={`${styles.nozzle} ${styles.lower}`}></div>
        </div>
      </div>
    </>
  );
};

export default SpaceShip;
