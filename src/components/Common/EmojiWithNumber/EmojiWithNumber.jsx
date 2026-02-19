import { memo, useMemo } from "react";
import styles from "./EmojiWithNumber.module.css";

const EmojiWithNumber = ({ emojis = [], number }) => {
  // Show max 3 emojis - memoized to prevent recalculation
  const displayEmojis = useMemo(() => emojis.slice(0, 3), [emojis]);

  return (
    <div className={styles.container}>
      <div className={styles.emojis}>
        {displayEmojis.map((emoji, index) => (
          <span key={index} className={styles.emoji}>
            {emoji}
          </span>
        ))}
      </div>
      {number !== undefined && number !== null && (
        <span className={styles.number}>{number}</span>
      )}
    </div>
  );
};

export default memo(EmojiWithNumber);
