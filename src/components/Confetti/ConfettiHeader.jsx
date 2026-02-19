import { memo } from "react";
import Confetti from "../../assets/confetti.png";
import styles from "./ConfettiHeader.module.css";

const ConfettiHeader = ({ text = "Your Submission" }) => {
  return (
    <div className={styles.confettiHeader}>
      <img src={Confetti} />
      <span className={styles.confettiText}>{text}</span>
    </div>
  );
};

export default memo(ConfettiHeader);
