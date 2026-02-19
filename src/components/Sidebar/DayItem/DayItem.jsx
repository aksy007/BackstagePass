import { memo } from "react";
import { FiCheck, FiLock } from "react-icons/fi";
import clsx from "clsx";
import styles from "./DayItem.module.css";

const DayItem = ({ day, streak, isSelected, onClick, dayNumber }) => {
  // Use day.isUnlocked from parent (already calculated) or fallback to calculation
  const isUnlocked =
    day.isUnlocked !== undefined ? day.isUnlocked : streak >= day.number;
  const showCheckIcon = isUnlocked;
  const showLockIcon = !isUnlocked;

  const handleClick = () => {
    onClick(dayNumber);
  };

  return (
    <button
      className={clsx(styles.dayItem, {
        [styles.selected]: isSelected,
        [styles.locked]: !isUnlocked,
      })}
      onClick={handleClick}
      disabled={!isUnlocked}
      aria-label={`Day ${day.number}${
        !isUnlocked ? " (locked)" : " (unlocked)"
      }${isSelected ? " (selected)" : ""}`}
    >
      <span className={styles.dayText}>Day - {day.number}</span>
      {showCheckIcon && (
        <div className={styles.checkIconContainer}>
          <FiCheck className={styles.checkIcon} aria-hidden="true" />
        </div>
      )}
      {showLockIcon && (
        <FiLock className={styles.lockIcon} aria-hidden="true" />
      )}
    </button>
  );
};

export default memo(DayItem);
