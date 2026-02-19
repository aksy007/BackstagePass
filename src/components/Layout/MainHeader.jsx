import { memo } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import styles from "./MainHeader.module.css";

const MainHeader = ({ challengeInfo, onBackClick, onInfoClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <button className={styles.backButton} onClick={onBackClick}>
            <FiArrowLeft className={styles.backIcon} />
            <span>Back</span>
          </button>
          <div className={styles.divider}></div>
          <div className={styles.dayIndicator}>
            Day {challengeInfo.currentDay} of {challengeInfo.totalDays}
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.challengeTitle}>
            <span>{challengeInfo.totalDays}-Day Fitness Challenge</span>
            <IoIosInformationCircleOutline
              className={styles.infoIcon}
              onClick={onInfoClick}
              style={{ cursor: onInfoClick ? "pointer" : "default" }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(MainHeader);
