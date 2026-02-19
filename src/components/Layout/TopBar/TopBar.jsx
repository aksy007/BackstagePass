import { memo } from "react";
import { HiOutlineBell } from "react-icons/hi";
import EmojiWithNumber from "../../Common/EmojiWithNumber/EmojiWithNumber";
import Avatar from "../../Common/Avatar/Avatar";
import styles from "./TopBar.module.css";
import { DEFAULT_FLAME_COUNT } from "../../../constants/defaults";
import logo from "../../../assets/BackstagePassLogo.png";
import logoDark from "../../../assets/BackstagePassLogoDark.png";
import { useDarkMode } from "../../../hooks/useDarkMode";

const TopBar = ({ user, flameCount = DEFAULT_FLAME_COUNT }) => {
  const isDarkMode = useDarkMode();
  const currentLogo = isDarkMode ? logoDark : logo;
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <img src={currentLogo} alt="BackStage Logo" className={styles.logo} />
        </div>
        <div className={styles.rightSection}>
          <EmojiWithNumber emojis={["🔥"]} number={flameCount} />
          <button className={styles.iconButton} aria-label="Notifications">
            <HiOutlineBell className={styles.icon} />
          </button>
          <Avatar src={user.avatar} alt={user.name} size="md" />
        </div>
      </div>
    </div>
  );
};

export default memo(TopBar);
