import { memo } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import Avatar from "../Common/Avatar";
import styles from "./PostHeader.module.css";

const PostHeader = ({ user, timestamp }) => {
  return (
    <div className={styles.cardHeader}>
      <div className={styles.headerLeft}>
        <Avatar src={user.avatar} alt={user.name} size="md" />
        <div className={styles.userInfo}>
          <div className={styles.userName}>{user.name}</div>
          <div className={styles.timestamp}>{timestamp}</div>
        </div>
      </div>
      <button className={styles.optionsButton} aria-label="More options">
        <FiMoreHorizontal className={styles.optionsIcon} />
      </button>
    </div>
  );
};

export default memo(PostHeader);
