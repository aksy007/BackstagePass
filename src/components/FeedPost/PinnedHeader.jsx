import { MdPushPin } from "react-icons/md";
import styles from "./PinnedHeader.module.css";

const PinnedHeader = () => {
  return (
    <div className={styles.pinnedHeader}>
      <MdPushPin className={styles.pinIcon} />
      <span className={styles.pinnedText}>This is a pinned post</span>
    </div>
  );
};

export default PinnedHeader;
